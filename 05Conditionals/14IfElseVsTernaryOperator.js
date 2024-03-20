// What is the difference between if-else and ternary operator?
// Ternary operators are just a cleaner way to write conditional statements if
// we have one liner expressions. But if we have a complex set of logic and
// maybe we have more than two branches (if, else-if, else-if, else), in that 
// case ternary operator might not be the best the choice.

let y = ((10 > 5) ? (10) : (7));
console.log(y);

let x = ((10 > 5) ? (10) : (7));
console.log(x);

let a = ((true) ? (2 + 3) : (2 - 3));
console.log(a);

let c = 10;
let b = ((3 < 1) ? (2 - 3) : (++c));
console.log(b);