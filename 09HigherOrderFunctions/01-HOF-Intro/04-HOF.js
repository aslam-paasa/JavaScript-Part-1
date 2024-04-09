const radius = [3, 1, 2, 4]

const area = function(radius) {
    return Math.PI * radius * radius;
}


// calculate() function is a Higher Order Function
// area() function is a callback function which is passed inside the "logic"

// Note : This calculate() function is exactly similar to the function map()
// Output is same. So, we can say we have written our own implementation of "map()"
console.log(radius.map(area));
// console.log(calculate(radius, area));

// We want to look our calculate(radius, area) function same as the function map()
// For that we will use "Array.prototype" :

Array.prototype.calculate = function(radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

// Now this calculate() function is available in all the arrays we see in our code.
// When we put something in prototype it appears in all the arrays. That means 
// just like a ".map()" we can also call "radius.calculate(radius, area)"
console.log(radius.calculate(radius, area));
