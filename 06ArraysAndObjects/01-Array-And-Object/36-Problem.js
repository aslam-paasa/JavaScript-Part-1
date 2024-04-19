// Problem : Find the average of given number in an array.

const num15 = [1,2,3];
let avg = num15.reduce((sum, item) => sum + item)/num15.length;
console.log(avg);
