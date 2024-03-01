/* 
 - IPhone and Mackbook are 2 objects, they are clubbed inside an array
   and that array is clubbed inside another object "Product".
 - And inside these internal Objects, we are calling "this".
 - Now if we do "Products.arr[0].getCategory();" we will get -
    -> "undefined"

Q) Why we are getting undefined?
 - Because now who is calling getCategory();
 - getCategory() is getting called by arr[0] and inside arr[0] if we 
   mention "this" then "this" is referring to arr[0]. And if "this"
   refers to arr[0] then do we have category property inside object?
 - No!, That's why we are getting undefined.

 - Now let's get a function outside arr object - getProject
   and it will say "return this.arr". 
 - Call Products.getProduct() i.e. a function which returns an array and
   we have the 0th index and on that 0th index we will call
   getCategory(); and run it -

 */ 
// Example-2    
let Products = {
    arr: [
        {
            name: "IPhone",
            price: 150000,
            description: "This is new apple iphone 15 pro.",
            rating: 4.8,
            // getCategory: function print() {console.log(this.category);}
            getCategory: () => {console.log(this.category);}
        },
        {
            name: "Macbook M3",
            price: 250000,
            description: "This is new apple macbook M3.",
            rating: 4.9,
            getCategory: () => {console.log(this.category);}
        }
    ],
    category: "Electronis",
    getProducts: function() {return this.arr;}
}

// Products.arr[0].getCategory();
Products.getProducts()[0].getCategory();