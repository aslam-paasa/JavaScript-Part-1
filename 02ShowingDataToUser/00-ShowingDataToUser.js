/** 
 * Showing Data To User :
 * => We can assume functions as a black box.
 * => For example, let's say we go to a bank and we want deposit 100rs to 
 *    our bank. What do we do? Then we just go to the bank, follow some steps
 *    like fill the form and then we go to the cashier, we give that slip and
 *    100rs to that cashier. Now what cashier does we don't know and at the 
 *    end of the day where he/she is going to put that cash. So, that piece
 *    of information is abstracted out means we don't know about that
 *    piece of information. This is the concept of "functions".
 * 
 * => So our bank cashier is like a function, we don't know how they work,
 *    what we only know is they expect some input from us like we will bring
 *    cash to them and they will give us some slip/receipt out of it i.e. our
 *    function.
 * 
 * => Function takes some input, process the input somehow but we don't know
 *    how, but we only know that at the end of the day we will receive some
 *    output like that receipt. This is the concept of basic functions.
 *
 * => The first in-built function that JS give us is "console.log". This
 *    function takes some data as input and then displays them in the output.
 * => f(x, y) is the function.
 * => console.log can take multiple arguments, these arguments can be anything.
 * => If we have 2 different console.log(), then both of them displays/prints 
 *    output in different lines whereas we can also pass multiple values
 *    together to console.log and all of them will be on same line.
 * => console.log(10, "starting", age);
*/ 

console.log(10);
console.log("Hello world!");

let age = 10;
console.log(age);

console.log(10, "starting", age);