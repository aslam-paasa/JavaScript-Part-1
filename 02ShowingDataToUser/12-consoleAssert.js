/**
 * console.assert():
 * => The console.assert() methods writes an error message to the console
 *    if the assertion is false, but if the assertion is true, nothing happens.
 * => The first parameter is an assertion expression.
 * => If this expression is false, an Assertion failed error message will be displayed. 
*/

console.assert(4 > 3, '4 is greater than 3') 
/**
 * Output: no result.
*/

console.assert(3 > 4, '3 is not greater than 4') 
/**
 * Output: Assertion failed: 3 is not greater than 4
*/

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
