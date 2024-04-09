// How we can access from this "d" object to "Product.prototype"?


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
// |  +----------+                +------V---+     |
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


// We can say "d.__proto__"

// Q) What it is going to point to?
// => Product.prototype

// Q) What we will get if we do "d.__proto__.__proto__"?
// => We will get " value of all the properties" like "toString" etc.

// Q) Where are all these properties present/mentioned?
// => Our "Object.prototype"
//    So, if we want to get access to our prototypal chai we have to do :
//    "__proto__" and in short form it is called "dunder proto". 


// Q) If we do "d.display()", is display property present inside the object "d"?
// => No!, it will go into the "prototypal chain". It will check "is it present
//    inside Product.prototype()?" Yes!

// And if we do "d.__proto__ === Product.prototype", then the answer is "true"
// because they both are same.


// Note : Always remember this diagram.