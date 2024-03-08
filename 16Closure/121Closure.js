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
Inner();

/* Closure :                                            Memory Allocation for inner @ 20k
Stack memory diagram:                                   +------------------------+
        +------------------------+                      |                        |
        |                        |                      |                        |
        |                        |                      |                        |
        |                        |          +|----------|                        |
        |                        |          |           |                        |
        |                        |          |           +------------------------+
        |                        |          |                Memory Allocation for outer @ 16k
        |                        |          |                +------------------------+
Outer ->|inner = 20k             |----------+                |                        |  
        |------------------------|                           |                        |
GEC   ->|rval = undefined        |                           |                        |
        |outer = memory allocate |---------------------------|                        |
        +------------------------+                           |                        |
                                                             +------------------------+

1) Memory Allocation :
-> Sabse pehle GEC banega, usme memory allocation hogi to rval k liye 'undefined' set ho jaegi aur outer k liye
   ek alag se memory allocate ho jaegi
-> Ab outer() function chlega/call hoga, ab ye stack pe aaega aur stack pe outer() ki block bn jaegi.
-> Outer() function m koi variable ni h bss ek function h to 'inner' k liye v memory allocate ho jaegi

2) Code Execution :
-> Ab outer() function k andr ka code chlega to ye "Hello i am outer and i am returning Inner" return hoga.
-> Fir outer() function k andr inner function() stored h to uska address - 20k return ho jagea
-> Fir console.log(returnVal); run hoga aur humne avi tk function call kiya ni h to function name print hoga -
   [Function: inner]

Output :
-> Hello i am outer and i am returning Inner
-> [Function: inner]

Note : Ab returnVal() ko call krte h tb inner() function print hoga - 
-> Hello i am outer and i am returning Inner
-> [Function: inner]
-> I am Inner
    */ 