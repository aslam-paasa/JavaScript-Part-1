
// Internal JS Environment :

// +-----------------------------------------------+
// |                                               |
// |  +----------+                +----------+     |
// |  |          |   Prototype    |          |     |
// |  |          |--------------->|          |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +----------+     |
// |     Object                  nameless function |
// +-----------------------------------------------+

// Inside this "internal environment" there is a very important structure present
// which is technically a function known as "Object" (Capital "O"). And we can
// even access this "Object" function.

// If we write Object in browser we will technically get a fuction.
// f Object() { [native code] }
// Its an internal function that has been already created for us. So, this "Object"
// exist in internal environment which is already prepared for us by JavaScript.
// And this "Object" function internally has lots of functions to it.

// Apart from that, there is another entity in JavaScript. It is technically having
// no name but it's a very important JS object.

// There is property in this "Object" function that points to this nameless entity.
// This is called as "Prototype". So, if any point of time if we see "Object.prototype"
// getting called here then that means "Object" function is trying to access this
// "nameless entity" with the property "prototype". And inside this "nameless entity"
// there is lots of important things already written -
// (a) toString()
// (b) isPrototype()
// (c) valueOf()
// All of these functions are actually defined inside this "nameless function" 

// Apart from that, there is a property that point from this "nameless function"
// to this "Object function" known as "constructor".
// So, if we do "Object.prototype.constuctor" then we are going to point back to
// this corresponding "Object function".


// How and what happens when we actually create a function or object, what happens
// behind the scenes?
// Our environment where we are actually coding :

// +-----------------------------------------------+
// |                                               |
// |  +----------+                +----------+     |
// |  |          |   Prototype    |          |     |
// |  |          |--------------->|          |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +----------+     |
// | Product Function             another Object   |
// +-----------------------------------------------+

// Here we created a function Product and the moment we write this function,
// apart from this function we have created, one more entity gets created.
// So, the moment we write this Product function we get another object created in
// our environment which is again "unnamed and empty". And if we want to refer
// or get access to this unnamed object, we have to access it from our Product
// Function using a property called as "Prototype". And then there is another
// linking that from this "nameless object" to the "Original Product Function"
// which we again named as "Constructor".

// Apart from that when we create our own function/class like Product a new 
// unnamed Object gets created and if we want to access it from have to write :
// "Product.prototype". An from this unnamed Object also there is a linking back
// with a property called "Constructor".

// And there is a hidden relationship between these two "unnamed Object".

// +-----------------------------------------------+
// |                                               |
// |  +----------+                +----------+     |
// |  |          |   Prototype    |          |     |
// |  |          |--------------->|          |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +------^---+     |
// |     Object                  nameless|function |
// +-------------------------------------|---------+
//                                       | (hidden relatioship
//                                       |  between these "unnamed Object")
// +-------------------------------------|---------+
// |                                     |         |
// |  +----------+                +------V---+     |
// |  |          |   Prototype    |          |     |
// |  |          |--------------->|          |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +----------+     |
// | Product Function             another Object   |
// +-----------------------------------------------+

// When we write "Product.prototype.display".
// Product.prototype is our unnamed Object. So, on this unnamed Object we are
// technically adding a "key: display"  along with a function associated with it.
// "display: () {}"


// Do you remember what happens when an object is getting created?
// When we press the "new" keyword there are 4 steps that actually are executed :
// 1) The new keyword creates a brand new empty JS object.
// 2) It does a process of linking
// 3) Call the function with "this" property assigned to the empty object it 
//    created before.
// 4) The function execution starts

// We will talk about "Step-2" :
// When we hit "new", it creates a brand new empty JS object. And it does some
// kind of linking. So this brand new object gets linked to another object 
// which is "Product.prototype" and then rest of the things happen like we call
// the function with "this" property assigned to the empty object it created before
// abd the function execution starts.


// +-----------------------------------------------+
// |                                               |
// |  +----------+                +----------+     |
// |  |          |   Prototype    |          |     |
// |  |          |--------------->|          |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +------^---+     |
// |     Object                  nameless|function |
// +-------------------------------------|---------+
//                                       | (hidden relatioship
//                                       |  between these "unnamed Object")
// +-------------------------------------|---------+
// |                                     |         |
// |  +----------+                +------V---+     |
// |  |          |   Prototype    |          |     |
// |  |          |--------------->|          |     |
// |  |          |<---------------|          |     |
// |  +----------+   Constructor  +------^---+     |
// | Product Function             another|Object   |
// +-------------------------------------+---------+
//                                +------+---+
//                                |          |
//                                |          |
//                                |          |
//                                +----------+
//                                Empty object

// function Product(n) {
//     this.name = n;
// }
// When we say call "this" property on this "empty object" and when we actually
// execute it then what happens? "this.name = n;" -> So, we get a "name" property
// in the empty object with the value "n". So, this is the linked that we are
// talkin about.

// On this "empty object" we don't have this "display" property. This display
// property is on "Product.prototype". The linking in the step-2 actually
// happens when we create this "empty object", and before we actually fill in
// anything inside this empty object gets linked to this unnamed object i.e.
// Product.prototype.
// This unnamed object is linked to our Internal JS Environment's unnamed object.
// So, whenever we create our Product function, along with that a prototype is 
// automatically created. And when we create an empty object in the 2nd step, it
// links that empty object to Product.prototype and technically our linking of
// Product.prototype is internally linked with the Internal Object.prototype.
// Now after that the internal object is linked, this will call the calling
// context and we point "name" at it.

// function Product(n) {
//     this.name = n;
// }

// Product.prototype.display = function() {
//     console.log("name of the product is ", this.name);
// }

//  f () {console.log("name of the product is ", this.name");}

// let d = new Product("iphone");

// Q) Is this "display" method on this "Product.prototype is an empty object?
// No! And if we try to access "x.display()" which is not present on this display
// so JS will initiate the "prototype chaining". Due to this chaining, if we don't
// have a property in ourself, we try to take a look of that property in the 
// prototype that we are linking. So, this empty object "x" is linked to 
// "Product.prototype". Whether "x.display" is present in Product.prototype?
// Yes! We have attached it

// If we look for "toString" in empty object, if not present then we will check
// Product.prototype. Is it present there? No!, Then we will keep on going deep
// in the chain and at last we are going to find "toString" which is actually
// implemented inside Object.prototype. This is going deep inside the 
// prototypal chain, so whenever we are not able to find something as a property
// in the object, it tries to search for it in the Prototypal Chain during in
// the runtime.

// Note : This doesn' happen in class based structure. In class based structure
// when we actually create the object, it actually take a look at our class
// in that class we call the "super()" or "parent constructor", from the parent
// we give all of the properties to object to the child class. Later if we make
// any changes in the class or parent class, this object is not going to aware 
// about it. Whereas in JS, when we do "x.toString()" it will check whether
// "x" is having "toString" property or not? Then check whether "product.prototype"
// is having "toString" property or not? If not then it will check whether 
// "Object.prototype" is having a "toString" property or not. So, it is going to
// check deep into the chain about the property that we are actually looking for.