// The second way to achieve looping is "for loop" :

let i = 1;
while( i <= 10 ) {
    console.log(i);
    i += 1;
} 


// Converting "while loop" to "for loop" :
for( let i = 1; i <= 10; i++ ) {
    console.log(i);
}


// So for loops are more more way to do same thing as of while loop. There 
// is no particular advantage of using a particular loop.

// In for loops the difference with while loops is only of syntax.

// While loop syntax :

// variable initialization
// while(condition) {
    // logic
    // update statement
//}



// For loop syntax :

// for(variable initialization; condition; update statement) {
    // logic
// }



// Sum of first 10 numbers using for loop syntax:
let ans = 0;
for(let i = 1; i <= 10; i++) {
    ans += i;
}
console.log(ans);


// Write a program to print all the even numbers greater than 1 and less than 25

// Way-1
for(let i = 1; i <= 25; i++) {
    // check if i is even?
    if(i % 2 == 0) {
        console.log(i);
    }
}

// Way-2
for(let i = 2; i <= 25; i+=2) {
    console.log(i);
}