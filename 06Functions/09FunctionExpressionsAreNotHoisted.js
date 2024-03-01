/* Function Expressions are not hoisted :
 - In the case of functions, only function 'declarations' are hoisted-but 'not'
   the function 'expressions'. Hence, the below piece of code would throw an error.
*/ 

add(2, 3);

var add = function (a, b) {
    console.log(a + b);
}

/*
This results in the error: "Uncaught TypeError: add is not a function"
*/ 