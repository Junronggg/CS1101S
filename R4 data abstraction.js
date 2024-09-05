draw_data(pair(1, 2));
is_list(pair(1, 2));
display_list(pair(1, 2));
//draw_data(pair(1, pair(3, pair(5, null))));

pair(0, list(1, 2));
display_list(pair(0, list(1, 2)));
draw_data(pair(0, list(1, 2)));
is_list(pair(0, list(1, 2)));

list(pair(1, 2), list(4, 5), 3);
draw_data(list(pair(1, 2), list(4, 5), 3));
display_list(list(pair(1, 2), list(4, 5), 3));
//is_list(list(pair(1, 2), list(4, 5), 3));

list(1, 2, 3);
draw_data(1, pair(2, 3));