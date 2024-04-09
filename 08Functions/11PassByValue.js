/* Pass By Value :
 - A function is called by directly passing the value of the variable and any
   change in the variable inside the function does not affect the outside value
   of variable.
 - As a beginner the above statement is bit confusing, let me explain this with 
   real time example.
 - In this example, passByValue function will add value in the variable with 
   10 => (value + 10), so adding 10 with the variable does not chnage the value
   in the num variable
 - Because we are making the copy and send the value as an argument, here
   primitive type play an role in this example.
*/ 

function passByValue(value) {
    // Adding the value with 10
    return (10 + value);
}

const num = 99;
console.log('num before passByValue function call is', num);

const pbv = passByValue(num);

console.log('num after passByValue function call is', num);
console.log('result after passByValue function call is', pbv);


/* Grade F --> Study --> Exam --> Grade A+

 - Let’s consider you have scored low mark in the examination and your teacher 
   asked you to get a signature in the copy of your mark sheet from your parent. 
 - But getting signature for a low mark sheet is not easy, so you are changing the
   marks in the mark sheet copy and get a sign from your parent. 
 - In this scenario, changing the marks in the copied mark sheet won’t affect in 
   the real mark sheet and at the end you are happy and the teacher also happy for 
   completing the work. 
 - If you get caught then that is out of scope in this example.

 - Below are the data types which support pass by value,
    • Number
    • String
    • Boolean

 - Let me explain how pass by value works in terms of memory allocation in javascript.
 - Consider a variable with name number and assigning value as 10

 let number = 10
                       Address       Value
 +--------+         +----------------+----+
 | Number | ------> | 0034AB36YD678  | 10 |
 +--------+         +----------------+----+

 - In computers, the variables are  stored in memory with address and value pairs
   and the variable number is pointing to the address.
 - Let us assign the variable number to variable newNumber

    let newNumber = number

                       Address       Value
 +--------+         +----------------+----+
 | Number | ------> | 0034AB36YD678  | 10 |
 +--------+         +----------------+----+
                       ^
 +----------+          |
 |newNumber | ----------
 +----------+

 - Now both the number and newNumber are pointing to same memory address. 
 - Let me change the add value of newNumber with 12. In this case both are pointing
   to same address and that is holding value 10, so changing the value in newNumber
   will change the value in number, but here the primitive data type comes into
   picture because they are immutable so the changes should not happen.

   newNumber = newNumber + 12;

                       Address       Value
 +----------+         +----------------+----+
 | Number   | ------> | 0034AB36YD678  | 10 |
 +----------+         +----------------+----+                   
 +----------+         +----------------+----+          
 |newNumber | ------> | 00HJ98FH54RT9  | 22 |
 +----------+         +----------------+----+    
 */ 