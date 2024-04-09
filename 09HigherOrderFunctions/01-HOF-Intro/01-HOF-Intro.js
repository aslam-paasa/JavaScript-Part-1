// HOF : A function which takes another function as an argument or returns a 
// function from it is known as Higher Order Function.

// 'x' is the callback function
function x() {
    console.log("Namaste");
}

// 'y' is HOF
function y(x) {
    x();
}