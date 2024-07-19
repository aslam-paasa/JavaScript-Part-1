/* DataTypes :
 - A data type, in programming, is a classification that specifies which type
   of value a variable has and what type of mathematical, relational or logical
   operations can be applied to it without causing an error.
 - A string, for example, is a data type that is used to classify text and an
   integer is a datatype used to classify whole numbers.

Q) What all values we can store in JS?
1. Number : 10, -3, 2.6, 3.414, 100, 1000 etc...
2. String (text) : "Sanket" (double quotes), 'Random' (single quotes), 
   `Some Text` (Backtick)
3. Boolean : true, false (these are all small values)
4. Undefined : keyword -> used to represent something not defined yet but 
   maybe defined later
5. Objects : If we have to somehow store key-value pair, then we can use
   objects.
   <key, value>
   user1 = 
      {
         name: Sanket,
         company: Google
      } 
   - Keys will be unique.

   {
      name: "IPhone",
      cost: 1,30,000,
      color: "deep purple",
      discount: 5
      description: "The new apple iphone"
   } 

6. Null : It actually represents empty value.
   - let b = null;

Primitive : 
=> Means types which are atomic in nature means they doesn't depend on 
   anything else. 
=> For example, Numbers, which exist on themselves.

Non-Primitive :
=> Types which are composition of other types
=> For example, object : to create an object we have to use other properties
   or other primitive datatypes as well.
*/ 

var marks = 100;
var names = "Sanket";
var ages;
var company = null;
var salary = undefined;
var isStudent = false;
console.log("Marks = ", marks);
console.log("Name = ", names);
console.log("age = ", ages);
console.log("Company = ", company);
console.log("Salary = ", salary);
console.log("Is A Student ? = ", isStudent);

"use strict";// Treat all JS code as newer version (Automatically newer version m chlta h)


// Error : Because of node js, we need to use chrome developer tools or browser
// It is working inside browser because everything is inside document but ab node m alert ko use krne ka different syntax h
// alert(3 + 3);    // we are using nodejs, not browser


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(3
            +
            3); // Code readability should be high

console.log("Hitesh");

// Readable
console.log(3 + 3); 
console.log("Hitesh");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++DataTypes+++++++++++++++++++++++++++++
let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;
let temparature = null;

// Symbol m agar hm dono ki value v same pass kre but humein jo result milega unki value same nai hogi
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false

const bigNumber = 3456567897654456876n;
console.log(typeof bigNumber);  //bigInt
console.log(typeof bigNumber === 'number'); //false
console.log(bigNumber); //3456567897654456876n

//++++++++++++++++++++++PrimitiveTypes+++++++++++++++++++++++++++
// 1. number => range 2^53 (bigInt agar bahut badi digit h)
// 2. string => "" 
// 3. boolean => true/false
// 4. null => standalone value -> representation of empty value
// 5. undefined => value declared but not defined
// 6. symbol => used to find uniqueness (Generally used in React)
// 7. BigInt 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++Non-PrimitiveTypes++++++++++++++++++++++++

// 1. Object 
console.log(typeof "hitesh");   //string (Non-PrimitiveType)
console.log(typeof age);    //number
console.log(typeof null);   //Object -> null is an empty object
console.log(typeof undefined); //undefined

// 2. Array

// 3. Functions

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






//++++++++++++++++++DataType Conversion Confusion++++++++++++++++
// let score = 33;
// let score = "33";
// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
let score = "hitesh"; 


// Kai baar hm value front end request se lete h -
// const {score} = req.body // Isme pta ni h ki value string aai h ya fir number etc..

// Two ways to know datatype :
//----------------------------
// 1. First way
console.log(typeof score); //number //string 
// 2. Second way -> Write as method - inside parantheses 
console.log(typeof(score)); //number //string
// Note : Dono case m number lower case m likha hua h. But agar mai 33 ko "33" double quotation m likhta hu to datatype becomes string

//Ye guarantee h ki ab jo score h wo number m convert ho gya h -
let valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number

// But agar maine "33a" type kiya to kya ye convert hoga ?
console.log(typeof valueInNumber);  // "33abc" -> number
console.log(valueInNumber); // NaN -> Not a number (special type)

// But agar value hoti null -
console.log(typeof valueInNumber);  // null -> number
console.log(valueInNumber); // 0

// Agar value hai undefined -
console.log(typeof valueInNumber);  // undefined -> number
console.log(valueInNumber); // NaN -> Not a number (special type)

// Agar value h true -

console.log(typeof valueInNumber);  // true -> number
console.log(valueInNumber); // 1

// Agar string h jo convert ni ho skta -
console.log(typeof valueInNumber);  // string -> number
console.log(valueInNumber); // NaN -> Not a number (special type)



// "33" => 33
// "33abc" => NaN
// true => 1; false => 0



// Convert number into boolean
let isLoggedIn2 = 1;
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof booleanIsLoggedIn2);
console.log(booleanIsLoggedIn2); 
// true => 1; false => 0



// Convert string into boolean
let isLoggedIn3 = "hitesh";
let booleanIsLoggedIn3 = Boolean(isLoggedIn2);
console.log(typeof booleanIsLoggedIn3); //boolean
console.log(booleanIsLoggedIn3); // true => hitesh
// 1 => true; 0 => false
// "hitesh" => true; "" => false



// Convert string into string
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);  //33
console.log(typeof stringNumber);  //string
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//-------------------------Operation-------------------------------
// Why string to number conversion is confusing?
//-----------------------------------------------------------------

let value = 3;
let negValue = -value;
console.log(negValue);  //-3


console.log(2+2);   //4
console.log(2-2);   //0
console.log(2*2);   //4
console.log(2**2);  //4
console.log(2/2);   //1
console.log(2%2);   //0


// Connect two strings
let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
console.log(str3);

// Problem-1
console.log("1" + 2);  //12

// Problem-2
console.log(1 + "2");   //12

// Problem-3
console.log("1" + 2 + 2);   //122

// Problem-4
console.log(1 + 2 + "2");   //32


console.log(true);  //true
console.log(+true); //1
// console.log(true+);  //error

console.log(+"");   //0

console.log(!!true);  //true

console.log(!!"");  //false
console.log(!!0);  //false
console.log(!!"0");  //true
console.log(!!null);  //false
console.log(!!undefined);  //false

console.log(!true);  //false
console.log(!"");  //true
console.log(!0);  //true
console.log(!"0");  //false
console.log(!null);  //true

console.log(!undefined);  //true

console.log(!!null);  //false
console.log(!!undefined);  //false

console.log(!!0);  //false
console.log(!!"0");  //true
console.log(!!"");  //false
console.log(!!null);  //false
console.log(!!undefined);  //false

console.log(!0);  //true
console.log(!"0");  //false
console.log(!"");  //true
console.log(!null);  //true
console.log(!undefined);  //true


let num1, num2, num3

num1 = num2 = num3 = 2 + 2;

console.log(num1);  //4

console.log(num2);  //4


// Prefix and Postfix - Check MDN website
let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101
++gameCounter;
console.log(gameCounter); //102