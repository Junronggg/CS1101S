/* qn1 wrong
function flatten_list(tree) {
    function flatten(ini, flattened) {
        return is_null(ini)
               ? flattened
               : is_list(head(ini))
                   ? flatten(tail(tree), flatten(head(tree), flattened))
                   : append(head(tree), flatten(tail(tree), flattened));
    }
    return flatten(tree, null);
}*/


/* qn1 wrong
function flatten(tree1, flattened){
    return is_null(tree1)
           ? flattened
           : is_list(head(tree1))
               ? flatten(head(tree1), tail(tree1))
               : flatten(tail(tree1), append(head(tree1), tail(tree1)));
}
function flatten_list(tree) {
    return accumulate(flatten(tree, null), null, tree);
}
const lol=list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
flatten_list(lol);
*/


const lol=list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
const lst=list(list(1, 2), 3);
const lst2=list(1, 2, 3, 4, 5);
//accumulate ((x, y) => !is_list(x) ? pair(x, y) : pair(head(x), pair(tail(x), y)), null, lst);
//qn1
function flatten_list(lst) {
    return 
}

/*const lst=pair(pair(1, pair(2, null)), pair(3, null));
display_list(lst);*/


//qn2

function tree_sum(tree) {
    return is_null(tree)
           ? 0
           : (is_list(head(tree))
              ? tree_sum(head(tree))
              : head(tree))
              +
              tree_sum(tail(tree));
}
const my_tree=list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);


