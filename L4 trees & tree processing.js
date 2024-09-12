//counting no of items in tree
function count(tree){
    return is_null(tree)
           ? 0
           : (is_list(head(tree))
                ? count(head(tree))
                : 1)
             + count(tail(tree));
}

//scaling
function scale_tree(tree, k) {
    return map(subtree =>
                         !(is_list(subtree))
                         ? k * subtree
                         : scale_tree(subtree, k), 
                tree);
}
