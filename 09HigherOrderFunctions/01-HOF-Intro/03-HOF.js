const radius = [3, 1, 2, 4]

// How to write that in an optimized way?
const area = function(radius) {
    return Math.PI * radius * radius;
}

// Circumference of the circle logic
const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

// Diameter of the circle
const diameter = function(radius) {
    return 2 * radius;
}

// We will try to make this a generic function, and put this logic inside the 
// function from outside (means passing logic inside the function) :
const calculate = function(radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// Output : Area of the circle
// [
//     28.274333882308138,
//     3.141592653589793,
//     12.566370614359172,
//     50.26548245743669
//   ]

// Output : Circumference of the circle
// [
//     18.84955592153876,
//     6.283185307179586,
//     12.566370614359172,
//     25.132741228718345
//   ]

// Output : Diameter of the circle
// [ 6, 2, 4, 8 ]


// Functional programming is huge in itself but a small part of it says that
// think and make the logic in your head according to functions. So, whenever
// we are giving a coding round interview then we should write our code in this
// fashion.

// Why this code is good?
// We have abstracted our code into smaller functions and each and every unit of
// the function has its own responsibility.


// calculate() function is a Higher Order Function
// area() function is a callback function which is passed inside the "logic"

// Note : This calculate() function is exactly similar to the function map()
// Output is same. So, we can say we have written our own implementation of "map()"
console.log(radius.map(area));
console.log(calculate(radius, area));

// We want to look our calculate(radius, area) function same as the function map()
// For that we will use "Array.prototype" :
// Now this calculate() function is available in all the arrays we see in our code.
// When we put something in prototype it appears in all the arrays. That means 
// just like a ".map()" we can also call "radius.calculate(radius, area)"