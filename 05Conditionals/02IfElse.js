// There should be some mechanism in our Progamming Language using which we should
// be able to calculate conditions and based on the calculation and eveluation
// we will be able to do different things.

// We have "if and else" statements using which we can take decisions.
// Syntax : if(condition) {   
//                           -> If this "condition" holds true then this region
//          }                   or code inside this curly bracket will execute.

console.log("Start");
if(10 > 5) {  // this condition is true  
    console.log("Yes");
}
console.log("End");

// 12 is neither true nor false then will it run
// JS will here do type interconversion and 12 is a truthy value because the only
// number that are falsy are 0,-0 and NaN. Apart from that everything is truthy
if(12) {
    console.log("printed 12");
}
console.log("End");
console.log();
// If the condition is "true" then we will do "something". We what if we already
// know that this condition is already "false" then what we will do?
// For that we have "else" keyword -
// Syntax : if(condition) {   
//                           -> If this "condition" holds true then this region
//          }                   or code inside this curly bracket will execute.
//          else {           -> But if above condition is false then this else
//                              block or the code inside this block will execute
//          }                   

console.log("Welcome to Prime Video");
let isPrimeMember = false;
if(isPrimeMember) {
    console.log("Enjoy the content");
} else {
    console.log("Please buy the subscription to enjoy the content");
}

// if the condition is true, only if block is executed and else block is 
// completely avoided.

// if condition is false, if block is completely avoided & only else block
// executes.

// Note : "if" block can existr without "else" block but "else" block will not
// exist without "if" block.