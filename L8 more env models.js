//mission
//qn1
// function d_reverse(xs) {
//     if (is_null(xs)) {
//         return xs;
//     } else if (is_null(tail(xs))) {
//         return xs;
//     } else {
//         const temp = d_reverse(tail(xs));
//         set_tail(tail(xs), xs);
//         set_tail(xs, null);
//         return temp;
//     }
// }
// const L = list(2, 3);
// const M = d_reverse(L);
// M;

//qn2
// const twice = f => (x => f(f(x)));
// const yy = (twice(x => 2 * x + 1))(3);
// yy;

// function twice(f) {
//     function help1(x) {
//         return f(f(x));
//     }
//     return help1;
// }
// function help2(x) {
//     return 2*x+1;
// }
// const yy=twice(help2)(3);
// yy;

//qn3
function d_map(fun, xs) {
    if (!is_null(xs)) {
        const h = head(xs);
        set_head(xs, fun(h));
        d_map(fun, tail(xs));
    }
}
const L = list(5);
d_map(x => y => x + y, L);
L;

//some more
// function curry(f) {
//     return x=> y => f(x, y);
// }
// (curry(math_pow))(3)(4);

// function curry(f) {
//     function h1(x) {
//         function h2(y) {
//             return f(x, y);
//         }
//         return h2;
//     }
//     return h1;
// }
// (curry(math_pow))(3)(4);

