/**
 * Equality Operators :
 * 1. Most of the languages contain 1 equality operator but JS has got 2 equality
 *    operator.
 *    a. == (Abstract Equality Operator)
 *    b. === (Strict Equality Operator)
 * 
 * 2. "==" only check the value of the operands whereas '===' checks the value as well
 *    as the datatype. (100% wrong statement)
 * 
 * 3. Wrong Statement :
 *    a. '==' check the value of the operands
 *    b. '===' check the value as well as datatype
 * 
 * Let's see documentation:
 * 1. '==' check the datatype of both operand, if type is same then it calls'==='.
 * 2. If types are not same then type conversion occurs (coersion) and then comparison
 *    is done.
 * 3. '===' check the value as well as datatype of the operands.
 * 4. But if the datatype are different it returns false.
 * 5. If datatypes are same then value comparison happens.
 * 6. Difference : '==' do type conversion whereas '===' no do type conversion.
*/

console.log(1 == "1");
console.log(1 == "sanket"); //1 == NaN
console.log(NaN === NaN); // NaN is only number which is not equal to itself

/**
 * If first number is NaN, then don't check 2nd and return false. 
 * That's why NaN is not equal to NaN. 
*/

