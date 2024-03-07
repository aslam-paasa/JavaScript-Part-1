/* Numbers NaN NegativeZero NegativeInfinity :
 - JS gives us 3 very interesting numbers -
 (a) 0
 (b) -0
 (c) NaN - Not a Number
 
  0    1    2    3    4   5    6
+--------------------------------+
| nb | cd | or | xy | z | mn | a |
+--------------------------------+
 - Return the Bucket Number in which 'df' string is present.
 - If there is a situation where you're bound to return a number, but there is
   no valid possible number to return, then we use "NaN".
 - So, NaN is a number that is used to show a situation of invalid number. 
 - console.log(undefined/null); 
 - undefined value can never be divided to anything

Q) Which is the only number in JS which is not equal to itself?
 - NaN
 */ 

console.log(10/null); // Infinity
console.log(undefined/null); //NaN -> undefined value can never be divided to anything

// Special Numbers
console.log(+0);
console.log(-0);
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);

console.log((10 < Infinity)); // true