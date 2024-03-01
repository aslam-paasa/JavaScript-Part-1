/*
   In JavaScript, whenever a function preserves some values, it creates a closure.

   Here, we have a function named "show()" that contains two variables, x and y, and a simple inner function that logs the values of x and y.
   The "inner()" function creates a closure by closing over the variables x and y.

   To inspect how a function preserves values, we use the console.dir() function, which displays an object in detail.
   We pass the "inner" function to console.dir() and run the program.

   Upon expanding the logged "inner()" function in the console, we find the [[Scopes]] property, which holds the entire closure story.
   A function that accesses an outer function becomes part of this [[Scopes]] property, preserving the scope chain.

   If we expand the [[Scopes]] property, we can see:
   > 0: Closure (show)
       x: 9
       y: 10
       [[Prototype]]: Object...
   > 1: Global {window: Window, ...}

   This Scope property has two parts: Global and Closure.
   The Closure part clearly displays the values of x and y.

   The "inner()" function effectively closes over x and y. Any changes made to x and y after the closure creation are reflected in the closure.
   For example, if we modify x to 1 and y to 9 and then call the "inner()" function again, we observe that it now points to the updated values.

   This proves that the closure in the "inner()" function points to live values, showcasing the dynamic nature of closures.

   In summary, closures are created when a function preserves values, and they retain a reference to the live variables, allowing for dynamic updates.
*/

function show() {
    let x = 9;
    let y = 10;

    function inner() {
        console.log(x, y);
    }

    // Uncomment the line below to inspect the closure using console.dir()
    // console.dir(inner);

    inner();

    // Update values of x and y
    x = 1;
    y = 9;

    inner();
}

show();
