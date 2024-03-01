/* Function Arguments Vs Function Parameters :
 - If the function has one or more parameters, we can pass values to these
   parameters using function arguments.
   
(1) Function parameters are the variable names listed in the function definition.
(2) Function arguments are the real values passed to (and received by) the function.
*/ 

function square(number) {
    return number * number;
}

// function call
var res = square(2);

// For example, we can pass the argument 2 to the square function defined above
// using square(2). This argument is received by the oarameter named number in the
// function.