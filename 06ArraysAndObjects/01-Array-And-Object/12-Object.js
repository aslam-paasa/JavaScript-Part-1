/**
 * Q. Add two numbers without using "+" operator : (Interview Question)
 * 1. For both positive numbers or either one negative -
 *       num1 = 5;
 *       num2 = 2;
 * => When we have both positive numbers, in such a case start from "i" = 1
 *    and you take it upto "num2" and inside this loop, do "num1++" :
 * 
 *    for(i = 1; i <= num2; i++) 
 *    {
 *       num1++;
 *    }
 * 
 * => Let's say we have two numbers. num1 = 5, num2 = 2. When we are going
 *    to add it we will get (5+2 = 7). So, we are going to add to this number
 *    two times. So, initially it was 5 then +1, we will get 6. Then 6 we
 *    will add +1 = 7. So, we are iterating over the 2nd num i.e. num2.
 * => If we have such thing then we are going to running it from "i=1" and
 *    we will do "i++" upto "i <= num2". And in every loop we will iterate
 *    num1 + 1 upto "i <= num2" or "i <= 2".
 * 
 * 2. In case of one negative and one positive, then we will check for
 *       min and max value.
 * 
 *    Q. How we can check for min and max?
 *    => Through:
 *                i. min = Math.min(num1, num2) = -2
 *               ii. max = Math.max(num1, num2) =  5
 * 
 *    => Now we know that num2 = 5 (positive). So we are going to run a loop
 *       and this loop is going to go from "i=1" to "i <= max" and then we do
 *       "i++". Whatever our minimum value is, inside the loop we will do "min++".
 *    
 *       num1 = 5
 *       num2 = -2
 *       max = 5
 *       min = -2
 * 
 *       min++
 *        |
 *        V
 *      i = 1
 *    min = min + 1
 *        = -2 + 1
 *        = -1
 *  
 *      i = 2
 *    min = min + 1
 *        = -1 + 1
 *        = 0
 *  
 *      i = 3
 *    min = min + 1
 *        = 0 + 1
 *        = 1
 *  
 *      i = 4
 *    min = min + 1
 *        = 1 + 1
 *        = 2
 *  
 *      i = 5
 *    min = min + 1
 *        = 2 + 1
 *        = 3 (output = 5 -2 => 3)
 *  
 *      i = 6
 *     6 <= 5 
 *     XXXXXX
 * 
 * 
 * 3. Both numbers are negative -
 * => When we have both negative numbers in such a case we will have to do -
 *       num1 = -2
 *       num2 = -3
 * 
 * => Using (+) operator -
 *    (-2) + (-3) = -2 -3 = -5
 *  
 * => Without (+) operator -
 *
 *    for(i = 1; i<=Math.abs(num1); i++)
 *    {
 *        num2--;
 *    }
 * 
 * Note : Math.abs -> returns absolute value means if we are taking any
 *        negative value inside it, this will return positive 
 *        num1 = -2,  num2 = -3   --> Math.abs(-2) = 2
 *  
 *    for(i = 1; i<=Math.abs(num1); i++)
 *    {
 *        num2--; --> Because both numbers are negative
 *    }
 *
 *    i=1     1 <= 2
 *        num2--
 *         |
 *         V
 *        num2 = num2 - 1
 *             = -3 -1 = -4
 *
 *    i=2     2 <= 2
 *        num2--
 *         |
 *         V
 *        num2 = num2 - 1
 *             = -4 -1 = -5 (Output)
 *
 *    i=3     3 <= 2
 *      XXXXXX
 *    
*/

let num1 = 22;
let num2 = 2;

/**
 * If both nums are negative:
*/
if(num1 < 0 && num2 < 0)
{
    /**
     * Math.abs return positive value:
    */
    for(let i = 1; i < Math.abs(num2); i++)
    {
        /**
         * Decrement because both are negative value:
        */
        num--;
    } 
    console.log(num1);
}
else
{
    let max = Math.max(num1,num2)
    let min = Math.min(num1,num2)
    for(let i = 1; i <= max; i++)
    {
        min++;
    }
    console.log(min);
}
