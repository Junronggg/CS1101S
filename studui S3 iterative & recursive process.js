import {square, heart, show, stack, beside, blank} from "rune";

//iterative
function f1(rune1, n, rune2)
{
    return n===0
           ? rune2
           : f1(rune1, n-1, beside(rune1, stack(blank, rune2)));
}
//recursive
function f12(rune1, n, rune2)
{
    return n===0
           ? rune2
           : beside(rune1, stack(blank, f12(rune1, n-1, rune2)));
}

show (f1(square, 3, heart));
show( f12(square, 3, heart));

//recursive
function f2(rune, n)
{
    return n===0
           ? rune
           : stack(beside(blank, f2(rune, n-1)), square);
}
//iterative
function f21(rune, n)
{
    return n===0
           ? rune
           : f21(stack(beside(blank, rune), square), n-1);
}
show(f2(heart, 3));
show(f21(heart, 3));

