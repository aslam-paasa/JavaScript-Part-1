// Splice Method => It takes 3 things :
// (a) Start position
// (b) How many elements we have to delete
// (c) returns the containing elements that were deleted
// Note : It's going to make changes in the original array.

let arr = ["apple", "banana", "cherry"]

// It going to get rid of "banana" and "cherry" and add "orange"
arr.splice(1, 2, "orange")
console.log(arr); // [ 'apple', 'orange' ]
