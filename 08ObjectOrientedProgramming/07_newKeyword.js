/* Understand "new" keyword :
 - Whenever there is a class/blueprint that we have created and with that
   blueprint we want to actually initialize a brand new "instance" that's
   where we use the "new" keyword.
 - So, the sole purpose of "new" keyword is to one simple thing - 
   "create brand new plain empty JavaScript object".
 - const p = new Product();
 - There are multiple things actually happening here -
   (a) "new" keyword : Create brand new plain JS object
 - (b) Product() : When we actually write name of the class and actually 
       put a pair of paranthesis, this syntax is calling something called
       as Constructor of the class.
       
Q) What is Constructor?
 - Whenever we create an object of a class, Constructor is the first
   function that actually gets called.
 - When we are creating object we want to initialize some properties of
   the object with some corresponsing values or wants to set up some
   connection. Whatever we want to do which should happen when we are 
   creating a new object, all of that logic we put inside a Constructor.
   So, Constructor is a special method 
 - If we don't write a constructor ourself then JS takes the default
   Constructor by-default. So, whenever we put class name with a pair
   of paranthesis i.e. Product(), it actually calls the default 
   constructor all together.
 - That's why if do do console.log(p), there is not error at all and
   it is calling the default constructor (No logic inside it). So, all
   the properties that we have we can see we are getting assigned as
   undefined -
   
   Product { name: undefined, price: undefined, description: undefined }

 - But now let's see we want to initialize a constructor, so new keyword
   is creating brand new plain empty object and then we are actually
   calling the constructor.
 - We can create a constructor() {..} like this. If we go to the world
   of C++/Java then generally constructors are written with the same
   name as that of the className but that's not the case with JS.
 - In JS, Constructor are written as the word "constructor".
 - Now the "new" keyword created a brand new plain empty object and then
   calling the constructor i.e. "Product()". So, this Product() constructor
   is getting called with respect to this brand new plain empty object.
   So, the "Calling Context" is the brand new plain empty object that we
   have created. And if the brand new plain empty object that we created
   is the Calling Context then if we use the "this" keyword inside 
   "constructor()" then what is "this" going to point to? "this" keyword
   is actually going to point to the same brand new plain empty object "p" -

    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
    }
 - And in the plain empty object we are manually creating the key-value
   pair where the "key" is "name" and the "value" is whatever we pass
   inside the Product() constructor i.e. "Bag".
 - And once we have actually assigned values like this inside the 
   constructor() we don't need to mention these values in the class -

    // name;
    // price;
    // description;

 - If we comment it out, still it will work , and we see the key-value pair -
   
   Product { name: 'Bag', price: 100, description: 'a cool bag' }

 - But now we might be thinking constructor() is a method/function and
   in a function generally we return something but here we are not 
   returning anything. But what if we start returning something from here?
 - Let's say start returning something like 10. What will happen here?
   Actually the moment we return 10, nothing will happen & same answer 
   will come.
 - Let's try for string of "10" -> nothing will happen.
 - So, inside a constructor if we use the return keyword with a primitive
   then there is no effect & it is technically going to avoid it -

   constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        // return 10;
        return "10"; // primitive -> no effect
    }

Q) Why it is techincally going to avoid it?
 - Because constructor() is meant to do something with an object, it's
   meant to return an object. If we return a primitive then the sole 
   purpose of sole purpose of constructor() gone.
 - Whereas instead of return 10 if we return a plain object then this
   will return a plain object because constructor are meant to return
   an object -

   constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        // return 10;
        // return "10"; // primitive -> no effect
        // return {};   // {}
        // return {x: 10}; // { x: 10 }
    }

 - And if we don't return anything, it is equivalent to say "return this";

    Product { name: 'Bag', price: 100, description: 'a cool bag' }

 - And this is how the "new" keyword, "constructor()" keyword and "this"
   are tied within themselves.

Q) Can we do "constructor overloading"?
 - Overloading of a function means that we will be having the same function
   name but the signature will be different.
 - For example, the parameter will be different, no of parameters will be
   different, return type will be different.
 - In languages like Java/C++, there is a concept called "constructor
   overloading" where we can maintain multiple constructors with
   multiple arguments (return type will be same). But can we do that in JS?

   constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        // return 10;
        // return "10"; // primitive -> no effect
        // return {};   // return {}
        // return {x: 10}; // { x: 10 }
        // return this; // if you don't return anything, it is equivalent to say "return this"
    }

    // constructor overloading
    // constructor() {
            // SyntaxError: A class may only have one constructor
    // }

 - No! SyntaxError: A class may only have one constructor, this is the
   limitation in JS and that is why never compare the OOPs of JS with
   Java/C++.


   */ 

class Product {
    // name;
    // price;
    // description;

    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        // return 10;
        // return "10"; // primitive -> no effect
        // return {};   // return {}
        // return {x: 10}; // { x: 10 }
        // return this; // if you don't return anything, it is equivalent to say "return this"
    }

    // constructor overloading
    // constructor() {
            // SyntaxError: A class may only have one constructor
    // }

    display() {
        //print the product
    }
}

const p = new Product("Bag", 100, "a cool bag");
console.log(p);