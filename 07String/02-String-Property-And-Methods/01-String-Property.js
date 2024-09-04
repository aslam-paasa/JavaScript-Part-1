/**
 * String Property:
 * => Property means String ka apna internal variable jo kuch value
 *    store karega.
 */

let str0 = "Mohammad ";
let str1 = 'Aslam';

console.log("String Name: " + (str0 + str1));
console.log();

/** 
 * 1. Length Property: 
 * => It is used to calculate length of the String data stored in the
 *    variable (including space).
*/

console.log("1. String Length Property");
console.log("   Length of String is : " + str0.length);
console.log("   Length of string is : " + str1.length);
console.log();


/**
 * 2. Indices: 
 * => Accessing characters of a particular index.
 * => Means string k individual index ko v access kr skte hai.
 * 
 *    Position : "M o h a m m a d"
 *    Index    :  0 1 2 3 4 5 6 7
*/

console.log("2. String Index Property");
console.log("   Character at position/index 0 : " + str0[0]);
console.log("   Character at position/index 1 : " + str0[1]);
console.log("   Character at position/index 7 : " + str0[7]);