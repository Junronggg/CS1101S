//qn2
function zip_list_of_streams(ss) {
    return pair(head(head(ss)),
                () => zip_list_of_streams(append(tail(ss), 
										list(stream_tail(head(ss))))));
}
let s1=pair(1, () => s1);
let s2=pair(2, () => s2);
zip_list_of_streams(list(s1, s2));

//qn3
function partial_sums(s) {
    function helper(s, sum_previous) {
        const sum_so_far = head(s) + sum_previous;
        return pair(sum_so_far,
                    () => helper(stream_tail(s), sum_so_far));
    }
    return helper(s, 0);
}
function partial_sums(s) {
    return pair(head(s),
                () => add_streams(stream_tail(s), 
							partial_sums(s)));
}
