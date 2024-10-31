//qn1 
// function scale_stream(c, stream) {
//     return stream_map(x => c * x, stream);
// }
// const A = pair(1, () => scale_stream(2, A));
// // function mul_streams(a, b) {
// //     return pair(head(a) * head(b),
// //                 () => mul_streams(stream_tail(a), stream_tail(b)));
// // }
// // const integers=pair(1, () => pair(2, () => pair(3, ()=>pair(4, ()=> pair(5, ()=>pair(6, ()=> null))))));
// //const B = pair(1, () => mul_streams(B, integers));
// eval_stream(A, 6); //[1, [2, [4, [8, [16, [32, null]]]]]]
//eval_stream(B, 6);

// //qn2
// function add_streams(s1, s2) {
//     return is_null(s1)
//         ? s2
//         : is_null(s2)
//         ? s1
//         : pair(head(s1) + head(s2),
//                 () => add_streams(stream_tail(s1),
//                 stream_tail(s2)));
// }
// // function scale_stream(c, stream) {
// //     return stream_map(x => c * x, stream);
// // }
// const add_series = add_streams;
// const scale_series = scale_stream;
// function negate_series(s) {
//     return scale_series(-1, s);
// }
// function subtract_series(s1, s2) {
//     return add_series(s1, negate_series(s2));
// }
// function coeffs_to_series(list_of_coeffs) {
//     const zeros = pair(0, () => zeros);
//         function iter(list) {
//         return is_null(list)
//         ? zeros
//         : pair(head(list),
//         () => iter(tail(list)));
//     }
//     return iter(list_of_coeffs);
// }

// //mthd 1
// const alternating_ones = pair(1, () => pair(-1, () => alternating_ones)); 

// //mthd 2
// const ones=pair(1, ()=>ones);
// const negtwos=pair(0, () => pair(-2, ()=>negtwos));
// eval_stream(add_streams(ones, negtwos), 6);

// //mthd 1
// const zeros=pair(0, ()=>zeros);

// eval_stream(coeffs_to_series(list(1, 1, 1, 1, 1)), 4);



function stream_pairs(s) {
    return is_null(s) 
        ? null
        : stream_append(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            stream_pairs(stream_tail(s)));
}

const ints=pair(1, () => pair(2, () => null));
stream_pairs(ints);
stream_pairs(integers_from(1));


