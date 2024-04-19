/*3. Object.is() : This method is used to compare two values then return
   true if values are same, otherwise false.
 - Earlier we use 'equal' comparator, so this one says, if you use
   Object.is() then we can compare the values.

Q) When we already have comparison operator, so how are we going to decide
   which one to pick when?
 - We have various situations -

const num10 = +0;
const num11 = -0;

console.log(Object.is(num10, num11));

Q) This will return true/false?
-> False! Because it is not taking negative and positive, it is just seeing
   that it has positive zero and it has negative zero.

-> But when we are going to do this with if-else/ternary, it will show true -
(num12 === num13) ? console.log("true") : console.log("false");
*/

const num6 = 1;
const num7 = 3;

console.log(Object.is(num6, num7)); // returns false because nums are not equal

const num8 = 1;
const num9 = 1;

console.log(Object.is(num8, num9)); // returns true because nums are equal


const num10 = +0;
const num11 = -0;

console.log(Object.is(num10, num11)); // false
console.log(num10 === num11); // true

const num12 = NaN; // Not a number
const num13 = NaN;

console.log(Object.is(num12, num13)); // true
console.log(num12 === num13); // false