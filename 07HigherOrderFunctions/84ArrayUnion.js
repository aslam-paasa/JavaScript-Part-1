let arr1 = [10, 50, 70, 80, 90, 100, 30, 60]
let arr2 = [11, 50, 75, 85, 90, 100, 34, 60]
// Humein arr2 m wo element dhundne h jo arr1 m nahi h (a2 - a1) 
// -> Union of arrays

let a2minusA1 = arr2.filter(v => arr1.includes(v) == false)
// let a2minusA1 = arr2.filter(v => !arr1.includes(v));// Elements in a2 which are not in a1
console.log(a2minusA1); //[ 11, 75, 85, 34 ]
let union = arr1.concat(a2minusA1);
console.log(union);  //[10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34]