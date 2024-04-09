// memory for the functions are allocated before the code is execute
// functions are created in heap and their addresses are stored in stack
// No function overloading in JS (parameter se fark ni pdta)
console.log("script started");
iamReal();
// 1)
function iamReal() {
    console.log("I am Real");
}

// 2)
function iamReal() {
    console.log("He isn't real -> I am the real one");
}

iamReal();