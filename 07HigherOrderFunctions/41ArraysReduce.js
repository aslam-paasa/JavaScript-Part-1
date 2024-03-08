// 0th index kvi aaya hi ni to kya 0th index laane ka koi tarika h -
let arr = [10, 20, 30, 40, 50];

// iss baar maine baad wala 5 paas kiya h na ye pehli pv banega aur cv k andr 10, 0 aa jaega
// first value 5, 10, 0 -> iske baad same h

// Way-1
let val = arr.reduce(function(pv, cv, ci){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
}, 5);

console.log(val);

// pv cv ci
// 5  10 0
// 15 20 1
// 35 30 2
// 65 40 5
//105 50 4
//155 

// Way 2
let val2 = arr.reduce((pv, cv, ci) => pv + cv, 5);
console.log(val2);