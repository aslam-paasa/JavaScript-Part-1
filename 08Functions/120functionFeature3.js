// 3. function return from a function (function se function return kr skte h) -> Closure
function fn() {
    return "Hello";
}
let rval = fn();
console.log(rval);

// Closure -> Ek function se dusre function ko return kr skte h
function outer() {
    console.log("Hello i am outer and i am returning Inner");
    return function Inner(){
        console.log("I am Inner");
    }
}
// storing the function in a variable
let  returnVal = outer();
// calling the variable
console.log(returnVal);