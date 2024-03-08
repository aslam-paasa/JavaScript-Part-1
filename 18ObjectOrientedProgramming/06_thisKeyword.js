/* How does "this" inside arrow function will be resolved?
 - Let's say we have a display function. Inside the display function
   we have another object and inside that object we have an arrow function
   and this arrow function is actually printing "this".
 - Now we just learned that inside an arrow function "this" doesn't refers
   to the calling site/context. But now if we do iphoneRed.print() inside 
   the display function, we can see it is printing iphone -
   
   {
        name: 'IPhone 15 pro',
        price: 150000,
        description: 'This is new apple iphone 15 pro.',
        rating: 4.8,
        display: [Function: display]
    }
   
Q) So, whats actually happening?
 - Inside an arrow function by default "this" actually resolved lexically
 - Through lexical scoping "this" is going to be resolved.
 - This "print" function doesn't know about "this". So it will go outside
   And this display() function actually have idea about "this" [because
   this display() function is normal function]. So display() has idea
   about "this" keyword that "this" actually pointing towards calling
   context i.e. iphone object. So, that's why "this" actually resolved
   itself to the iphone object and when we do it prints iphone object.
   
Note : If we also change the display() function to arrow function, it will
       not print anything. (referring to global object i.e. empty object)
*/ 

       const iphone = {
        name: "IPhone 15 pro",
        price: 150000,
        description: "This is new apple iphone 15 pro.",
        rating: 4.8,
        
            // display: () => {            //empty object
            display: function () {   // iphone object
    
                let iphoneRed = {
                    name: "Iphone Red",
                    price: 110000,
                    print: () => {
                        console.log(this);
                    }
                }
            iphoneRed.print();
        }
    }
    
    iphone.display();