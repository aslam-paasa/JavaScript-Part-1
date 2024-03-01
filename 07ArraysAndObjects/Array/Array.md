Array :
-> We might have seen indexes in our book -
------------------------------
| Index             Page     |
|   1.                1      |
|   2.                12     |
|   3.                50     |
------------------------------
-> We have seen chapter No - 1 and its corresponding page. So, let's say it is starting from page no-1. When we will have chapter no-2, it will start from page no-12, chapter-3 starts from page no-50. This is how we see in our book.

Q) What is the advantage of creating this index?
-> If we want to reach to any chapter, we will straight away go to that page no.
-> Similarly, in array, they started storing the value and for every value we will have one index.
-> And this index is helping us to retrieving the value in a lesser way. 

Q) How does an actual array look like?
[arr]
-----------------------------
| 11 | 12 | 20 | 2 | 5 | 30 |   (Value)
-----------------------------
   0    1    2   3   4    5     (index)

Q) Tell me the value which is available at 3rd position?
-> Value at position 3 is @2nd index = 20

Q) How many total elements in that array?
-> Total no. of elements in array = arr.length = 6
-> 6

Q) If we have 6 elements here, what is the range of its indexes?
-> 0 to 5

Q) How we can define an array?
-> By 'var' and 'let'
-> let nums = [5, 6, 7, 1]
-----------------
| 5 | 6 | 7 | 1 |
-----------------
  0   1   2   3

Q) Why are we going to use array?
-> In one variable we can store more than one value -
Ex: const num1 = 5
    const num2 = 6
    const num3 = 7
        (or)
    const arr = [5, 6, 7]

-> Arrays are 'stored in contigious/continuous' manner.
-----------------------------------------
| num1 | ... | num2 | num3 | ... | num4 |
-----------------------------------------
-> Not necessary the values will be stored one after the another.
-> If we have to store one array in memory, it will be stored like this -
-----------------------------------------
|     |     | arr |     |     |     |   |
-----------------------------------------
                |
                V
            [5, 6, 7] -> Contigious in nature (Everything is stored at one place/next to each other)
--------------------------------------
|     |     | 5, 6, 7 |    |     |   |
--------------------------------------

-> Arrays are homogenous in nature, means 'same type'
(Either entirely no type or String type or Boolean type)


Q) How to access value any index based upon index ?
-> arr[index]


// Sum of five value without using array
const num1 = 5;
const num2 = 1;
const num3 = 2;
const num4 = 3;
const num5 = 1;
// created 5 variables to store 4 values
let sum = num1+num2+num3+num4+num5;
console.log(`Sum is ${sum}`);


// Sum of five value using array
const num = [5, 1, 2, 3, 1];
console.log(`Value at index-4 is ${num[3]}`); // to access value at index 3
console.log(`Length of array is ${num.length}`); //range of index

// using for loop sum the values of array
for(let i = 0; i<num.length; i++){
    sum += num[i]; //sum = sum + num[i];
}
console.log(`Sum of 5 value is ${sum}`);

// print all values one after another
for(let i = 0; i < num.length; i++){
    console.log(`Value at index = ${i} is ${num[i]}`);
}

/*
nums.length = 5
nums.length = 5-1 => 4

Two ways to write the loop -
1) for (let i = 0; i < num.length; i++)
2) for (let i = 0; i <= num.length-1; i++)

*/

const boolArr = [true, false, true, false, true]
for(let i = 0; i <boolArr.length; i++){
    console.log(`Value at index = ${i} is ${boolArr[i]}`);
}

Output :
Sum is 12
Value at index-4 is 3
Length of array is 5
Sum of 5 value is 24
Value at index = 0 is 5
Value at index = 1 is 1
Value at index = 2 is 2
Value at index = 3 is 3
Value at index = 4 is 1
Value at index = 0 is true
Value at index = 1 is false
Value at index = 2 is true
Value at index = 3 is false
Value at index = 4 is true


Types of Array :
1) Single Dimensional Array 
2) Multi-Dimensional Array
   (a) 2-D Arrays
   (b) 3-D Arrays
   (c) Jagged Arrays

Q) When we have single dimensional array, why all these array come into the picture?
-> If we talk about only maths, so when we just have a point. With just a point can we determine a lot of parameter? No!
-> But when we are going to put it in the 2D System, like this, where we have 'x' and 'y' coordinate. So, this is actually providing 2 dimensions to the value -
   (y)
    ^
    |
    |
    |
    |
    ------------> (x) 
-> Similarly, this is providing 3 dimensional array.
-> And we provide multidimesional array because with every dimension we can provide different set of values.

Coding Questions generally came from this area -
1) 1-D array
2) 2-D array
-> And Jagged array is asked as 'theory question' for interview.
Note : Jagged as called as 'Array of Array'


Note : If we have to show how we can define one 2-D Array, so in maths we convered the topic 'matrix' -
--          --
| 4, 5, 6, 6 |
| 4, 1, 2, 6 |
--          --
----------------------------
2 ways to initialize array -
----------------------------
// way-1 : initializing array
const arr = [1,2,3]; //this uses array literals -> if values are string then called as 'string literals'
console.log("first array");
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
// way-2 : initializing array
const arr1 = new Array(4, 5, 6); //using array class
console.log("second array");
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

Output :
first array
1
2
3
second array
1
2
3


To initialize 2D Array -
const arr2 = [[R1], [R2], [R3]];
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
console.log(`total nums of row = ${arr2.length}`)

Q) How to find total number of row?
So, array.length is actually counting 'R1', 'R2' 'R3' and that is how it is telling total no of column

Q) How to find total no. of column?
-> Here, this R1 is having all the number of values in one column -> [1, 2, 3]. So, we have to enter inside -
arr[0].length, and this one will tell the total no, of column.

Code :
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
console.log(`total nums of row = ${arr2.length}`);
console.log(`total nums of column = ${arr2[0].length}`);

Output :
total nums of row = 3
total nums of column = 3

Q) What if we create one extra row?
const arr3 = [[R1], [R2], [R3], [R4]];

const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 1, 1]]; 
console.log(`total nums of row = ${arr3.length}`);
console.log(`total nums of column = ${arr3[0].length}`);

Output :
total nums of row = 4
total nums of column = 3

Object :
-> We are going to use object through {...}/curly braces.
-> Compiler actually goes line-by-line (left-to-right), so when it goes line-by-line, it sees [] -> then compiler understand it is and array and if {} -> then object.

//representing 2-D Array
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //3 rows, 3 column
console.log(`total nums of row = ${arr2.length}`);
console.log(`total nums of column = ${arr2[0].length}`);

// creating extra row
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 1, 1]];
// total no of row 
console.log(`total nums of row = ${arr3.length}`);
// total no of cols present in row 0
console.log(`total nums of column = ${arr3[0].length}`);

// to access value at index i in 1 D Array --->  arr3[i]; 
// first loop is 'row' and 2nd loop is for 'cols'
for(let i = 0; i < arr3.length; i++){
    for(let j = 0; j < arr3[0].length; j++){
        console.log(arr3[i][j]); //print at row=i and col=j
    }
}

Output :
total nums of row = 3
total nums of column = 3
total nums of row = 4
total nums of column = 3
1
2
3
4
5
6
7
8
9
1
1
1

Note : 2D Array is keeping data in 'matrix' form. And moving from 'row' then 'column' and picking up the data.

Q) How we are doing?
-> We are taking one string - output = "", and then at every row we were addind a value to that variable.
-> After adding let's say we want to make it space separated.

// (1)create one empty string 
let output = "";
for(let i = 0; i < arr3.length; i++){
    for(let j = 0; j < arr3[0].length; j++){
        // (2) add the values to this variable
        output += arr3[i][j] + " "
        // console.log(arr3[i][j]); //print at row=i and col=j
    }
    //print the variable
    console.log(output);
}

Output :
1 2 3
1 2 3 4 5 6
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 1 1 1

If we do a little change then see the value -

// (1)create one empty string 
let output;
// to print the array value
for(let i = 0; i < arr3.length; i++){
    output = ""; //reset the output
    for(let j = 0; j < arr3[0].length; j++){
        // (2) add the values to this variable
        output += arr3[i][j] + " "
        // console.log(arr3[i][j]); //print at row=i and col=j
    }
    //print the variable
    console.log(output);
}

Output : added " " to make it space separated
1 2 3
4 5 6
7 8 9
1 1 1

-> Array is 'linear data structure'. Means everything is coming in one line and it is linear homogenous data structure.
-> Anywhere where we want to store collection of values, we will use 'Arrays'.

Object : If we look into reallife scenario, everything is an object.
-> In realworld any non-living entity can be referred as an Object.
-> A car, bike, smartphone, laptop, chair, table and simplest thing you can think of is basically an object.
-> These objects have some property and functionality. Consider a smartphone (realife object).
-> Its properties are :
    (a) Color : White
    (b) Size of the screen : 6 inch
    (c) Storage : 128GB
    (d) Camera : 64 megapixel
    (e) Battery : 4000mah
-> We have created on realife object and we have defined its properties along with its properties.
-> Now we will have to see its functionality like how are we going to use it?
    (a) click photo
    (b) Browse Internet
    (c) Attend Meeting
    (d) Play Games
    (e) Watch movies
    (f) Communicate with someone etc...
So, here one object has various functionalities. Now similar to how we have defined one object in the realife, similarly we can create one object in the programme. And when we are going to define the object, it is going to be the same.
Note : When we going to create it, it is having some functionality/use.

Note : There are two things. Something which is written on the left hand side and something which is written on the RHS.
    (a) Color : White
    (b) Size of the screen : 6 inch
    (c) Storage : 128GB
    (d) Camera : 64 megapixel
    (e) Battery : 4000mah
LHS -> Key : Value -> Value
So, object is collection of key and values pair. And with his key:value pair we can store any type of data.
-> Objects are used to store heterogenous data.

Mutable -> whose state can be modified.
Immutable -> whose state cannot be modified.


Creation of Objects -
---------------------
1) Using object literals :

const student = {
    name : "Aslam",
    rno : 5,
    isDayScholar : true,
    subject : ["maths", "english", "hindi"]
}

console.log(student);

/*
{
  name: 'abc',
  rno: 5,
  isDayScholar: true,
  subject: [ 'maths', 'english', 'hindi' ]
}
*/

console.log(`Student ${student.name} has roll number ${student.rno} and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"}, having subjects : ${student.subject}`);

student.rno = 10; //mutable
console.log(`Student ${student.name} has roll number ${student.rno} and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"}, having subjects : ${student.subject}`);

//object doesn't have index so how can we iterate values?


2) Using new keyword :

const student = new Object(); //creating new object with the help of 'new' keyword
student.name = "abc";
student.rno = 15;
student.isDayScholar = true;
student.subject = new Array("maths", "english", "hindi");

// it will print exactly the same
console.log(student);
console.log(`Student ${student.name} has roll number ${student.rno} and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"}, having subjects : ${student.subject}`);

3) Using this keyword :
-> Let's say we have 5 notebook on your table. Somebody coming and asking us which particular notebook is of Hindi. So, we point towards that and say 'this one'.
-> Similarly, using 'this' keyword we refer to an object.
(a) We can use it in object method. (upar m humne likha h)
Imagine we are talking about this room, means room is global to me because right now this is where we are surrounded with.
(b) Use it alone to refer global object.

'this' is a method :
--------------------
// 'this' is a method 
const person = {
    firstName : "abc",
    lastName : "xyz",

    fullName : function()
    {
        return `full name is ${this.firstName} ${this.lastName}`
    }
};

console.log(person.fullName());

// to access global object 
console.log(this);


Using this keyword & constructor :
----------------------------------
-> Let's say we are going to create one function and that has details like Laptop and inside this we have some properties -
    (a) ram
    (b) processor
    (c) screensize
-> 3 things we are providing -
function Laptop(ram, processor, screensize){
    this.ram = ram;
}
-> Here this is saying, you take the global 'ram' and to that you assign the value which is passed to it. Similarly, we will do the same with other. 

function Laptop(ram, processor, screensize){
    this.ram = ram;
    this.processor = processor;
    this.screensize = screensize;
}

-> So, when we are going to call this function, as we know it has some parameters, those parameters will get - 'this.parameters' and it is going to available globally -

function Laptop(ram, processor, screensize){
    this.ram = ram;
    this.processor = processor;
    this.screensize = screensize;
}

let laptopDetails = new Laptop(16, "i7", 14);

console.log(laptopDetails);
// NOte : key m this lagae h aur parameter se value daal diye

Output :
Laptop { ram: 16, processor: 'i7', screensize: 14 }


To print values of an objects :
-------------------------------
-> Previously we have discussed, object will have set of key-value pairs.

object = {key : value}

-> If we want to print it out, we are going to use for-loop.

Q) How does for-loop work on a collection?

for-loop for a collection :
---------------------------
for(const key in objectName)
{
    //logic
}

-> From this collection, objectName, pick values one-by-one and store it in variable key.
    key : value
-> When we will iterate, we will do it on the basis of key.
-> Now if you want to access its corresponding value -
    objectName [key] //with this we can access the value

Code :

function Laptop(ram, processor, screensize){
    this.ram = ram;
    this.processor = processor;
    this.screensize = screensize;
}

let laptopDetails = new Laptop(16, "i7", 14);
console.log(laptopDetails);
console.log(laptopDetails.ram);



Output :
ram has a value : 16
processor has a value : i7
screensize has a value : 14


If we have an Array how we can print the values -
1) for loop
2) forEach loop

2:43:00