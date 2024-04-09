/* Pure Function :
 - Pure Function does not change the state of variable out of its scope and
   it will always return same output if we pass the same input mutliple number
   of times.
 - The above definition is little bit har to understand, so let me explain this
   with example.

   1947: Earth is a planet
   2000: Earth is a planet
   2022: Earth is a planet

 - This real time example will show whenever you are studying about our planet
   earth everytime the statement "Earth is a planet" is same.*/

var num = 5;
// Pure Function
const pureFunction = (num1, num2) => {
    return num1 + num2;
};

// always returns the same result given same inputs
const result1 = pureFunction(4, num);
console.log(result1);
// 9

const result2 = pureFunction(num, 4);
console.log(result2);
// 9

/*- Lets quickly jump into the coding example, here the variable num is declared
    outside of the function scope i.e. num is a global variable and the function
    is not mutating the variable.
  - So, every time we call the function getting the expected output and it has
    no side effects.*/ 