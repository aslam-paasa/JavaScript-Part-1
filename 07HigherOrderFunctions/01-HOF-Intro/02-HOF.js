// Let's take an array which has a radius of 4 circles.
// Now our task it to calculate the area of these 4 circles.
const radius = [3, 1, 2, 4]

// How do you write the function to calculate the area of all these 4 circles?
const calculateArea = function(radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

// Output : Area of the 4 respective circles
// [
//     28.274333882308138,
//     3.141592653589793,
//     12.566370614359172,
//     50.26548245743669
//   ]


// Now we will see as the code grows what mistakes we generally make :
// Suppose this time it was calculating area, but what if we have to calculate
// circumference of these circles.
// For circumference, again we have to write a function -
const calculateCircumference = function(radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

// Output : Circumference of these 4 circles
// [
//     18.84955592153876,
//     6.283185307179586,
//     12.566370614359172,
//     25.132741228718345
//   ]

// Note : This is how we normally write in interview

// What if we also had to calculate diameter of the circle?
// Generally, people will write one more function. But this is not a good way.


// Can you see a problem here?
// Problem-1 : Code Repeatation means violating DRY (Don't repeat yourself)

