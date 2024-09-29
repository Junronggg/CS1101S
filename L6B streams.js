//infinite stream
function ones_stream() {
    return pair(1, ones_stream);
}

const ones = ones_stream();

head(ones); // 1

//head(tail(ones)()); // 1

//head(tail(tail(ones)())()); // 1

function stream_tail(stream) {
    return tail(stream)();
}
const ones = ones_stream();

function enum_stream(low, hi) {
    return low > hi
           ? null
           : pair(low,
                  () => enum_stream(low + 1, hi));
}
const s = enum_stream(1, 100);
head(s); 
head(stream_tail(s));
head(stream_tail(stream_tail(s)));

function stream_map(f, s) {
    return is_null(s)
           ? null
           : pair(f(head(s)),
                    () => stream_map(f, stream_tail(s)));
}
function stream_filter(p, s) {
    return is_null(s)
           ? null
           : p(head(s))
                ? pair(head(s),
                        () => stream_filter(p, stream_tail(s)))
                : stream_filter(p, stream_tail(s));
}