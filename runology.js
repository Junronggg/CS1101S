import { rcross, sail, corner, nova, heart, show, quarter_turn_right,stack, stackn } from "rune";

function turn_upside_down(rune)
{
    return quarter_turn_right(quarter_turn_right(rune));
}

//show(turn_upside_down(heart));

function quarter_turn_left(rune)
{
    return quarter_turn_right(turn_upside_down(rune));
}

//show (quarter_turn_right((stack(quarter_turn_left(heart), quarter_turn_left(heart)))));

function besides(rune1, rune2)
{
    return quarter_turn_left((stack(quarter_turn_right(rune1), quarter_turn_right(rune2))));

}

//show(besides(sail, heart));

function quilt(n,m,rune) //n x m matrix
{
    return stackn(n,quarter_turn_right(stackn(m, quarter_turn_left(rune))));
}

//show(quilt(2,3,heart));
function cross(rune)
{
    return stack(besides(quarter_turn_right(rune), turn_upside_down(rune)), 
    besides(rune, quarter_turn_left(rune)));
}
show(cross(rcross));