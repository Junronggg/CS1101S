//create syntax tree
//const syntax_tree = parse("8 + 34;");
//display(syntax_tree);
//const syntax=parse("10+9*8;");
//display(syntax);

//syntax of literals
// syntax predicate of literal(in the following in maroon)
function is_literal(comp) {
    return is_tagged_list (comp , "literal");     //check whether the exp is literal value
}
function is_tagged_list (comp , the_tag ) {
    return is_pair (comp) && head(comp) === the_tag ;  
}
// selector of literal(in the following in blue)
function literal_value(comp) {
    return head(tail(comp ));   //get literal value if it is literal
}

// syntax predicate of binary operation( parsing details in 4.1.2)
const is_operator_combination = comp =>
is_tagged_list (comp ,"binary_operator_combination");
// selectors of binary operation
const op_comb_symbol = comp => list_ref (comp ,1);
const op_first_operand = comp => list_ref (comp ,2);
const op_second_operand = comp => list_ref (comp ,3);

//apply function to run operand operator operand
function apply(operator , operands ) {      //put in operator and list of operands
    const first_op = head( operands );
    const second_op = head(tail( operands ));
    return operator === "+"
        ? first_op + second_op
        : operator === "-"
        ? first_op - second_op
        : operator === "*"
        ? first_op * second_op
        : operator === "/"
        ? first_op / second_op : error (); 
}

//evaluate function to eva exp
function evaluate(expr) {
    return is_literal(expr)
        ? literal_value(expr)
        : is_operator_combination(expr)
        ? apply(op_comb_symbol(expr),
                list_of_values(
                    list(op_first_operand(expr), op_second_operand(expr ))))
        : error(expr , " Unknown expression :");
}
function list_of_values( exprs ) {
    return map(evaluate, exprs);
}


// const syntax_tree=parse ("1.4/2+2.3/2;");  //list("binary_operator_combination", "+", list("literal", 1.4), list("binary_operator_combination", "/", list("literal", 2.3), list("literal", 70.4)))
// display_list(syntax_tree);
// const syn=parse("3;");  //list("literal", 3) -> is_pair, head(ayn)==="literal" => thus syn is literal
// display_list(syn);

// evaluate(parse("3.2+1;"));
// evaluate(parse("1+3/2;"));

// display_list(parse("true;"));
// display_list(parse("true ? 1  : 17;"));

//syntax predicate of conditional expr
function is_conditional(comp) {
    return is_tagged_list (comp , "conditional_expression");     //check whether the exp is literal value
}

// selectors of conditional expr
const cond_expr_pred = comp => list_ref (comp ,1);
const cond_expr_cons = comp => list_ref (comp ,2);
const cond_expr_alt = comp => list_ref (comp ,3);

//evaluate conditionals
function eval_conditional (comp) {
    return is_truthy ( evaluate ( cond_expr_pred (comp )))
        ? evaluate ( cond_expr_cons (comp))
        : evaluate ( cond_expr_alt (comp));
}
const is_truthy = x => is_boolean (x) ? x : error ();

//syntax predicate of sequence
function is_sequence(comp) {
    return is_tagged_list (comp , "sequence");     //check whether the exp is literal value
}
function is_empty_sequence(comp) {
    return is_null(comp);
}
function is_last_statement(comp) {
    return is_null(tail(comp));
}

// selectors of sequence
const sequence_statements = comp => head(tail(comp)); //***tail of comp is [list(...), null]!!!, so need to eliminate the null at tail
const first_statement = comp => head(comp);
const rest_statements = comp => tail(comp);
//const sequence_statements=comp => pair(first_statement(comp), rest_statements(comp));

// //evaluate sequence
function eval_sequence (stmts ) {
    if (is_empty_sequence(stmts )) {
        return undefined ;
    } else if (is_last_statement(stmts )) {
        return evaluate (first_statement(stmts ));
    } else {
        const ignore = evaluate (first_statement( stmts ));
        return eval_sequence (rest_statements(stmts)); 
    } 
}

//evaluate function to eva booleans/conditionals/sequences
function evaluate_cond_seq(expr) {
    return is_literal(expr)
        ? literal_value(expr)
        : is_operator_combination(expr)
        ? apply(op_comb_symbol(expr),
                list_of_values(
                    list(op_first_operand(expr), op_second_operand(expr ))))
        : is_conditional(expr)
        ? eval_conditional (expr)
        : is_sequence(expr)
        ? eval_sequence (sequence_statements(expr ))
        : error(expr , " Unknown expression :");
}

//evaluate_cond_seq(parse("true?1:2;"));

evaluate_cond_seq(parse("1; 2; 3;"));
// display_list(parse("1; 2; 3;"));
// display_list(parse("const x=2;"));
// display_list(parse("x=3;"));
//display_list(parse("const x=4; {const x=2;}"));


//selector of declarations
function declaration_symbol (comp) {
    return head(tail(list_ref(comp, 1)));
}
function declaration_value_expression(comp) {
    return head(tail(list_ref(comp, 2)));
}
function eval_declaration (comp , env) {
    assign_symbol_value (
        declaration_symbol(comp),
        evaluate (declaration_value_expression(comp),
                  env),
        env );
    return undefined ;
}

//predicate of declaration

//create new block
function make_frame (names , values ) {
    return pair(names , values );
}
const frame_names = head;
const frame_values = tail;
//extend new frames from previous env
function extend_environment (ns , vs , e) {
    return pair( make_frame (ns , vs), e);
}
const the_empty_environment = null;
const the_global_environment = the_empty_environment ;


//eval blocks
function eval_block (component , env) {
    const body = block_body( component );
    const locals = scan_out_declarations (body );
    const unassigneds = list_of_unassigned ( locals );
    return evaluate (body , extend_environment (locals ,unassigneds ,env ));
}

const list_of_unassigned = symbols => map( symbol => "* unassigned *", symbols );

function scan_out_declarations (comp) {
    return is_sequence(comp)
    ? accumulate (
        append ,
        null ,
        map( scan_out_declarations ,
            sequence_statements(comp )))
    : is_declaration(comp)
    ? list(declaration_symbol(comp ))
    : null;
}


//evaluate function to eva blocks/declaration/assignment
function evaluate_blocks(expr, env) {
    return is_literal(expr)     //literal value
        ? literal_value(expr)
        : is_operator_combination(expr)     //operator +-*/
        ? apply(op_comb_symbol(expr),
                list_of_values(
                    list(op_first_operand(expr), op_second_operand(expr ))))
        : is_conditional(expr)      //conditional expr
        ? eval_conditional (expr)
        : is_sequence(expr)     //sequence
        ? eval_sequence (sequence_statements(expr ))
        : is_name(expr)     
        ? lookup_symbol_value ( symbol_of_name (expr), env)
        : is_block(expr)    //block
        ? eval_block (expr , env)
        : is_declaration(expr)      //declaration
        ? eval_declaration (expr , env)
        : error(expr , " Unknown component :");
}









