/* 
+----------------+
| Error Handling |
+----------------+
 - In the programming, there can be two types of errors in the code :
    1. Syntax Error
    2. Runtime Error
 - These errors that occur during runtime are called exceptions.

+-------------------------------------+
| 1. JavaScript try...catch Statement |
+-------------------------------------+

    try {
         body of try
    }
    catch(error) {
         body of catch
    }
    
 - The main code is inside the "try" block. While executing the "try",
   block, if any error occurs, it goes to the "catch" block. The "catch"
   block handles the errors as per the catch statements.
 - If no error occurs, the code inside the "try" block is executed and
   the "catch" block is skipped.
   
   
+-----------------------------------------------+
| 2. JavaScript try...catch...finally Statement |
+-----------------------------------------------+
 - You can also use the "try...catch...finally" statement to handle 
   exceptions. The "finally" block executes both when the code runs 
   successfully or if an error occurs.
 - The syntax of "try...catch...finally" block is :

    try {
        // try_statements
    } catch(error) {
        // catch statements
    } finally() {
        // codes that gets executed anyway
    }
    
*/ 

try {
    console.log("Before Error Occurrence in try block");
    console.log(x)
    console.log("after Error Occurrence");
} catch (e) {
    console.log("Error Handling Code in catch block");
} finally {
    console.log("This code is running always");
}

// console.log(2/0);