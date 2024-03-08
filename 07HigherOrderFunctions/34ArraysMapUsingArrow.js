let arr = [2, 19, 34, 72, 11, 64, 55, 98];

let sqarr = arr.map(function(v, i){
    return v * v;
});

console.log(sqarr);

//for single value arrow function -> 'v' value milegi uski v * v bana do
let sqarr2 = arr.map(v => v * v);
console.log(sqarr2);

//for 2 value arrow function -> v * v; (but isme 'i' use v nhi kiye)
let sqarr3 = arr.map((v, i) => v * v);
console.log(sqarr3);

//isme 'i' ki value dekh lete h -> i * i
let sqarr4 = arr.map((v, i) => i * i); 
console.log(sqarr4);