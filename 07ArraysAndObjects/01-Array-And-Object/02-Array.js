// Sum of 5 values (Without Array)

// Created 5 variable to store 5 values
const num1=5, num2=1, num3=2, num4=3, num5=1; 
let sum = num1+num2+num3+num4+num5;
console.log(sum);
// to get all values, every time we have to do console.log()
console.log(num2);


// With Array
const nums = [5,1,2,3,1];
console.log(`Value at index 4 is ${nums[3]}`); // to access value at index 3
console.log(`Length of array is ${nums.length}`); // length of the array - 5 (0 to 4)

// Run a loop to get all the values one after another
for(let i = 0; i < nums.length; i++) {
    console.log(`Value at index = ${i} is ${nums[i]}`);
}