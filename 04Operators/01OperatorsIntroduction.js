/*
 - Any programming language can do multiple complex instructions, complex
   operations. These complex operations can be as simple as additon or
   as complex as calculating powers.
 - Few default operations we get in every programming language and we can
   leverage these operations by using the concept of "operators".
 - Operators are pre-defined operations that we can do in the programming
   languages.
 - There are different types of operators :
1. Arithmetic Operators : 
    (a) + : addition
    (b) - : Subtraction
    (c) / : Division
    (d) * : Multiplication
    (e) % : Remainder
    
Q) Where do we apply operators?
 - We apply operators on some "operands". 
 - Operator is the operation that we want to do.
 - Operands are the value on which we want to execute the operator.
        Operands
           ^
           |
 Ex : 10 + 3
         |
         V
     Operator    
*/ 

// Arithmetic Operators
let x = 10;
let y = 3;

console.log("Value of x = 10, Value of y = 3");
console.log("Addition : " + x + y); 
console.log("Subtraction : " + (x - y));
console.log("Multiplication : " + x * y);
console.log("Quotient : " + x / y);
console.log("Remainder : " + x % y);
console.log("Exponent : " + y**2); // a^b