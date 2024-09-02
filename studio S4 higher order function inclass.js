function compose (f, g)
{
    return x => f(g(x));
}

function thrice(f)
{
    return compose (compose(f, f), f);
}
thrice (math_sqrt) (256);

thrice(thrice) (x=>x+1) (0);
((thrice(thrice))(x=>x+1))(6);
((thrice(thrice))(x=>x))(compose);
((thrice(thrice))(x=> x*x))(2);