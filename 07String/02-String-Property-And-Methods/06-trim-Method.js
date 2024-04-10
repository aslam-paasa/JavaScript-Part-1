// Modifying String : trim() :
// => trim() method removes whitespaces. 
// => Starting and ending m jitne v whitespaces hote hai unn saare spaces ko 
// remove kr k de dega.

// "XXabcdXX"

let str = "     Mohammad Aslam   is   Developer     "; // removes starting & ending spaces only
console.log(str.trim());


// Example :
// trim method -> removes all the whitespaces of starting and ending of a string

let trimStr = "        Hello    World       ";
console.log("Before triming, count of characters are -")
console.log(trimStr.length);
console.log(trimStr); //space aa gya isme

console.log("After triming, count of characters are -")
console.log(trimStr.trim().length);
console.log(trimStr.trim()); //string k andr k shuru and last k jitne spaces h sb nikal dnge
