// Data Structure Methods : Sorting 
// "> 0"   ===>   sort "a" after "b", e.g. [b, a]
// "< 0"   ===>   sort "a" before "b", e.g. [a, b]
// "=== 0" ===>   keep original order of "a" and "b" 

const unsorted = [5, 2, 10, 7, 3, 1];

// Sorting in ascending order :
unsorted.sort((a,b) => a - b);
console.log(unsorted);  // [ 1, 2, 3, 5, 7, 10 ]


// Sorting in descending order :
unsorted.sort((a, b) => b - a);
console.log(unsorted);  // [ 10, 7, 5, 3, 2, 1 ]
