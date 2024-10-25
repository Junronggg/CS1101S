//exp
//1 - 5 / (2 * 4) + 3;

//declaration
// const x=1;

//sequence
// 2+3;
// 4/5;
// 6*7;

//conditional exp
// const x = true;
// x ? 1 + 2 : 3 * 4;

//logical composition
// const x = true;
// const y = false;
// x && y;

//conditional statement
// let x = 1;
// if (x > 2) {
//     11;
//     } else {
//         22;
//     }

//while loop (fac eg)
// let n = 5;
// let i = 1;
// let result = 1;
// while (i < n) {
//     i = i + 1;
//     result = result * i;
// }

//blocks
// let x = 3;
// {
//     const x = 5;
// }
// x+1;

// let x = 3;
// if (x <= 1) {
//     let y = x;
//     x = y + 1;
//     } else {
//         let z = x;
//         x = z * z;
// }
// {
//     x = x + 1;
// }
// {
//     let x = 5;
//     let y = 8;
//     {
//         let x = 20 + y;
//     }
//     x = x + 1;
// }
// x;

// function factorial(n) {
//     return n === 1
//     ? 1
//     : n * factorial(n - 1);
// }
// factorial(3);

//function
// const x = 1;
// const square = x => x * x;
// square(5);
// x+3;

// function f(n, b) {
//     if (b) {
//         return n * n;
//     }
//     const k = 4;
//     return k * n;
// }
// f(4, true) + 5;

//recursive process
// const n = 40;
// function factorial(n) {
//     return n === 1
//           ? 1
//           : n * factorial(n - 1); 
// }
// factorial(4);

//iterative
function iter(n, acc) {
    return n === 1
           ? acc
           : iter(n - 1, acc * n); 
}
function fact_iter(n) {
    return iter(n, 1);
}

fact_iter(100);