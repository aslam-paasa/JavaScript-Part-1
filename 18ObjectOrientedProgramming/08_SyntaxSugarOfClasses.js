/* Understanding the syntax sugar of classes :
 - There can a question that could come to our mind is : We have commented
   out the class properties but still when we are doing "this.name = n;"
   it is getting assigned.
   
Q) Why even after commenting everything works?
 - It can work in JS*/ 

class Product {
    // name;
    // price;
    // description;

    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        // return 10;
        // return "10"; // primitive -> no effect
        // return {};   // return {}
        // return {x: 10}; // { x: 10 }
        // return this; // if you don't return anything, it is equivalent to say "return this"
    }

    display() {
        //print the product
    }
}

const p = new Product("Bag", 100, "a cool bag");
console.log(p);