/* List of Concepts :
1. What are functions?
2. How to write a function?
3. Invoking a function
4. Advantages of using functions
5. Function declaration vs Function Expression
6. Function Hoisting
7. What is Scope?
8. Global Vs Local Scope

DRY Principle :
=> Don't Repeat Yourself
=> DRY says "If we have done something once, why do we want to do it again and
   again"

=> Let's say we are writing a piece of code in "index.js". In this piece of
   code, somewhere we wrote a logic to check if the number is positive or not?
=> Let's say we have to do thing logic 50 times.

Situation-1 : Instead of writing the correct logic, we wrote something wrong.
              And we wrote the same thing wrong everywhere. And now we have
              to rectify the logic in all the 50 places.

Situation-2 : Let's say the requirement changed and new requirement is instead
              positive or negative, we have to find odd or even. Now we have 
              to again change the logic in all the 50 places, and this is
              happening because we are repeating ourselves (copy-pasting).

Note : How about a mechanism using which we can avoid this?
Solution => Function

Q) What are functions?
Q) Why do we need functions?
 - A function is a piece of code that performs a specific task and which can be
   reused.
 - Suppose you need to write a program to fund inf the sum of two numbers is
   greater than 10. You could write the following functions for it :
   
   (a) A function that adds two numbers
   (b) A function which checks if the number is greater than 10
   
 - Functions make our code more readable and reusable.

Why do we need functions?
 
*/ 