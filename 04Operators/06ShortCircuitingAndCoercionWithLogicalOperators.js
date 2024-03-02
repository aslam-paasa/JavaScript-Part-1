/* We will learn 2 concepts :
(1) Short Circuiting
(2) Conversion of Values to Boolean

Introduction :
-> Suppose we are having 5 steps and in 1st step itself we got the result so we are
   not going for go to next steps. Thats is the reason using which we do not have 
   to perform entire expression, as soon as the result is determined we can stop
   the evaluation and print the result. This is often used in logical operator
   that is our "&&" logical AND and "||" logical OR operators.
-> IN JS, some logical operators, such as the "&&" or "||" operator, have a feature
   called as "short-circuiting".
-> So short-circuiting in logical operators, means that, in certain conditions,
   the operator will immediately return the first value and not even look at the
   second value.

Conversion of Value to Boolean :
 - Wherever we put logical &&, ||, we have some value to the left side and
   we have some value to the right side.
   LeftSide && RightSide
   LeftSide || RightSide
 - If these values are not automatically a boolean value, for example these are
   numbers like -> 10 && 6, 10 || 6
 - So, JS will try to convert them into Boolean Value.
 
Q) What values are falsy in JS?
 - Null -> false
 - undefined -> false
 - "" (empty string) -> false
 - +0, -0, NaN -> false
Note : Apart from this, everything is truthy value

Q) How JS does the conversion?
 - There is a concept called as "Coercion" or "Type Conversion"
 - Every Programming lanaguage have their own Type Conversion.
 - Long story short, if we have something like this :
    10 && 6, then JS will treat them as a Boolean Value. But still in
    10 and 6, both are true but why don't we get 10? Why we only get 6?
 - If we do console.log(10 && 6), we will get output as 6, why? 
 - We have learnt the "falsy" values in JS that means 10 and 6 are technically
   truthy values - 

Note : Short-Circuiting in AND Gate -
    X      Y      X AND Y
    false  false  false
    true   false  false
    false  true   false
    true   true   true
 - In the AND Gate, if one input is false, output is false. It doesn't matter
   what the next input is, the moment the algorithm sees that the first input
   to the AND Gate is "false", it will directly return us false. It never
   actually sees the second expression. This concept is called "short-
   circuiting"
 - But if the first input is true then it has to see the second input and
   whatever is the second input it returns that.
 - If first input is true then just return the second input :
       true   false  false
 - If first input is true then just return the second input :
       true   true   true
 - But if first input is false return the first input :
       false  false  false
 - But if first input is false return the first input :
       false  true   false
 - "In a AND Gate, if the first input is false, then, it doesn't evaluate the
    second input and immediately returns the first input. As well as if
    first input is true then the second input has to be evaluated & then
    second input is returned."

Q) What will happen if we do (10 && 6)?
 - Now 10 is a truthy value, so whatever is the second input, we return the
   second input :
       true   true   true
       10     6      6

 - (10 > 6) && (6 < 7)
 -    true       true
 - If (10 > 6) is truthy value then return the second input (6 < 7), then
   why not we get the output as (6 < 7) because this value can be simplified
   or we can say it is an expression, and it can be evaluated.
 - If we just write 6 somewhere, it cannot be simplified anymore, it is already
   in the most simplest form but if we say (6 < 7) then it can be interpreted as
   "true". That's why when we see an expression like (10 > 6) then the output is
   "true". But if we see something like 10 && 6, it just return us 6 because
   that cannot be simplified any further.

Q) If we write something like console.log(6 && 10), what will be the output?
 - 6 is truthy value so just return the 2nd input : 10 (output)
*/
console.log(6 && 10);
console.log((10 > 6) && (6 < 7));

/*
    X      Y      X OR Y
    false  false  false
    true   false  true
    false  true   true
    true   true   true
 - In a OR Gate, if the first input is true then it doesn't eveluate the second
   input & immediately return the first input whereas if the first input is
   false then it returns the second input. 
 */ 
console.log(10 || 0);
console.log(6 || 19);
console.log(0 || -0); // both are falsy

