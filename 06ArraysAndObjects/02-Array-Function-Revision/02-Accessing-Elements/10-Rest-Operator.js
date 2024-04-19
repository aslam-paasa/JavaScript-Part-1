// Rest operator (...rest): Gathers the remaining elements of an array into a new array or function arguments.
const nums01 =  [1, 2, 3];
const nums02 = [4, 5, 6, 7];


// Rest Operator :
// When we use it inside a function, it takes a lot of 
// Let's say we have a function that takes a lot of numbers, and in the input
// we are suppose to provide these numbers like nums1, nums2, nums3...etc.
// But we don't know arrays are going to be provided to us. So, how do receive
// all of these elements in form of one single array. So, what we will do?


// => Elements dumped into one variable
function sum(...numbers) {
    return numbers; // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ] ] 
}
console.log(sum(nums01, nums02, 5, "hello")); 