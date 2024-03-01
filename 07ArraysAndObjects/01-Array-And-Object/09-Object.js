/* Objects in Real World :
 - In the real world any non-living entity can be referred to as an Object
 - A car, boke, smartphone, laptop, chair, table and any simplest thing 
   you can think of is basically an object.
 - These objects have some property and functionality. Consider a
   smartphone .
 - Its properties are -
    (a) Color
    (b) Size of the screen
    (c) Storage
    (d) Camera
    (e) Battery
 - Its functionalities are -
    (a) Calling
    (b) Running applications
    (c) Browsing
    (d) Taking pictures/videos 
 - In the same way objects are used in JavaScript or in programming in
   general to represent it as a real world object. These objects also
   possess some properties and functionalities more commonly referred to
   as methods/functions which are discussed below.

Objects in JS :
 - Objects in JavaScript is an entity which has properties and methods
   associated with it. These objects have properties in the form of
   "key : value" pairs, here key is a string which can also be referred
   to as property name and value can be anything (e.g. string, number,
    null, array, function etc.)
 - Everything in JavaScript is an object except the primitive data types
   that include number, string, boolean, null, undefined.
   
Q) Why do we use Objects in JS?
 - With array we have a restriction on storing the values but with the
   help of Objects we can store any type of data which is available to 
   us.
 - Collection of heterogenous values - different types of values.*/ 

// 1. Creating object using Object literal
const laptop = {
    make: 'Dell',
    model: 'Alienware',
    memory: ['SSD', 'HDD'],
    cores: 8,
    memorySize: [256, 512],
};
console.log(`Recently, I bought a ${laptop.model} ${laptop.make} Laptop. 
This model has amazing features like : 
1. ${laptop.memory} Memory,
2. ${laptop.cores} Cores, 
3. ${laptop.memorySize} GB Memory Sizes`);

// Example - 2 : Use of ternary operator
const student = {
    name: "abc",
    rno: 5,
    isDayScholar: true,
    subject: ["maths", "english", "hindi"]
};

console.log(student);
console.log(`student ${student.name} has roll number ${student.rno}
and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"},
having subjects ${student.subject}`);

