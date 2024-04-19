map(): Creates a new array by calling a provided function on every element in the calling array.
const numbers =  [1, 2, 3, 4, 5];

// Inbuilt Loop Methods

// 1) Map() : It will return new array.
const newNums01 = numbers.map((item, index, array) => {
    console.log(item, index, array);
})

// Item Index Array
// 1    0     [ 1, 2, 3, 4, 5 ]
// 2    1     [ 1, 2, 3, 4, 5 ]
// 3    2     [ 1, 2, 3, 4, 5 ]
// 4    3     [ 1, 2, 3, 4, 5 ]
// 5    4     [ 1, 2, 3, 4, 5 ]

console.log();

const newNums02 = numbers.map((item, index, array) => {
    return item+5; // "5" will be added to each and every element
})
console.log(newNums02);