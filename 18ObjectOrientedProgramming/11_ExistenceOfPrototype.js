/*Existence of Prototype in JS :
   This forms the base of OOP in JS.
   By default, objects are created using constructor calls with the new keyword.
   Classes act as blueprints, and objects are instances of these classes.
   
   In traditional object-oriented programming languages like C++/Java, the class-based approach involves making copies.
   When an object is created based on a class, any changes made to the class afterward won't reflect in existing objects.
   This copy-based approach means that changes to the blueprint (class) do not affect the already-created objects.
   
   In languages like Java/C++, when an object is created from a class, it's like making a copy of the blueprint.
   Subsequent changes to the blueprint don't affect the already created object because they are structurally similar but separate.

   Consider the analogy of building flats from blueprints. Once a flat is constructed based on a blueprint,
   changes to the blueprint won't automatically alter the flat. To implement changes, you'd need to demolish and reconstruct the flat.

   In JavaScript, the concept of copying is not as prevalent. When an object is created using a constructor call, 
   the object is linked to its class, and there's no independent copy of the class's structure.
   
   The objects in JS are not created by copying blueprints; instead, they are dynamically linked to their classes.

   For example:
   class Product {
       // Properties
       // Behavior
   }

   const obj = new Product(); // The object 'obj' is dynamically linked to the 'Product' class.
   
   In JS, the link between objects and classes allows for more dynamic behavior, and changes to the class can be reflected in the objects.
    
   Q) What is prototypes?
 - In JavaScript, prototypes are mechanisms by which object can inherit properties
   from other objects. This is an important part of JavaScript's Object-Oriented
   Programming (OOP) functionality.   
 - When we create an object in JavaScript, it inherits properties from a prototype.
 - For example, if we create an object 'x' in the console:
   
     > let x;
     > x.a = 10;
     < 10
     > x.b = 20;
     < 20
     > x
     > V {a: 10, b: 20}
       a: 10
       b: 20
       [[Prototype]]: Object
   
   - Every object, by default, has a property named "Prototype."
   - If we expand the prototype, we'll see additional functions like "toString" and "valueOf."
   - These properties come from the built-in prototype property, and they provide common functionality to all objects.
   
   - Inside the prototype, there is a key-value pair, and if we explore further:
   
     > "_lookupSetter_: f _lootupSetter_()"
       _proto_: (...)
   
   - We can see "_proto_" (dunder proto), representing the [[Prototype]]: object to which our object 'x' is linked.
   - This creates a chain of prototypes, where each object's prototype is linked to another object's prototype.

   - In summary, objects in JavaScript are linked to a prototype object, which, in turn, may have its own prototype.
   - This chain of prototypes allows objects to inherit properties and methods from one another.
*/


/* Prototypes :
 - In JavaScript, prototypes are mechanisms by which object can inherit properties
   from other objects. This is an important part of JavaScript's Object-Oriented
   Programming (OOP) functionality.

 - To understand in easy language, think of prototypes in JavaScript like a
   blueprint or a guide. Every object in JavaScript has a link to its
   prototype object, where this prototype object has a prototype of its own,
   creating what we will a prototype chain.

 - When we try to access a property or method on a object, JavaScript will
   first look if that property or method is directly on the object. If not,
   it looks to the object's prototype(its blueprint), and then the 
   prototype's prototype, and so on up the chain until either finds what 
   it's looking for or reaches the end of the chain (which is usually the 
   base Object prototype).
   
 - Here's simple example : Let's imagine we have a car object : */
// let car = {
//   make: 'Toyota',
//   model: 'Camry'
// };

//  - We can create a prototype for our car that describes things all cars can do.
let car = {
  make: 'Toyota',
  model: 'Camry'
};

// In this example, "startEngine" is a method on our car's prototype. Now we
// can call this method on "car", even though we didn't define it directly
// on car :
console.log(car.startEngine()); // Outputs: 'Engine started'

// When we call "car.startEngine()", JavaScript first looks if "startEngine"
// is a method directly on "car". It's not, so JavaScript looks at car's
// prototype and finds "startEngine" there.

// So, prototypes are like a backup for objects. If an object can't do
// something, it looks to its prototype for help.




// In JavaScript, inheritance works a bit differently compared to C++ or Java.
// JavaScript inheritance is more widely known as "prototypical inheritance".

// Things become more difficult to understand when you also enounter "class"
// in JavaScript. The new "class" syntax looks similar to C++ or Java, but
// in reality, it works differently.


