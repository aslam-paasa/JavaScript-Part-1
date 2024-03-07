/* Ternary Operator:
 - Unary means one, binary means two and ternary means three.
 - Ternary Operator involved with 3 situations/expressions.
 - Ternary Operator looks like this " ? : ", together this becomes a ternary operator

  How ternary operator works?
 - let y = ((condition) ? (expression1) : (expression2));

 - Ternary Operator says that if this condition is 'true' then you will evaluate
   expression1 and whatever will be the result of evaluation of expression1 we are
   going to return that result to "y". 
 - But if the given condition is "false" we are not going to evaluate expression1,
   instead we are going to evaluate expression2 and whatever will be the result of
   evaluation of expression2 we are going to return that result.
*/

let y = ((10 > 5) ? (10) : (7));
console.log(y);

let x = ((10 < 5) ? (10) : (7));
console.log(x);

// No need to evaluate expression because it is already true
// If it is true then we will not consider expression2
let z =((true) ? (2 + 3) : (2 - 3));
console.log(z);

let a = 10;
// Expression1 will be avoided
// Increment the value of b then returns the value
let b = ((3 < 1) ? (2 - 3) : (++a));
console.log(b);