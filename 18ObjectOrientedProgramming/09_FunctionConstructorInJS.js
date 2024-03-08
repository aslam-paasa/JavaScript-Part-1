/* Function Constructors :
 - Now we have seen that what actually happens when we do the "new"
   keyword on classes.
 - When we have a function Product and this function takes 3 arguments
   and inside the function argument we do the -

   function Product(n,p,d) {
        this.name = n;
        this.price = p;
        this.description = d;
    }
    and let's say we don't return anything.
 - When we say const p = new Product("bag, 100, "cool new bag"); and we 
   do console.log(p) then what happens?

    Product { name: 'bag', price: 100, description: 'cool new bag' }

 - We get the same result as in class Product. And this type of syntax is
   called Function Constructor.
 - A normal function in JS can be used as normal function, function
   expression and even like function constructors. 
 - So classes were not everytime present in JavaScript, they came extemely
   late. After a long period of time classes came into picture. If we
   see old code base we can see functions to actually mimic the blue-
   printing behavior. That means classes are just a wrapper over functions.

Q) What if we call the function without "new" keyword?
 - const p = Product("bag", 100, "cool new bag");
 - If we call the function without "new" keyword we are getting undefined functions
   because we are not using the "new" keyword, so it's not more a 
   function constructor.
 - Second thing, it doesn't throw an error because here "this" is going to
   be resolved in a Lexical Scoping fashion. And there is a global "this"
   in NodeJS. So, in that global this we are assigning all of the values 
   but because it is not a function constructor, it checks are you 
   returning something. No! We are not returning something so it retuns
   undefined. So, if now if we do "return this", it is going to return
   the whole global object and inside that object we have assigned -
    (a) name
    (b) price
    (c) description
 - That's why we always say "this" points to the Calling Context. Because
   now the calling context is "global this object"
 - And when we use "new", it creates brand new plain empty object so it
   becomes the calling context of the plain new empty object.
   
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 80.08940005302429,
      nodeStart: 4.967200040817261,
      v8Start: 10.282999992370605,
      bootstrapComplete: 56.48740005493164,
      environment: 28.379500031471252,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1703772944599.594
  },
  fetch: [AsyncFunction: fetch],
  name: 'bag',
  price: 100,
  description: 'cool new bag'
}
*/ 
function Product(n,p,d) {
    this.name = n;
    this.price = p;
    this.description = d;
    return this;
}

// const p = new Product("bag", 100, "cool new bag");
const p = Product("bag", 100, "cool new bag");
console.log(p);