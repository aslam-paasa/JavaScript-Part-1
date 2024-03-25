// node 32ArraysMap.js
// odd-even

let arr = [2, 19, 34, 72, 11, 64, 55, 98];

let barr = arr.map(function(v, i){
    if(v % 2 == 0){
        return true;
    } else {
        return false;
    }
});

console.log(barr);

//shorter code using arrow function
let oearr2 = arr.map(v => v % 2 == 0);
console.log(oearr2);