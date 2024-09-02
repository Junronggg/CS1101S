//mission Curve Manipulation addition notes (because I do it after submission so..)

// s_generator from Mission "Curve Introduction" is predeclared
const s_curve = s_generator(make_point(0, 0));

function reflect_through_y_axis(curve) {
    return t => make_point(-x_of(curve(t)), y_of(curve(t))); // replace by your answer to Question 1
}

const reflected_s_curve = reflect_through_y_axis(s_curve);

function close(curve) {
    return t => t<1/2
           ? make_point(x_of(curve(2*t)), y_of(curve(2*t)))
           : make_point(x_of(curve(-2*t+2)), y_of(curve(-2*t+2))); // replace by your answer
}

//t<1/2, travelling from starting pt to end point: c(0)=c'(0), c(1)=c'(p.5)
//t>1/2, travelling backwards, from end back to start point: c(0)=c'(1), c(0.5)=c'(0.25) (when travelling downwards, t<1/2) =c'(0.75) (when travelling upwards, t>1/2)

draw_connected_2d(200)
   (connect_ends(close(s_curve), reflected_s_curve));