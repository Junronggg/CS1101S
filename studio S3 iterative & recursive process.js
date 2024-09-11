import {square, heart, show, stack, beside, blank, circle, stack_frac, beside_frac} from "rune";

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


function moony_1(bottom_right)
{
    return stack(beside(circle, blank), beside(square, bottom_right));
}
show(moony_1(circle));

function moony_2(n)
{
    return n===2
           ? moony_1(circle)
           : moony_1(moony_2(n-1));
}
show(moony_2(5));

function moony1(n)
{ return n===1
           ? circle
           : beside(stack_frac(1/n, circle, square), stack_frac(1/n, blank, moony1(n-1)));
}

//recursive
function moony(n)
{
    return n===1
           ? circle
           : beside_frac(1/n, stack_frac(1/n, circle, square), stack_frac(1/n, blank, moony(n-1)));
}
show(moony1(5));
show(moony(5));

//iterative
function moony11(n, counter, shape)
{
    return counter>n
           ? shape
           : moony11(n-1, 
                    counter+1, 
                    beside_frac(1/(counter+1), stack_frac(1/(counter+1), circle, square), stack_frac(1/(counter+1), blank, shape)));
}
show(moony11(3, 1, circle));
