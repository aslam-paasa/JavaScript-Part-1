// Odd-Even
// Given a number x, check if the number is even or odd.

// Ex : x = 27 
// O/P : Odd

// Ex : x = 54
// O/P : Even

// What type of numbers are even?
// A number which is completely divisible by 2 is an even number.
// A number which is not completely divisible by 2 is an odd number.

// Is number divisible by 2?
// Yes(even) : No(odd)

// How to check if a no. is divisible by 2?
// Remainder (modulo Operator) : "%"

// Ex: 7 % 2 -> 1 (remainder)
// Check whether the number is equals to "0" or not using "==" operator.

let x = 341; 

// check whether x is divisible by 2 or not?
if(x % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd");
}