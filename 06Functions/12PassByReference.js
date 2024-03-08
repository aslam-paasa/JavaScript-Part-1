/*Pass by Reference :
 - A function is called by passing the reference of the variable and any change
   in the variable inside the function will make a chnage in the value of the
   outside variable.
 - I hope this is also bit confusing, let me come up with an similar example
   of pass by value.
 - Let's consider you have attended an online examination and scored low mark
   and your teacher asked you to get an e-signature in the original mark sheet
   from your parent which was uploaded in the school website.
 - But getting signature for a low mark sheet is not easy, but you have comvinced
   your parent and got an e-sign from your parent. In this scenario, your parents
   have signed the mark sheet in their home but changes are reflected in the
   original marksheet.
 - Marksheet is in the school Database but parents are opening the same marksheet
   in their home and e-signing by referring the marksheet.*/ 

// Functional declaration
function passByReference(arr, value) {
    arr.push(value);
    console.log('********** Console Array into Pass by Reference **********');
    console.log(arr);
}

// Declaring array and add "pass" string in the array
const arr = ['pass'];

// logging the array before pass by reference
console.log('********** Console Array Before Pass by Reference **********');
console.log(arr);

// Calling a function - passByReference with two argument (1) Array, (2) String
passByReference(arr, 'by Reference');

// logging the array after pass by Reference
console.log('********** Console Array Before Pass by Reference **********');
console.log(arr);

/*Programming Example :
1) In this example, we have declared an array with string 'pass' and declared
   one function called "passByReference", it should ask two argument one is array
   and second is string.
2) Here, we are passing the array having one index and adding the string 
   'by Reference" in the array inside the function.
3) But changing the variable inside the function make a change in the outside
   function because we are passing the reference of an array inside the function.
4) Here the Non-Primitive Data Type comes in picture because the value inside an
   array is mutable. Once it is initialized, we can change the value, adding the
   value, deleting the value inside an array.*/ 

// Below are the data types which support pass by reference,
// (a) Object
// (b) Array

// Let me explain how pass by reference works in terms of memory allocation in JS.
// Consider an object variable with name "obj" and having property name as javascript
// and score as 100
// "let obj = {name: 'javascript', score: 100}"

//                 +---------------------+----------------------------------+
// +--------+      | Address             | Value                            |
// | Object | -->  |  0034AB36YD678      |  {name: ‘javascript’, score: 100}|
// +--------+      +---------------------+----------------------------------+

// In computers the variables are stored in memory with address and value pairs and
// the variables obj is pointing to the address.

// Let us assign the variable obj to variable newObj :
// "let newObj = obj"

// Now both obj and newObj are pointing to same memory address

// Let me change the newObj property score as 90. In this case both are pointing
// to same address and that is holding value 10, so changing the property in
// newObj will change the property in obj since these are non-primitive data type.

//                 +---------------------+----------------------------------+
// +--------+      | Address             | Value                            |
// | Object |--+>->|  0034AB36YD678      |  {name: ‘javascript’, score: 100}|
// +--------+  |   +---------------------+----------------------------------+
// +--------+  |
// | newObj |--+
// +--------+

