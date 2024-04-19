// console.log(this); // "this" refers to window object
// console.log(window); // this means same as above


function myFunc() {
    console.log(this); // this refers to window object 
}

myFunc(); // myFunc() is inside window object so "this" refers to window object