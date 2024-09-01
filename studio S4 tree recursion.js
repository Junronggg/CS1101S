//pascal triangle with recursive process
function pascal (row, position)
{
    return row===0 || position===0 || position===row
           ? 1
           : pascal (row-1, position-1) + pascal (row-1, position);
}
pascal(2, 1);
pascal(4, 3);

//pascal triangle with iterative process
function pascal_iter (result, row, position)
{
    return row===0 || position===0 || position===row
           ? 1
           pascal_iter ()
}