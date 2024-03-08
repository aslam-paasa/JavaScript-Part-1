// redeclare, reassign
// function scope, redeclare (problem jiske wjh se bug aa jaati, isliye 'let' aaya)
// we can access 'var' variable before initialization
console.log("This is 'a'", a);
var a;
a = 10;
var a;
console.log("This is 'a'", a);

// before declaration 'let' variable will be in TDZ -> 'Temporal Dead Zone', so we cannot access
// Block Scope -> means {...} 2 bracket k andr declare kiye to wahi tk access rhega
// can't redeclare
// let b;          //undefined
let b = 20;
console.log("This is 'b'", b); 
// let b = 10;  //ReferenceError: Cannot access 'b' before initialization

// Scope means ek variable kaha tk available h (kis range tk usko access kr skte h)