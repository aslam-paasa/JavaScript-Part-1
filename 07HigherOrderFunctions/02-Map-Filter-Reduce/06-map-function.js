// map() function is used to transform array
const arr = [5, 1, 3, 2, 6];

// Suppose we have this array and we want to transform it. 
// Transformation means suppose if we want to transform each and every value of
// this array and get a new array out of it.

// Each and every value in this tranformed array double, triple the original value :
// Double - [10, 2, 6, 4, 12]
// Triple - [15, 3, 9, 6, 18]
// Binary - ["101", "1", "11", "10", "110"]

// map() is a HOF, so we have to pass a function inside it, which basically tells
// us what tranformation do we need. => double, triple, binary. That is we need to
// pass inside the array

function double(x) {
    return x * 2;
}

// Internally it will run the function over each and every value of the array and
// create a new array out of it and that new array will be stored inside "output"
const output = arr.map(double);

console.log(output);
// [ 10, 2, 6, 4, 12 ]



// This is called as "transformation" logic
function triple(x) {
    return x * 3;
}

const tripleOutput = arr.map(triple);
console.log(tripleOutput); // [ 15, 3, 9, 6, 18 ]


// How we can transform binary?
function binary(x) {
    return x.toString(2);
}

const binaryOutput = arr.map(binary);
console.log(binaryOutput); // [ '101', '1', '11', '10', '110' ]


// Note : Sometimes people also prefer to put the function inside it.
const binaryOutput_2 = arr.map(function binary(x) {
    return x.toString(2);
})

console.log(binaryOutput_2);


// Note : We can also write the same HOF using arrow function
const binaryOutput_3 = arr.map((x) => {
    return x.toString(2);
})

console.log(binaryOutput_3);

// If there is single argument passed we can also remove the "return" and curly braces 
const binaryOutput_4 = arr.map((x) => x.toString(2))

console.log(binaryOutput_4);
