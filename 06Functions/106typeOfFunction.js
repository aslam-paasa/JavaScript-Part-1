// 1) function definition - Basic Function
function fn(){
    console.log("I am function definition");
}
fn();


// variable ka assignment
let a = [10, 20, 30];
let b = a;
console.log(b);

// 2) function expression - Function bnte hi usko variable m assign kr diye aur variable call krte h
// Function ka address kisi variable m store kr lete h i.e. Function Expression.
// let secondName = function originalName(){    
let secondName = function (){
    console.log("I am expression");
}
secondName();
// origialName(); -> originalName() se call ni kr skte isliye agar ye function name hta de to v chlega


console.log("Before");
// 3) IIFE - Immediately Invoked Function Expression - Kisi function k bante hi call ho jae i.e. IIFE
(function drawBoard(){
    console.log("Board is immediately drawn");
})();
console.log("After");

// 4) Anonymous Function - Jisme function name jaruri nai hota h (2 & 3 function)

let secondName1 = function (){
    console.log("I am expression");
}
secondName();

//same name repeated v likh skte h isme
(function drawBoard(){
    console.log("Board is immediately drawn");
})();
console.log("After");