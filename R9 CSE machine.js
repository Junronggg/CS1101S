//qn1
//list(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//qn2
// const n = 40;
// function qn2(n) {
//     return n === 20
//           ? 20
//           : n * qn2(n + 1); 
// }
// qn2(0);

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
//(x => x => x => x)(1)(2)(3);

//qn5;
function f(x) {
	return x === 0
		? true
		: f(x - 1) ? true : true;
}

f(5);
