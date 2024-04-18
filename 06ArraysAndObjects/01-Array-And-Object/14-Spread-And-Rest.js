// Spread and Rest Operators
const nums01 =  [1, 2, 3];
const nums02 = [4, 5, 6, 7];

// If you want to copy both of the array elements inside a new array :
const finalNums01 = [nums01, nums02];
console.log(finalNums01); // This is giving us 2 separate arrays


// How can we remove these arrays and put these elements inside a new variable?

// Way-1 : Use for-loop and systematically add one-by-one each element to the "finalNums"


// Way-2 : Use spread operator (...)
const finalNums02 = [...nums01, ...nums02];
console.log(finalNums02); // One final array


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