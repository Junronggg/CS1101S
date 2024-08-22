//substitution model
const cost_per_meter = 199.95;
function circumference ( radius ) 
{
    return 2 * math_PI * radius ;

}
function cost_of_circular_handrail ( r ) 
{
    return cost_per_meter * circumference ( r );
}
cost_of_circular_handrail ( 1.2 ); 


//recursion vs iteration
import {show, stack, stack_frac, heart} from "rune";

function stackn(n, rune)
{
    return n===1
    ? rune
    : stack_frac(1/n, rune, stackn(n-1, rune));
}
show(stackn(5, heart));


function square(x)
{
    return x*x;
}
//version 1: recursion 递归
function repeat_pattern (n , pat , init ) 
{
    return n === 0
    ? init
    : pat ( repeat_pattern ( n - 1 , pat , init ));
}

//version 2: iteration 迭代
function repeat_pattern2 (n , pat , init ) {
return n === 0
? init
: repeat_pattern2 ( n - 1 , pat , pat ( init ));
}
repeat_pattern2(3, square, 2);

//factorial recursion
function factorial(a)
{
    return a===0
           ? 1
           : a*factorial(a-1);
}

//factorial iteration
function factorial2(n)
{
    return iter(1, 1, n);
}
function iter(answer, counter, n)
{
    return counter>n
           ? answer
           : iter(counter * answer, counter+1, n);
}

//fibonacci recursion
function fib(n)
{
    return (n===1) || (n===2)
           ? 1
           : fib(n-1) + fib(n-2);
}

//fibonacci iteration
function fibon(n)
{
    return itera(0, 1, n);
}

function itera(f1, f2, counter)
{
    return counter===0
           ? f1
           : itera(f2, f1+f2, counter-1);
}
fibon(4);










