// Intersection of two arrays
let a1 = [10, 30, 50, 70, 90];
let a2 = [63, 34, 50, 90, 80, 10, 60];

//[10, 50, 90]

//hai ya ni wo check krne k liye "include()" function hota h
console.log(a2.includes(80)); //true
console.log(a2.includes(88)); //false

let inter1 = a1.filter(v => a2.includes(v));
console.log(inter1);    //[ 10, 50, 90 ]
