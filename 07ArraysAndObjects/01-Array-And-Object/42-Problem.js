/*Problem : Check if a number is palindrome or not?
-> nums = 131
1. Convert nums to string
2. Convert nums to array using split
3. Apply reverse
4. Join them
5. Compare
*/ 

const num20 = 121;

// Convert number to string
// const numString = num20.toString();
// split it into character array
// const numArr = numString.split('');
// reverse the array
// const revArr = numArr.reverse();
// Join the array
// const reverse = revArr.join('');
// Ternary Operator
// (num20 == reverse) ? console.log("palindrome") : console.log("not a palindrome");

// Another way of writing this
(num20 == num20.toString().split('').reverse().join('')) ? console.log("palindrome") : console.log("not a palindrome");
