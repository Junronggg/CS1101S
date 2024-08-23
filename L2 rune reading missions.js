import {make_cross, stack, stackn, beside, beside_frac, show, rcross} from "rune";
function fractal(pic, n) 
{
    // your answer here
    return n===1
           ? pic
           : beside_frac((1-1/math_pow(2, n-1)), fractal(pic, n-1), stackn(math_pow(2, n-1), pic));
}

//corrected
function fractal1(pic, n)
{
    return n===1
           ? pic
           : beside(pic, stackn(2, fractal1(pic, n-1)));
}

// Test
show(fractal1(make_cross(rcross), 5));
