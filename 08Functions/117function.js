// // function are variable
// function outer(param){
//     console.log(param);
//     param();
// }

// function chotaFn(){
//     console.log("Hello I am a chota fn");
// }

// // function can be passed as a parameter to another function - higher order function
// outer(chotaFn);


// // 1. function's reference can be stored in another variable - function expression
// let a = [1, 2, 3, 4, 5];
// let b = a;

// // 2. function expression
// let anotherName = function(){
//     console.log("I am an expression");
// }
// anotherName();

// // 3. function return from a function
// function fn() {
//     return "Hello";
// }
// let rval = fn();
// console.log(rval);

/*
[Function: chotaFn]
Hello I am a chota fn
I am an expression
Hello
*/

// function return from a function
function outer(){
    console.log("Hello I am outer and I am returning Inner");
    return function inner(){
        console.log("I am Inner");
    }
}
let rVal = outer();
console.log(rVal);

/*
Hello I am outer and I am returning Inner
[Function: inner]
*/