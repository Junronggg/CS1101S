//length
//recursive 
function length(xs) {
    return is_null(xs)
    ? 0
    : 1 + length(tail(xs));
    }
    
//iterative
function length_iter(xs) {
    function len(ys, counted_so_far) {
        return is_null(ys)
        ? counted_so_far
        : len(tail(ys), counted_so_far + 1);
        }
    return len(xs, 0);
    }
    
//append
function append1(lst1, lst2){
    return is_null(lst1)
           ? lst2
           : pair(head(lst1), append1(tail(lst1), lst2));
}

//reverse
function reverse1(lst) {
    return is_null(lst)
           ? null
           : append (reverse(tail(lst)), list(head(lst)));
}

function reverse2(lst){
    function rev_iter(original, reversed)
    {
        return is_null(original)
               ? reversed
               : rev_iter(tail(original),
                          pair(head(original), reversed));
    }
    return rev_iter(lst, null);
}

//map
function mapp(f, lst) {
    return is_null(lst)
           ? null 
           : pair(f(head(lst)), mapp(f, tail(lst)));
}

//filter
function filter(pred, xs) {
    return is_null(xs)
           ? null
           : pred(head(xs))
                ? pair(head(xs), filter(pred, tail(xs)))
                : filter(pred, tail(xs));
}

//accumulate
function accumulate(op, initial, xs) {
    return is_null(xs)
        ? initial
        : op(head(xs), accumulate(op, initial, tail(xs)));
}





