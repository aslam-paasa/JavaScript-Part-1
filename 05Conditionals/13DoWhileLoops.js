// Do-while loop :
// Even if the condition is false from start only, it will still execute
// body/block of "do" once,

// What is do-while loop?
// If we remember while loops, we have a "while condition {...}".
// The moment we come at "while", we will first check the condition, if the
// condition is true then only we go inside the while loop, but if the 
// condition is false, we don't go inside the while loop.

// Once we go inside the while loop, it will keep on repeating the process
// till the time "condition" is true.

// Example :
let y = 10;

while( y < 5 ) {
    y++;
}
console.log(y);

// Is the value "10" less than "5"?
// No!, So, this condition is already "False".
// If this condition is false, we will not go inside the while loop or
// if we are already inside the while loop, we will jump out of the while loop.
// So, the output will be "10" (because loop never executed).



// Now there can be a situation that : Doesn't matter whether our condition
// is true or false, we want to execute the loop atleast once, then we are
// going to use "do-while loop".

let x = 10;
do{
    x++;
} while(x < 5);
    console.log(x);



// First we initialize the variable x = 10;
// If we have a do-while loop, it doesn't matter whether the condition is
// false from the very start or not, we will definitely go inside the body
// of "do{...}" i.e. "x++". It will update "x" from 10 to 11. And after
// executing the block, then we see "while(condition)" : Is "10 < 5"?
// No!, We will break out of the while loop and try to do console.log(x).


// What if the condition was true?
let z = 10; // update : 11, 12, 13, 14, 15
do{
    z++; // increment: 11
} while(z < 15);  // condition satisfied => 12, 13, 14, 15
    console.log(z);
