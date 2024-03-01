/* What is Scope?
 - Scope is the accessibility of variables, function and objects in some particular
   part of your code during runtime. In other words, scope determines the visiblity
   of variables and other resources in areas of your code. 
   
 - In the JavaScript language, there are two types of scopes :
 1. Global Scope
 2. Local Scope
 
 
1. Global Scope :
 - When you start writing JavaScript in document, you are already in Global Scope.
   There is only the Global Scope throughout a JavaScript document. A variable is
   the Global Scope if it's defined outside of a function.*/ 

var name = "Hammad";

console.log(name);  // logs "Hammad"

function logName () {
    console.log(name);  // 'name' is accessible here and everywhere else
}

logName(); // logs "Hammad"

/* In the above code, the variable name is defined in the global scope and is
   accessible anywhere in the document.

2. Local Scope :
 - Variables defined inside a function are the local scope. And they have a different
   scope for every call of that function. This means that variables having the same
   name can be used in different functions. This is because those values are bound
   to their respective functions, each having different scopes, and are not
   accessible in other functions.
*/ 

// Global Scope
function someFunction() {
    // Local Scope #1
    function someOtherFunction() {
        // Local Scope #2
    }
}

// Global Scope
function anotherFunction() {
    // Local Scope #3
}
// Global Scope