import { make_point, 
         draw_connected, 
         draw_connected_full_view_proportional } from "curve";

function unit_circle(t) {
    return make_point(math_cos(2 * math_PI * t),
                      math_sin(2 * math_PI * t));
}

function unit_line_at(y) {
    return t => make_point(t, y);
}

const unit_line = unit_line_at(0);


draw_connected(200)(unit_circle);
//draw_connected_full_view_proportional(200)(unit_circle);
//draw_connected_full_view_proportional(8)(unit_circle);
