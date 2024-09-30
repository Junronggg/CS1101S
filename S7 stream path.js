//infinite stream that prints 1, 2, 2, 3, 3, 3, 4...
function n_of_n_stream() {
    // YOUR SOLUTION HERE
    function n_of_n(ini) {
        function print_n_n_times(n, counter) {
            return counter>0
                   ? pair(n, ()=> print_n_n_times(n, counter-1))
                   : n_of_n(ini+1);
        }
        return print_n_n_times(ini, ini);
    }
    return n_of_n(1);
}

//shorten stream
/*
function shorten_stream(s, k) {
    return k===0
           ? null 
           : stream_length(s) <=k
           ? s
           : list_to_stream(map(x => stream_ref(s, x), enum_list(0, k-1)));
}*/

function shorten_stream(s, k) {
    return k===0
           ? null 
           : stream_length(s) <=k
           ? s
           : pair(head(s), () => shorten_stream(tail(s), k-1));
}