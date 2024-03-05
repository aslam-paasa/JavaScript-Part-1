function Product(n) {
    this.name = n;
}

Product.prototype.display = function() {
    console.log("name of the product is ", this.name);
}

// f () {console.log("name of the product is ", this.name");}

let d = new Product("iphone");

// If we do d.constructor(), do we have a constructor property?
// No!, So, it will go to "Product.prototype" and What is the constructor of
// Product.prototype pointing to? Back to Product function.
// So, if we do "d.constructor" we will get :
// f Product(n) {
//     this.name = n;
// }

// "d" doesn't have constructor so it is not able to find the inside the "d"
// object. So it goes to Product.prototype and on that Product.prototype it
// is finding the constructor which is technically pointing back to 
// Product function :

// V Product {name: 'jhbfv'}
//     V [[Prototype]]: Object
//         V display: f ()
//         V constructor: f Product(n)
//         V [[Prototype]]: Object

// This is the reason lots of people say that if we do "d = new Product();" 
// this Product class/function is responsible for object "d". But they are not
// responsible, this empty object "d" was created solely because of "new" keyword.
// "new" keyword creates empty object in the space which is technically not
// linked to any class or function. It just creates a random empty object, and
// after the creation of the object, that empty gets linked to "Product.prototype"
// so in creation of this object the Product Function has absolutely no role.
// Note : Evrything is same for array and all.

// arr = []
//  V []
//     length: 0
//     [[Prototype]]: Array(0)
//       [[Prototype]]: Object
//          _proto_: (...)
//                ......
//                ......