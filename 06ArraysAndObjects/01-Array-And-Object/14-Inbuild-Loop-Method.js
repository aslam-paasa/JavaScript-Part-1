// findIndex Method :

const dummy = [2, 5, 1, 6];

// Find the index where "2" is located?
// findIndex() returns the index of the first element in the array where
// predicate is true and -1 otherwise.

// If item === 2, then give me the index :
const index = dummy.findIndex((item) => item === 6); 
console.log(index); // index: 3