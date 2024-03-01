// How to calculate sum of 5 values
const nums2 = [5,1,2,3,1]; 
let sum2 = 0; 

for(let i = 0; i < nums2.length; i++) {
    // Pick values from nums2 and update add inside sum2 
    sum2 += nums2[i];
}
console.log(`Sum is ${sum2}`);
