const radius = [3, 1, 2, 4]

const area = function(radius) {
    return Math.PI * radius * radius;
}

// Let's try to make it very similar to that of map()
// This "calculate()" over here takes two arguments but map() takes one so let's
// just remove the "radius" from the argument.

// Array.prototype.calculate = function(radius, logic) {
//     const output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// Q) Where do we get "radius" from?
// In this case when we do a "radius.calculate()", so over here, in the calculate()
// function the "this" over here points to the "radius" which is this "calculate()"
// is called upon.

Array.prototype.calculate = function(logic) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

// So, when we write "radius.calculate()", so that means "this" in the calculate()
// function which will be pointed to this "radius array". And now if we run it
// it is exactly same

console.log(radius.map(area));
// console.log(radius.calculate(radius, area));
console.log(radius.calculate(area)); // Polyfill map


// HOF : The function which takes another function as an input or return a function
// Callback : The function which is passed to HOF.