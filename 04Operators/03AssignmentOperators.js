/**
 * 2.Assignment Operators :
 * => As the name suggest "assignment", means we want to assign some value.
 * => For example, 
 *    (a) = 
 *    (b) += 
 *    (c) -+ 
 *    (d) /= 
 *    (e) %=
 * 
 * => let a = 10;
 *          |
 *          V
 * Assignment Operator : 
 * => '=' just directly assigns the value to RHS to LHS.
 *         
 * (a) a += 2 means: 
 *  => a = a + 2 
 *  => a = 12
 * 
 * Explanation:
 * => Take previous value of a, add 2 to it, then assign this new value back
 *    to 'a'. 
 * => If previous value of a was 10 then after this operator, it becomes 12.
 * 
 * (b) a -= 2 
 *  => a = a - 2 
 *  => a = 8
 * 
 * (c) a *= 2 
 *  => a = a * 2
 * 
 * (d) a /= 3 
 *  => a = a / 3
 * 
 * (e) a %= 3 
 *  => a = a % 3
 * */ 


/**
 * Assignment Operators:
 * => We just assigns value from RHS to LHS.
 * => And, += is actually doing a = a + 2
*/

let a = 10; 
a += 10; 
console.log("Value of a after addition is", a);

a -= 3;
console.log("Value of a after subtract is", a);

a *= 2;
console.log("Value of a after multiplication is", a);

a /= 3;
console.log("Value of a after division is", a);

a %= 3;
console.log("Value of a after storing remainder is", a);

a **= 2;
console.log("Value of a after exponent is", a);