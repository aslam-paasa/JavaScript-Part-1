/* Private Properties inside JavaScript :
 - Now there is a very interesting concept that actually exist with OOP.
   That concept is called as "Abstraction".
 - When we go to a bank we don't know internally how the bank works like
   where they put the cash, how the ATM are loaded with cash, when are 
   they loaded with cash, how much is bare minimum available in the bank,
   how they manage the bonds, how they manage the fixed deposits etc.
 - All we know is what the bank can offer us. Bank can offer us to create
   a bank account, create a fixed deposit, do some cash deposit & cash 
   withdrawn.
 - Bank can provide us the debit card using which we can withdraw money.
 - But how does these things internally works we don't know because all
   the information is abstracted/hidden. We only know how to use this.
 - Abstraction means "Hide the details that are not necessary for the 
   end user."

 - Now let's say, in some piece of code of our application this product
   class is getting used. 
   Product { name: 'bag', price: 100, description: 'cool new bag' }
 - In that piece of code, somebody by mistake did some changes like -
   p.name = -1;
 - Name become -1, now think about it. Can of the Product be -1?
   No!, so this is a problem. We are giving access of our internal code/
   property/entities to everyone and that can be problematic. This is why
   the concept of "Abstraction" came in picture. And we can actually
   hide the details of our class using something called as "Access Modifier"
  
Q) What is an Access Modifier?
 - Access Modifier maintains what is visible outside and what is not 
   visible outside. 
 - For example, "this.name", "this.price" property, all of these properties
   are visible inside class, we can make any changes inside the class but
   we are able to make changes outside the class because all of these 
   properties are visible outside of the class. These are public to the
   outer world. By changing the access modifier, we can hide the details.
 - Change the access modifier from "public" to "private". 

Q) How can we make it private in JS?
 - If we want to make it private property in JS for example, let's say
   "name". We have to first of all declare it here inside class and we
   need to prepend it with a "#" tag i.e. "#name". And wherever we are 
   using it in the class we have to use it with the "#" tag i.e. 
   this.#name. The moment we do it and try to print, we are not able to 
   see it -

   Product { price: 100, description: 'cool new bag' }

 - Even when we actually doing printing of the object, we are not even
   see the name.
 - Now let's try to update the name as p.name = -1;. If we do it and 
   run it then there is a new "name" property coming up -

    Product { price: 100, description: 'cool new bag', name: -1 }

 - If we do console.log(this); inside display() function and we do 
   p.display();, we are getting this new name property

   Product { price: 100, description: 'cool new bag', name: -1 }

 - But what if we print something like - 
   console.log(this.name, this.price, this.description); and if we run 
   the method : p.display();, we can see the #name is still "bag" -

    bag 100 cool new bag

 - Although we are getting a name as -1 here but internally this name is
   still "bag" -
   Product { price: 100, description: 'cool new bag', name: -1 }
   
Q) What is actually happening?
 - We have a property that is marked as "private" i.e. #name. 
 - Wherever we have private property that property is not visible outside,
 - Wherever we have to access it in our whole class, we access it like
   "this.#name". Now the objects that we create with classes are also
   normal JS objects and in a normal JS object, we can do something like
   this - obj.something = value;
 - So, when we do p.name = -1 then it is assigning a new name property,
   it is not updating the internal name property.
 - And if try "p.#name" then it will directly give us error that
   #name is not accessible outside the Product class because it is private
   identifier. So, when we do p.name = -1, our internal name is absolutely
   safe. No one is able to update it, its just kind of like adding a 
   property to an object but our name is not getting hampered.

Q) How the outer will understand what is the current name?
 - We can actually use -
   (a) getter
   (b) setter
 - Let's say I want to expose a functionality to the user that they can
   set some value to properties and they get some values to properties.
   So should we always make them public? No!, we can actually make getter
   & setter.
 - setName(n) and pass the "n" property. And let's say we can check, if
   type of "n" is not equal to 'String' then we actually return (the input
   that we are giving is not String then we will not set it). Otherwise,
   this.#name = n;

   setName(n) {
        if(typeof(n) != 'string') 
        {
            console.log('invalid name pass');
            return;
        }
        this.#name = n;
    }

 - Now we will use the setter method to set the value -
   p.setName(-1); and if we run it -
   "invalid name pass"
 - Whereas if we pass p.setName("iPhone"); and check the value -
   iPhone 100 cool new bag
 - The we can put logic & end user cannot do anything with our objects.
   For example, they cannot put price of the product as -1 if we make
   price as a private variable. 
 - Similarly we willdo the same for price & description and put logic/
   validation inside it.

 - And similarly like setPrice we can do something like "getPrice".
   This is called as "Getter" that return "this.#price";
 - So, whatever values we want be accessible outside, we will only write
   setters & getters for those. We will not write getters & setter for
   everything.

 - JS gives us getters & setters syntax like this :
    
    set setName(n) {
        if(typeof(n) != 'string') {
            console.log('invalid name pass');
            return;
        }
        this.#name = n;
    }

    get getName() {
        return this.#name;
    }

 - It still looks like a function. 
 - Now instead of calling this as a function, we can say - 
   p.setName = "iPhone";
   console.log(p.getName);
 - We don't need to access them like a function, we can access them like
   a property and give the property as "name" -
   p.name = "iPhone";
   console.log(p.name);

*/ 
class Product {
    #name;
    #price;
    // #description;

    constructor(n,p,d) {
        this.#name = n;
        this.#price = p;
        this.description = d;
    }

    set name(n) {
        if(typeof(n) != 'string') {
            console.log('invalid name pass');
            return;
        }
        this.#name = n;
    }

    setPrice(p) {
        if(p < 0 ) return;
        this.#price = p;
    }

    get name() {
        return this.#name;
    }

    display() {
        // print the product
        // console.log(this);
        console.log(this.#name, this.price, this.description);
    }
}

const p = new Product("bag", 100, "cool new bag");
console.log(p);
// p.name = -1;
// p.#name = -1;
// p.setName("iPhone");
// p.setName = "iPhone";
p.name = "iPhone";
console.log(p);
p.display();  // iPhone undefined cool new bag
// console.log(p.getName()); // we are getting the name // iPhone
// console.log(p.getName);
console.log(p.name);


/* Understanding the big picture -
 - If you are coming from the world of java/C++ then there are more access
   modifiers.
 - There is something called as "Protected"
 - OOP of JS is way different then OOP of Java/C++*/ 