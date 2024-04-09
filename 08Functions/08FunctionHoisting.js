/* Function Hoisting :
 - Hoisting allows functions to be safely used in code before they are declared.
   Consider the function 'add' defined below - */ 

add(2, 3);

function add(a, b) {
    console.log(a + b);
}

/*
The rest of the code above is : 5

 - Here, we might expect the invocation of the function 'add' to throw an error
   since it is being invoked before being defined. However, function hoisting lets
   us use the function before it is declared in our code and hence the invocation 
   of the 'add' function does not throw any error and logs 5 to the console.
*/ 