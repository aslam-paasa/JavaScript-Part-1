/* Common Operations performed on Arrays :
1. Looping through an Array :
 - There are many ways to loop over the Array. The most common way of
   looping through arrays in JavaScript are -

(a) For Loop : As we have seen above

2. Length of array : Array index always starts from 0, which means the
   first element is stored at index 0 and the last element will be stored
   at index length - 1.

Example of Length of array :
-> arr.length = 5
-> indexes are from 0 to 4. So, we are excluding arr.length that's why
   condition is "i < nums.length"
-> But if we want to include index-4 then we can write the condition as -
  "i <= nums.length - 1". (Now 5th index is not there -> 0 to 4).

-> Example :-
nums.length = 5
nums.length - 1 => 5 - 1 => 4

Two ways to write conditions for for-loop :
(a) for(i = 0; i < nums.length; i++} {...}
(b) for(i = 0; i <= nums.length-1; i++) {...}
*/ 

// String array
const arr = ["a", "b", "c", "d", "e", "f"];

for(let i = 0; i < arr.length; i++) {
    console.log(`Value at index = ${i} is ${arr[i]}`);
}

// Boolean array
const boolean = [true, false, true, false, false];
for(let i = 0; i < boolean.length; i++) {
    console.log(`Value at index = ${i} is ${boolean[i]}`);
}