// While Loop :

// Q) How to code in a situation like this?
// We can define these looping control in multiple ways :
// (a) while loop



// If we remember while loops, we have a "while condition {...}".
// The moment we come at "while", we will first check the condition, if the
// condition is true then only we go inside the while loop, but if the 
// condition is false, we don't go inside the while loop.

// Once we go inside the while loop, it will keep on repeating the process
// till the time "while (condition)" is false.

// Example : If the condition is true
let y = 1;

while( y < 5 ) {
    y++;
    console.log(y);
}
console.log("Final value stored in y variable is " + y);


console.log();


// Example : If the condition is false
let z = 10;

while( z < 5 ) {
    z++;
    console.log(z);
}
console.log("Final value stored in z variable is " + z);


// Is the value "10" less than "5"?
// No!, So, this condition is already "False".
// If this condition is false, we will not go inside the while loop or
// if we are already inside the while loop, we will jump out of the while loop.
// So, the output will be "10" (because loop never executed).

console.log();

// What is the differnence between while and if?
// "if" will only check the condition, doesn't matter if the condition is
// true or false, it will only check it once.
// Whereas, while loop checks your conditions again & again, till the time
// it became false.

let i = 1; // Initializing a variable using which we will loop
while(i < 10) { // Checking condition again and again till the time it becomes false
    console.log(i);
    i += 1;
}

console.log("End of program");