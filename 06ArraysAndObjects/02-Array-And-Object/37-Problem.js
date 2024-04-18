/*
Problem : Given an array of numbers, find the sum of every element in the
array, starting with 5, and log the result to the console.

arr = [1,2,3]
sum = 5 + (1+2+3)
    = 11
*/ 

const num16 = [1,2,3];
// If we want to provide any starting value we can put a 5 at the end :
// num15.reduce((sum, item) => sum + item, 5);
let totalSum2 = num15.reduce((sum, item) => sum + item, 5); // sum starting with 5
console.log(totalSum2);

let totalSum3 = num15.reduce((sum, item) => sum + item, 10); // sum starting with 10
console.log(totalSum3);
