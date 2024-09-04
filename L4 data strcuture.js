//create constructor
const pair = (x, y) => f => f(x, y);
const head = p => p((x, y) => x);
const tail = p => p((x, y) => y);

function make_rat(n, d) 
    {
    return pair(n, d);
    }
function numer(x) 
    {
    return head(x);
    }
function denom(x) 
    {
    return tail(x);
    }
    
const a=make_rat(2, 3);
numer(a);

//operations
function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
    denom(x) * denom(y));
}
function sub_rat(x, y) {
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
    denom(x) * denom(y));
}
function mul_rat(x, y) {
    return make_rat(numer(x) * numer(y),
    denom(x) * denom(y));
}
function div_rat(x, y) {
    return make_rat(numer(x) * denom(y),
    denom(x) * numer(y));
}

//equality of two rational no
function equal_rat(x, y) {
    return numer(x) * denom(y) === numer(y) * denom(x);
}

//printing rational no
function rat_to_string(x) {
    return stringify(numer(x)) +
    " / " +
    stringify(denom(x));
}
