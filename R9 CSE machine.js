// function iter(n, acc) {
//     return n === 1
//           ? acc
//           : iter(n - 1, acc * n); 
// }
// function fact_iter(n) {
//     return iter(n, 1);
// }

// fact_iter(100);

//qn1
// function foo(x) {
//     while (x<20) {
//         return foo(x+1);
//     }
// }
// foo(1);

//qn3
// const x=1;
// {
//     const x=2;
//     {
//         const x=3;
//         {
//             const x=4;
//             {
//                 const x=5;
//             }
//         }
//     }
// }

//qn4
// function foo(x) {
//     return x => y => z => foo(x)(y)(z);
// }
// foo(1)(2)(3);

function f(n) {
    return n;
}
function foo(x) {
    return x;
}
f(foo);
