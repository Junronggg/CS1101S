//sorting
//sort mthd 1: wishful thinking, assuming n-1 elements are already sorted
function insert(element, lst) {
    return is_null(lst)
           ? list(element)
           : element <= head(lst)
           ? pair(element, lst)
           : pair(head(lst), insert(element, tail(lst)));
}
function insertion_sort(lst) {
    return is_null(lst)
           ? lst
           : insert(head(lst), insertion_sort(tail(lst)));
}
insertion_sort(list(1, 3, 2, 5));

//mthd 2: selection sort, find the smallest element
function smallest(xs) {
    return accumulate((x, y) => x < y ? x : y,
    head(xs), tail(xs));
}
function selection_sort(xs) {
    if (is_null(xs)) {
        return xs;
    } else {
        const x = smallest(xs);
        return pair(x, selection_sort(remove(x, xs)));
    }
}

//mthd 3: wishful thinking, Split the list in half, assuming both splited lists are sorted
function merge_sort(xs) {
if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid = middle(length(xs));
        return merge(merge_sort(take(xs, mid)), merge_sort(drop(xs, mid)));
    }
}

//how to merge 2 sorted sublists together? always compare the first element
function merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        const x = head(xs);
        const y = head(ys);
        return x < y
        ? pair(x, merge(tail(xs), ys))
        : pair(y, merge(xs, tail(ys)));
    }
}

// half, rounded downwards
function middle(n) {
    return math_floor(n / 2);
}
// put the first n elements of xs into a list
function take(xs, n) {
    // YOUR SOLUTION HERE
    return n<=0
           ? null 
           : pair(head(xs), take(tail(xs), n-1));
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    // YOUR SOLUTION HERE
    return n<=0
           ? xs 
           : remove(head(xs), drop(tail(xs), n-1));
}



//symbolic processing
// numerical differentiation: f'(x)=(f(x+dx)-f(x))/dx when dx tends to very small
function deriv_numeric(f) {
    const dx = 0.000001;
    return x => (f(x + dx) - f(x)) / dx;
}
// Example use:
const f = x => x * x + x + 4;
const f_prime = deriv_numeric(f);
f(3); // returns 16
f_prime(3); // returns 7.000100000027487

function prime_list(start, end, counter, list)
    {
        function is_prime(x, counter) {
            return x!==1 && ((x===2) || counter < 2)
                   ? true
                   : (x===1) || (x%counter===0)
                   ? false
                   : is_prime(x, counter-1);
    
        }
        return counter<start || counter>end
               ? list
               : is_prime(counter, counter-1)
               ? prime_list(start, end, counter+1, pair(counter, list))
               : prime_list(start, end, counter+1, list);
    }
const prime_number_list=prime_list(75, 150, 75, null);
display(map(x => pair(x, 3), prime_number_list));
