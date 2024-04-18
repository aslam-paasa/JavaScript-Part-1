// Flat Method :
// If we have an array which has multiple nested array inside of one array
// So, this flat method will remove all the array and and make it one.

const  flatEx = [1, [2, 3], [[4, 5], 6]];
const flattenedArray = flatEx.flat(); // this flatten the array with just one level
console.log(flattenedArray); // [ 1, 2, 3, [ 4, 5 ], 6 ]


// If we want to flatten the array at 2 levels :
const flattenedArray02 = flatEx.flat(2); // flatten the array with 2 levels
console.log(flattenedArray02); // [ 1, 2, 3, 4, 5, 6 ]

