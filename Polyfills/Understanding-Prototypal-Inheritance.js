// Unleashing the Power of Prototypal Inheritance :

// In JavaScript, prototypal inheritance plays a crucial role in the language's
// object-oriented nature. It offers a dynamic and flexible approach to 
// building and extending objects. This article aims to provide a comprehensive
// understanding of prototypal inheritance, highlighting its essene, inner 
// owrkings, benefits, and practical use cases.



// Understanding Inheritance :
// (1) Inheritance is a fundamental concept in programming that allows objects
//     to inherit properties and behaviors from other objects.
// (2) It promotes code reuse, modularity, and the organization of related
//     entities.

// The Essence of Prototypal Inheritance :
// (1) Prototypal Inheritance is a dynamic mechanism in JavaScript, where
//     objects inherit the properties and method from other objects.
// (2) Every object in JavaScript has an internal link to another object
//     called its prototype, which serves as a blueprint for shared properties
//     and behaviors.

// Prototypes: The Blueprint of Object :
// (1) Prototypes are regular JavaScript objects themselves acting as a
//     reference for properties and methods that an object can access.
// (2) When an object attempts to access a property or method, JavaScript 
//     looks up the prototype chain to find it.

// Creating Objects with Prototypes :
// (1) JavaScript provides multiple ways to create objects with specific 
//     prototypes, including object literals, constructor functions, and
//     the "Object.create()" method.
// (2) Object literals allow direct specification of properties and methods
//     for an object.
// (3) Constructor functions create objects using the "new" keyword and
//     assign properties and method within the constructor.
// (4) The "Object.create()" method allows the creation of objects with a
//     specified prototype.

// Using Object.create() to establish prototypal inheritance
const parent = {
    name: "John",
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const child = Object.create(parent);
child.name = "Jane";
child.sayHello(); // Output: Hello, my name is Jane


// The Prototype Chain : Inheriting Properties and Methods :
// (1) The prototype chain enables objects to access properties and methods
//     from their prototype, their prototype's prototype, and so on.
// (2) JavaScript traverses the prototype chain until it finds the desired
//     property or method.

// Here's an example illustrating the prototype chain and how objects inherit
// properties and methods:

// Parent object
const parent1 = {
    name: "John",
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// child1 object inheriting from the parent1
const child1 = Object.create(parent1);
child1.name = "Jane";

// Accessing inherited method
child1.sayHello(); // Output: Hello, my name is Jane

// Adding a new method to the parent1 object
parent1.sayGoodbye = function () {
    console.log(`Goodbye from ${this.name}`);
};

// Accessing the newly added method through the child1 object
child1.sayGoodbye(); // Output: Goodbye from Jane


// In the above example, the "parents" object has a "name" property and
// a "sayHello" method. The "child1" object is created using "Object.create()"
// with the "parent1" object as its prototype. As a result, the "child1"
// object inherit the "name" property and the "sayHello" method from its
// prototype.

// By accessing the "sayHello" method on the "child1" object, it correctly
// displays the name as "Jane". Additionally, we extend the "parents" object
// by adding a new "sayGoodbye" method. As the "child1" object inheirts
// from the "parent1" object, it can also access and invoke the newly added
// "sayGoodbye" method.



// Shadowing and Extending Prototypes :
// 1. Shadowing occurs when an object has a property with the same name as
//    one in its prototype.
// 2. Extending prototypes involves adding new properties or methods to an
//    existing prototype, allowing all objects derived from it to access the
//    new additions.

// Here's an example showcasing shadowing and extending prototypes :
// Parent object
const parent2 = {
    name: "John",
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Child2 object inheriting from the parent2
const child2 = Object.create(parent2);
child2.name = "Jane";

// Shadowing property
child2.name = "Janet";

// Shadowing method
child2.sayHello = function () {
    console.log(`Hey, I am ${this.name}`);
};

// Accessing shadowed property
console.log(child2.name); // Output: Janet

// Accessing shadowed method
child2.sayHello(); // Output: Hey, I am Janet

// Adding a new method to the parent2 object
parent2.sayGoodbye = function () {
    console.log(`Goodbye from ${this.name}`);
};

// Accessing the newly added method through the child2 object
child2.sayGoodbye(); // Output: Goodbye from Janet


// In this example, we have a "parent2" object with a "name" property and
// a "sayHello" method. The "child2" object is created as before, inheriting
// these properties and methods.

// However, in this case, we demonstrate shadowing by assigning a new value
// to the "name" property of the "child2" object, effectively hiding the 
// inherited value. The "child2" object now has its own "name" property with
// the value "Janet".

// Similarly, we shadow the "sayHello" method by reassigning it in the "child2"
// object. The new implementation logs a different message compared to the
// original method in the "parent2" object.

// When accessing "child2.name" or invoking "child2.sayHello(), the shadowed
// versions specific to the "child2" object are used.

// Additionally, we extend the "parent2" object by adding a new "sayGoodbye"
// method. As the "child2" object inherits from the "parent2" object, it can
// access and invoke the newly added "sayGoodbye" method.

// This demonstrates how shadowing can override inherited properties and 
// methods, and how extending prototypes allows all objects derived from the
// same prototype to access the new additions.



// Benefits of Prototypal Inheritance :
// 1. Code Reuse : Prototypal inheritance promotes sharing properties and 
//    behaviors among objects, reducing redundancy and enhancing code
//    modularity.
// 2. Dynamic nature : Objects are dynamically inheirt from other subjects,
//    enabling runtime modifications and flexibility in object structure.


// Practical Use Cases :
// 1. Frameworks and libraries : Prototypal inheritance is widely used in JS
//    frameworks and libraries to build modular and extensible codebases.
// 2. Object Composition : Prototypal inheritance facilities object composition,
//    where objects are constructed by combining properties and behaviors from
//    multiple prototypes.


// Conclusion :
// Prototypal inheritance is a powerful concept in JavaScript that empowers
// developers to build scalable and reusable code. By understanding how objects
// inherit properties and behaviors through prototypes and leveraging the
// prototype chain, you can create flexible and modular code structures. Embrace
// the dynamic nature of prototypal inheritance in JavaScript to unlock the 
// full potential of object-oriented programming in your projects.