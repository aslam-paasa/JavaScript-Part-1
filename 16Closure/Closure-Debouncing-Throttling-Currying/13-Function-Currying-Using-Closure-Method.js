/*
   In JavaScript, another way to achieve currying is by returning a function from
   another function. This is an example of closure. The inner function retains access
   to the variables of the outer function even after it has returned.

   In this example, the 'multiply' function takes a parameter 'x' and returns another
   function that takes a parameter 'y'. Inside the inner function, the multiplication
   of 'x' and 'y' is logged.

   Example 1:
   We create 'multiplyByTwo' by passing '2' to the 'multiply' function. This creates
   a new function where 'x' is preset to '2'. When we later call 'multiplyByTwo(3)',
   the '3' becomes 'y', and the result is logged.

   Example 2:
   Similarly, we create 'multiplyByThree' by passing '3' to the 'multiply' function.

   This is an alternative way to achieve currying in JavaScript, leveraging closures.
*/

let multiply = function(x) {
    return function(y) {
        console.log(x * y);
    }
}

// Currying using closure method
let multiplyByTwo = multiply(2);
multiplyByTwo(3); // Output: 6

// Creating another curried function
let multiplyByThree = multiply(3);
multiplyByThree(10); // Output: 30
