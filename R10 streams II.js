// // //finite stream
// // // An empty stream
// // const s1 = null;
// // // A stream with element 1
// // const s2 = pair(1, () => null);
// // // A stream with elements 1, 2, 3
// // const s3 =
// // pair(1, () => pair(2, () => pair(3, () => null)));
// // tail(s3);

// // //infinite stream
// // function ones_stream() {
// //     return pair(1, ones_stream);
// // }
// // const ones = ones_stream();
// // head(ones); 
// // head(tail(ones)()); 
// // head(tail(tail(ones)())()); 
// // draw_data(ones);


// // //stream processing
// // /*function stream_tail (s) {
// //     return tail(s)();
// // }

// // function enum_stream(low, hi) {
// //     return low > hi
// //         ? null
// //         : pair(low,
// //                 () => enum_stream(low + 1, hi));
// // }

// // function stream_ref(s, n) {
// //     return n === 0
// //         ? head(s)
// //         : stream_ref(stream_tail(s), n - 1);
// // }
// //*/

// function stream_remove1(s, n) {
//     return n===0
//           ? stream_tail(s)
//           : pair(head(s), () => stream_remove1(stream_tail(s), n-1));
// }
// const s=enum_stream(1, 5);
// stream_ref(stream_remove1(s, 3), 3);

// draw_data(s);
// function stream_remove2(s, v) {
//     return is_null(stream_member(v, s))
//           ? s
//           : v===head(s)
//           ? stream_remove2(stream_tail(s), v)
//           : pair(head(s), () => stream_remove2(stream_tail(s), v));
// }
// stream_ref(stream_remove2(s, 3), 3);

// // //wrapping arnd
// // // original version
// // function ones_stream() {
// //     return pair(1, ones_stream);
// // }
// // const ones = ones_stream();

// // // alternative version
// // const ones = pair(1, () => ones);
// // head(tail(ones)());


// // const rep=pair(1, () => pair(2, () => pair(3, () => rep)));
// // head(rep);
// // head(stream_tail(rep));

// // function add_streams(s1, s2) {
// //     return is_null(s1)
// //           ? s2
// //           : is_null(s2)
// //           ? s1
// //           : pair(head(s1)+head(s2), 
// //                   () => add_streams(stream_tail(s1), stream_tail(s2)));
// // }

// // const fibs =
// //     pair(0,
// //         () => pair(1,
// //                     () => add_streams(
// //                     stream_tail(fibs),
// //                     fibs)));
// // eval_stream(fibs, 10);

// // //memoization
// function memo_fun(fun) {
//     let already_run=false;
//     let result=undefined;
    
//     function mfun() {
//         if (!already_run) {
//             result=fun();
//             already_run=true;
//             return result;
//         } else {
//             return result;
//         }
//     }
//     return mfun;
// }

// function ms(m, s) {
//     display(m);
//     return s;
// }
// //not memoized version
// //const onesA = pair(1, () => ms("A", onesA));
// // stream_ref(onesA, 3);   //display A 3 times
// // //memoized version
// const onesB = pair(1, memo_fun(() => ms("B", onesB)));
// stream_ref(onesB, 3);   //display B 1 time, since when applying memo_fun the second time, already_run=true, it will not run fun

// //not memoized version
// // function m_integers_from_notm(n) {
// //     return pair(n,
// //                 () => ms("M: " + stringify(n),
// //                          m_integers_from_notm(n + 1)));
// // }
// // const m_integers = m_integers_from_notm(1);
// // stream_ref(m_integers, 0);
// // stream_ref(m_integers, 1);
// // stream_ref(m_integers, 5);


// // //memoized version
// function m_integers_from(n) {
//     return pair(n,
//                 memo_fun(() => ms("M: " + stringify(n),
//                          m_integers_from(n + 1))));
// }
// const m_integers = m_integers_from(1);
// // stream_ref(m_integers, 0);
// stream_ref(m_integers, 1);
// stream_ref(m_integers, 5);



// const s1=pair(1, () => s1);
// stream_ref(stream_map(x=> x*2, s1), 4);
// function times(s) {
//     return stream_map(x=>x*2, s);
// }
// const s2=pair(1, () => stream_map(x=>x*2, s2));
// stream_ref(s2, 3);


// const hh1=pair(undefined, undefined);
// const hh1_help=hh1;
// set_head(hh1_help, hh1_help);
// set_tail(hh1_help, hh1);
// set_head(hh1, hh1_help);
// set_tail(hh1, hh1);
// draw_data(hh1);











