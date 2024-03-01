/* Do you know "this" keyword?
 - In order to complete the syntax of the class and understand most of the
   nuasances, we need to actually understand. 
 - The first one we need to understand is "this" keyword -
   "except one case, "this" always refers to the calling site/context."
 - Actually in JS, "this" refers to the call site except one case.
 
Q) What is Call Site?
 - Let's say there is an object called "IPhone". 
 - Objects in JS can actually help us to represent complex entities.
   So, product is a complex entity like "IPhone". And we actually
   represent this entity "IPhone" like this as an object but if we are
   making a E-Commerce and we have one million products then we can't
   make one million objects. In that case blue-printing of products makes
   more sense.
   
 - We will write function display and we will say console.log(this).
  This is a normal object.
 - Again we can write console.log(iphone) outside function.
 
 - Now let's make one more object - "macbook" 
 - And console.log(iphone, macbook) outside the function 
 - And then every object we have a display function that is actually
   printing "this"
   
 - If we do iphone.display();
   If we have an object and if we want to call a function of that object
   or we want to access the property of that object, we can use the
   dot(.) operator.
 - What dot(.) operator does is, Iphone is the object and on that object
   whatever property or function we refer to is referrable using dot(.).
 - So, if we do iphone.name, if will give the "name of the iphone" and
   if we do iphone.display(), if will give display function of the iphone.
 - Now when we run it, if we do iphone.display(), it will says :

   first display {
        name: 'IPhone 15 pro',
        price: 150000,
        description: 'This is new apple iphone 15 pro.',
        rating: 4.8,
        display: [Function: display]
   }
   
 - iphone.display() first print "first display" and then "this".
   And, here "this" is the object that we have called it from. So,
   actually this "iphone" is the callsite/calling context that we are
   calling display() in the context of iphone. That's why "this" is 
   actually referring to the calling context -
   
        name: 'IPhone 15 pro',
        price: 150000,
        description: 'This is new apple iphone 15 pro.',
        rating: 4.8,
        display: [Function: display]

 - If we change iphone.display() to macbook.display(), it will change
   its context because now the calling site/context or the object through
   which we are calling is now the macbook.

   second display {
        name: 'Macbook Air 3',
        price: 250000,
        description: 'This is new apple macbook air 3.',
        rating: 4.9,
        display: [Function: display]
    }

 - So, "this" keyword actually refers to the calling context means from
   what context or reference are calling the "this" keyword makes the
   difference.

 - If we do console.log(this) - Here we are not having any object but still
   if we run it, "this" refers to some object and that object is 
   "window" object. So, except this case, "this" always refers to the 
   calling context.

 - If we change iphone display function to arrow function and print both
   macbook.display() and iphone.display(), this will print only - 
   
   second display {
        name: 'Macbook M3',
        price: 250000,
        description: 'This is new apple macbook M3.',
        rating: 4.9,
        display: [Function: display]
    }
    first display {}

 - When we do macbook.display(), it is printing the whole object and
   when we are doing iphone.display() it is not printing iphone object.
   So, there are lot of new things happens with "this". That's why 
   people keep it segregated 
 - If we just call console.log(this), it actually takes the calling
   context as "global" object. And the one case that we are talking
   about "except one case this refers to calling context" is this
   "arrow function".
 - Arrow function. "this" does not refer to the calling context.

Q) How will this be resolved?
   */ 

let iphone = {
    name: "IPhone 15 pro",
    price: 150000,
    description: "This is new apple iphone 15 pro.",
    rating: 4.8,

    // display() {
    //     console.log("first display", this);
    // }
    display: () => {console.log("first display", this);}
}

let macbook = {
    name: "Macbook M3",
    price: 250000,
    description: "This is new apple macbook M3.",
    rating: 4.9,

    display() {
        console.log("second display", this);
    }
}

macbook.display();
iphone.display();
// console.log(iphone, macbook);
// console.log(this);
