/* Function Expression :
 - The syntax that we used earlier for creating a function is called a function
   declaration.
 - There is another syntax for creating a function that is called function expression.
 */ 

//  function expression
let sayHi = function () {
    console.log('Hi');
};

sayHi();

// Here, we can see variable sayHi being assigned a value, the new function, created
// as function () { console.log('Hi'); }. We then invoke the function sayHi.