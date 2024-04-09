// We all know about trianges. But this time let's do something interesting.
// Given 3 integers : a , b, c, check if we can form a triangle with the sides
// of the triangle having length a, b, and c. (we're not only talking about
// right angled triangle)

// Example : a = 7, b = 10, c = 3
// Answer : Yes!

// Example : a = 1, b = 10, c = 12
// Answer : No!

// Condition :
// (a) a + b > c
// (b) b + c > a
// (c) c + a > b
// If we want to create a triangle with a, b, c sides then for each side the
// sum of other 2 sides should be greater.

// Note : We want all of the 3 conditions true together.
// if(a+b > c && a+b > c && b+c > c) {
//     Yes!
// } else {
//     No!
// }


let a = 10;
let b = 12;
let c = 5;

if(a+b > c && a+b > c && b+c > c) {
    console.log("Yes!");
} else {
    console.log("No!");
}