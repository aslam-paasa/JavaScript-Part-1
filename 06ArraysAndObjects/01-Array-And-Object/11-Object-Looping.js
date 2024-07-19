/** 
 * Looping through the objects :- 
 * => Objects will have set of "key : value" pair.
 * => If we want to print it out, we are going to use for-loop. 
 *
 * Q. How does for-loop work on a collection?
 * => for(const key{variables which we are taking} in objectName{whatever obejctName we have})
 * => From this collection objectName, pick values one by one and store it
 * => in variable key.  
 * => [key : value]
 * => When we will iterate, we will do it on the basis of key.
 * => Now if you want to access its corresponsing value - objectName [key].
 *
 * Example -
 *
 *    for(const key in laptopDetails) {
 *      write some logic
 *    }
 */


/**
 * 
 *    for(const key in laptopDetails) {
 *      write some logic
 *    }
 * 
 * Meaning of this is : 
 * => Find "key = ram" in laptopDetails, and once found, do the printing
 * => console.log(key, laptopDetails[key]);
 *                  |           |
 *                  V           V
 *                  Key        Value
*/

function Laptop(ram, processor, screenSize) {
  this.ram = ram;
  this.processor = processor;
  this.screenSize = screenSize;
}

/**
 * Using "new" keyword because that is how we call a constructor:
*/
let laptopDetails = new Laptop(16, "i7", 14)

/**
 * Printing => key : value pair of collection of data
*/
for (const key in laptopDetails) {
  console.log(`${key} has a value : ${laptopDetails[key]}`);
}



/**
 * Q. How to get only key from object?
 * => Object.keys() : It returns an array of objects' keys.
*/

const studentKeys = {
  name : "abc",
  rno : 10,
  phno : 987
}

/**
* Print only the keys:
*/
Object.keys(student).forEach((key) => console.log(`key is ${key}`));
console.log(Object.keys(student));



/**
 * Q. How to get only value from object?
 * => Object.value() : It returns an array of objects' values.
*/

Object.keys(student).forEach((values) => console.log(`values is ${values}`));
console.log(Object.values(student));



/**
 * Q. How to get both of the key:value together?
 * => Object.entry() : It returns an array of objects' entries.
*/

/**
 * a. Deconstruct using forEach() method:
*/
console.log(Object.entries(student));
Object.entries(student).forEach((entry) => 
{
    const [key, value] = entry; // deconstructing object
    console.log(`key is ${key} and value is ${value}`)
});

/**
 * => This one is called deconstructing of Object means earlier we have object
 *    in this form - 
 * 
 *      [
 *          [ 'name', 'abc' ],
 *          [ 'rno', 10 ],
 *          [ 'isDayScholar', true ],
 *          [ 'subject', [ 'maths', 'english', 'hindi' ] ]
 *      ]
*/

/**
 * Q. If we want to break it down, how are we going to do this?
 * => Earlier we have object in the above form, if we want to break it down
 *    we can do it with the help of this : 
 *       const [key, value] = entry;
 * 
 * => So, whatever entry it is getting with the help of this :
 *       const [key, value] = entry;
 * 
 * => We know in forEach first it will get the entry, after getting this entry
 *    we are deconstructing/separating our object with this:
 *       const [key, value] = entry;
 * 
 * => And this one going to take "key" and "value":
 *       entry = ['name', 'abc'];
 * 
 *          +--------------+
 *  const [key,value] = ['name', 'abc']
 *               +-----------------+
 *
 *  key = 'name'
 *  value = 'abc'
 * 
 * Note : If we have array then we use forEach() method.
*/

/**
 * b. Deconstruct using for-loop:
*/
for(const [key,value] of Object.entries(student))
{
    console.log(`key is ${key} and value is ${value}`);
}