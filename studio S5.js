/*draw_data(list(list(1, 2, list(3)), list(4, 5), pair(6, 7)));
draw_data(pair(1, list(2, 3, pair(4, null))));
draw_data(pair(1, pair(2, list(3, list(4, 5)))));
display_list(list(list(1, 2, list(3)), list(4, 5), pair(6, 7)));


const lst1=list(7, list(6, 5, 4), 3, list(2, 1));
const lst2=list(list(7), list(6, 5, 4), list(3, 2), 1);
const lst3=list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
const lst4=list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

head(tail(head(tail(tail(tail(lst1))))));
head(tail(tail(tail(lst2))));
head(head(tail(head(tail(head(tail(tail(tail(lst3)))))))));
head(head(head(tail(tail(lst4)))));

const lst=list("a", "x", "b", "y", "c", "z", "d");
function every_second(list)
{
    return is_null(list) || length(list)<=1
           ? null
           : pair(head(tail(list)), 
                  every_second(tail(tail(list))));
}
every_second(lst);
*/

const listsum=list(1, 2, 3, 4, 5, 6);


function sums(list1)
{
    function sum_even(list1)
    {
        return length(list1)<=1
               ? head(list1)
               : head(list1) + sum_even(tail(tail(list1)));
    }
    
    function sum_odd(list1)
    {
        return length(list1)<=1
               ? 0
               : length(list1) <=2
                    ? tail(list1)
                    : head(tail(list1)) + sum_odd(tail(tail(list1)));
    }
    
    //return pair(sum_even(list), pair(sum_odd(list), null));
    return list(sum_even(list1), sum_odd(list1));
}

sums(listsum);

