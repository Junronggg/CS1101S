//qn1
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
    //or accumulate((x, y) => accumulate(list(f(x)), y), null, xs);
}
display(my_map(x => x+1, list(1, 2, 3)));

//qn2
function remove_duplicate(lst) {
    return is_null(lst) || length(lst) <=1
           ? lst
           : append(list(head(lst)), filter(x => !(x===head(lst)), remove_duplicate(tail(lst)))); 
           // can also be : append(list(head(lst)), remove_duplicates(filter(x => !(x===head(lst)), tail(lst))));
}
//***VERY IMPORTANT: append must have two arguments which are list
//cannot be append(head(lst), ...), since head(lst) is element, not list!!!
display(remove_duplicate(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));

//qn3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // Combinations that do not use the head coin for the remaining amount.
        const combi_B = makeup_amount(x-head(coins), tail(coins));
        // Combinations that use the head coin.
        const combi_C = map(x => pair(head(coins), x), combi_B);
        return append(combi_A, combi_C);
    }
}
makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));

//inclass studio sheet
//qn1
member(1, list(1, 2, 3, 4, 4, 3, 2, 1, 2));
function remove_duplicates(lst) {
    return accumulate ((x, y) => is_null(member(x, y)) ? pair(x, y) : y, 
                        null, lst);
}
remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));

//qn2
function subsets(lst) {
    if (is_null(lst)) {
        return list(null);
    }
    else {
    //combination that does not take the first element
    const combi_A = subsets(tail(lst));
    //combination that takes the first element
    const combi_B = subsets(tail(lst));
    //combine tgt
    const combi_C = map(x => pair(head(lst), x), combi_B);
    return append(combi_A, combi_C);
    }
}
display_list(subsets(list(1, 2, 3)));

//qn3
//using remove: remove(2, list(1, 2, 3));
function permutation(lst) {
    function helping(n, lst, init) {
        return n===0
               ? lst
               : 
    }
}


