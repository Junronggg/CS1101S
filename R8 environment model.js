//reflection 8
//qn1
function make_withdraw(balance, password) {
    let trial=0;
    function withdraw(amt, pw) {
        if (trial>=3) {
            trial=trial+1;
            return "account disabled";
        } else {
            if (pw!==password) {
                trial=trial+1;
                return "wrong password";
            } else if (balance>= amt) {
                balance=balance-amt;
                trial=0;
                return balance;
            } else {
                return "insufficient balance";
            }
        }
    }
    return withdraw;
}
const acc=make_withdraw(100, "pw");
acc(30, "pw1");
acc(30, "pw");
acc(10, "a");
acc(10, "a");
acc(10, "a");
acc(10, "pw");


//qn2
let commission = 25; // my commission in dollars
// return a calculator for total price
// total price = (commission + cost) * (1 + tax_rate)
function make_price_calculator(tax_rate) {
    function calculator(cost) {
        return (commission + cost) * (1 + tax_rate);
    }
    return calculator;
}
const calc = make_price_calculator(0.07);
commission = 125;
calc(75); 

/*
const x=pair(1, 2);
set_head(x, 2);
x;*/
//the pair that x is pointing to does not change, but the pair x is point to can change 
//(the value of the pair can change, but x is still pointing to that pair)
