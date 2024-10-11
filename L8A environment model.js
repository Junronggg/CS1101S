//eva of block
/*
let x = 3;

if (x <= 1) {
    let y = x;
    x = y + 1;
} else {
    let z = x;
    x = z * z;
}
{
    x = x + 1;
}
{
    let x = 5;
    let y = 8;
    {
        let x = 20 + y;
    }
    x = x + 1;
}
x;


//eva of lambda experession/function declaration
//sqaure
const square=x=> x*x; // only function declaration: create function obj
square(5); 
//has function application & no const/variable declration: 
//create frame containing binding of para to argument


//cube
function cube(x) {
    const y = x * x * x; //has const declaration: create new frame under frame containing x: 3
    return y;
}
cube(3);


//factorial
function factorial(n) {
    return n <= 1
           ? 1
           : n * factorial(n - 1);
}
factorial(3);


//bank account
function make_withdraw(balance) {
    return amount => {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    };
}
const W1 = make_withdraw(100);
W1(40);


//update: the ans is 2, since y is not updated (the function does not have return statement)
function update(x) {
    x = x + 1;
}
let y = 2;
update(y);
y;
*/

/*
//pair example
function pair_add_one(p) {
    set_head(p, head(p) + 1);
    set_tail(p, tail(p) + 1);
}
const q = pair(2, 5);
pair_add_one(q);
q;*/

function ff(xx) {
    function gg(yy) {
        return xx * yy;
    }
    return gg;
}
const aa = ff(1)(6);
const bb = ff(2)(5);
ff(aa)(bb);