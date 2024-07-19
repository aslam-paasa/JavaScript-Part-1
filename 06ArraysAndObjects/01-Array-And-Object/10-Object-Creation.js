/** 
 * Objects in Real World :
 * => In the real world any non-living entity can be referred to as an Object
 * => A car, boke, smartphone, laptop, chair, table and any simplest thing 
 *    you can think of is basically an object.
 * => These objects have some property and functionality. Consider a
 *    smartphone .
 * 
 * => Its properties are -
 *    (a) Color
 *    (b) Size of the screen
 *    (c) Storage
 *    (d) Camera
 *    (e) Battery
 * 
 * => Its functionalities are -
 *    (a) Calling
 *    (b) Running applications
 *    (c) Browsing
 *    (d) Taking pictures/videos 
 * 
 * => In the same way objects are used in JavaScript or in programming in
      general to represent it as a real world object. These objects also
      possess some properties and functionalities more commonly referred to
      as methods/functions which are discussed below.
*/

/**
 * Objects in JS :
 * => Objects in JavaScript is an entity which has properties and methods
 *   associated with it. These objects have properties in the form of
 *   "key : value" pairs, here key is a string which can also be referred
 *   to as property name and value can be anything (e.g. string, number,
 *   null, array, function etc.)
 *
 * => Everything in JavaScript is an object except the primitive data types
 *   that include number, string, boolean, null, undefined.
*/

/**
 * Q) Why do we use Objects in JS?
 * => With array we have a restriction on storing the values but with the
 *    help of Objects we can store any type of data which is available to 
 *    us.
 * => Collection of heterogenous values - different types of values.
 * */



/**
 * 1. Creating object using Object literal:
*/

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


/**
 * Example - 2 : Use of ternary operator
*/
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


/**
 * Q. Is it possible for us to change/update it later (Mutable)
 * => Mutable - whose state can be modified (Objects)
 * => Immutable - whose state cannot be modified (Arrays)
*/ 


/**
 * Object Mutable Example:
 * */ 
student.rno = 10;
console.log(`student ${student.name} has roll number ${student.rno}
and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"},
having subjects ${student.subject}`);



/**
 * 2. Creating Objects using New Keyword (When we want to create new instance):
 * */ 
const newStudent = new Object(); 
newStudent.name = "abc";
newStudent.rno = 15;
newStudent.isDayScholar = true;
newStudent.subject = new Array("maths", "english", "hindi");

console.log(newStudent);
console.log(`Student ${newStudent.name} has roll number ${newStudent.rno}
and isDayScholar : ${newStudent.isDayScholar == true ? "yes" : "no"},
having subjects ${newStudent.subject}`);

/**
 * Update roll number:
*/
newStudent.rno = 21;
console.log(`Student ${newStudent.name} has roll number ${newStudent.rno}
and isDayScholar : ${newStudent.isDayScholar == true ? "yes" : "no"},
having subjects ${newStudent.subject}`);



/**
 * Using "this" keyword we refer to an object:
 * 1. We can use it in object method.
 * 2. Use it alone to refer global objects.
 * */ 

/**
 * Example-1 : "this" in a method
*/

const person = {
  firstName : "Mohammad",
  lastName : "Aslam",

  fullName : function()
  {
      return `Full Name is ${this.firstName} ${this.lastName}`
  }
};

console.log(person.fullName());

/**
* To access global objects - console.log(this);
* */ 



/**
 * 3. Creating Objects using Constructor and "this" keyword:
 * */ 

/**
 * Example: Laptop constructor
 * */
function Laptop(ram, processor, screenSize) {
  this.ram = ram;
  this.processor = processor;
  this.screenSize = screenSize;
}

/**
* Creating the objects by calling the constructor:
*/
let myLaptop = new Laptop(16, "i7", 14);

console.log(myLaptop);
console.log(myLaptop.processor);



/** 
 * 4. Object.create method :
 * => There is an inbuilt function for creating an object in JS.
 *
 * Example :
 *    const laptop = {...}
 *    const newObject = Object.create(laptop)
 *                               |
 *                               V
 *           This is going to create copy of laptop object
 *                  
 * => let num = 123
 * => let temp = num
 *    Here also we were creating copy of num in temp variable. 
 * */

const originalStudent = {
  name: "Mohammad Aslam",
  rno: 5,
  isDayScholar: true,
  subject: ["maths", "english", "hindi"]
}

/**
* To create copy of student object:
*/
const copyStudent = Object.create(originalStudent);
console.log(typeof(copyStudent));
console.log(copyStudent.name);


/**
 * 5. Object.assign(): 
 * => It creates copy of the object. 
*/
const assignStudent = {
  name : "abc",
  rno : 10,
  phno : 987
}

let newObject = Object.assign({}, assignStudent);
console.log(newObject); // data is in JSON format
