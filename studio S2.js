function biggie_size(combo1)
{
    return combo1+4;
}
biggie_size(3);

/*function is_biggie_size(combo1)
{
    return combo1>4?true:false;
}
is_biggie_size(3);*/

function is_biggie_size(combo)
{
    return combo>4;
}
is_biggie_size(5);

function combo_price(combo)
{
    return is_biggie_size(combo)
    ? (1.17* combo+0.5) 
    : 1.17*combo;
}

function last_combo(order)
{
    return order % 10;
}
last_combo(321);

function other_combos(order)
{
    //return (order-last_combo(order))/10;
    return math_floor(order/10);
}
other_combos(321);

math_floor(32.8);