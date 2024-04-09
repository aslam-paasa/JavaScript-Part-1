// Operator :
// Add 2 integer values => (2+3) => "+" addition operator
// There are multiple operators that help us to do arithmetic operations,
// for example, subtraction, multiplication, division, OR, XOR, Bitwise OR etc.
// But sometime these operators might not work in the exact intended way
// that we feel like.

// Case-1 : Both operands are numbers
// For example, we have two numbers 12 & 13. If we have two numbers and
// if we add both of them 12 + 13, then this "+" symbol acts as an
// arithmetic operator, because both the operands are nunbers.
// But what if these two operands are not number.

let x = 12;
let y = 13;
let z = x + y;
console.log(z);

// Case-2 : One operand are number and other is not
// For example, we have one number 12 and other one is string "13". Now we
// use the "+" symbol in between then what will happen?

// 12 + "13" => This "+" will do the concatenation i.e. it will convert this
// 12 also as a string and then both of the string are going to be attached
// together.

let a = 13;
let b = "14";
let c = a + b;
console.log(c);

// Note : This kind of operation might not support in C++ or Java, but JS
// supports a wide variety of operations.