
// +-----------------------------------------------+
// |                                               |
// |  +----------+                +----------+     |
// |  |          |   Prototype    | toString |     |
// |  |          |--------------->| valueOf  |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +------^---+     |
// |     Object                  nameless|function |
// +-------------------------------------|---------+
//                                       | (hidden relatioship
//                                       |  between these "unnamed Object")
// +-------------------------------------|---------+
// |                                     |         |
// |  +----------+                +------+---+     |
// |  |          |   Prototype    | display()|     |
// |  |          |--------------->|          |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +------^---+     |
// | Product Function             another|Object   |
// +-------------------------------------+---------+
//                                       |
//                                       |
//                                   +--------+
//                                   |        |
//                                   |        | (empty object)
//                                   +--------+
//                                   "d" object


// Now we can say that our base prototype can actually point to some upper
// level prototype. 

// Howe about we can use it in our benefit and try to do inheritance using it?
// Let's say we have a class A & class B. 
   class A {}

//And if we want to do inheritance in
// JS, we can technically say :
class B extends A {}

// create object of B() :
b = new B();

// Now let's try to see the chaining of B :
b = new B();

// V B{}
//   V [[Prototype]]: A 
//     V constructor: class B
//       V [[Prototype]]: Object 
//         V constructor: class A
//           V [[Prototype]]: Object 

// => B is technically pointing to Prototype of "A". And then "A" is pointing 
//    to "Prototype: Object" 

// That's why if we have a class Category{} :
class Category {
    constructor(c) {
        this.categoryname = c;
    }
}

class Product extends Category {
    constructor(n, c) {
        super(c);
        this.name = n;
    }
}

// After passing super(c), now if we do :
p = new Product("iphone", "mobiles")
// Product {categoryname: "mobiles", name: "iphone"}


// > p
// V Product {categoryname: "mobiles", name: "iphone"}
//      categoryname: "mobiles"
//      name: "iphone"
//    > [[Prototype]]: Category

// Here, we can see "p" has a property called "categoryname". And how is it
// is coming from? Because we have called the "super()".

// super() refers to the same class that is mentioned by our prototype.



// Now here, what does "this" points to?
class Category {
    constructor(c) {
        this.categoryname = c;
    }
}

// Here, "this" points to the calling context i.e. "p". So, technically we are
// saying "p.categoryname = c. So we have a "categoryname" inside "P".

// V Product {categoryname: "mobiles", name: "iphone"}
//      categoryname: "mobiles"
//      name: "iphone"
// and then similar prototypal chaining stuff exist behing the scenes. 


// Note : Now we undertstood when we do class A extends B, it actually doing
// but creating some kind prototypal chain :
// Product Prototype --> Category Prototype --> Object Prototype


// We can do the same thing with functions also.
function A() {}

function B() {}

new A(); // => A() --> Object Prototype 
new B(); // => B() --> Object Prototype