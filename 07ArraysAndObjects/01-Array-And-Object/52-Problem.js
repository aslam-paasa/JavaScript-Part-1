/* Problem 2 - JavaScript practice program to iterate the object and log 
   the object by framing the meaningful sentence

- Explanation :
  If is saying we create one object "Car" and Car should have properties like -
    a) Color - black
    b) Speed – 120Kmph
    c) Brand – Audi
    d) Start and stop as function
 - And it is saying in one case our output should be -
   "My car is Audi and color is Black"
 - And the second one is -
   "My car is BMW and color is Red"
 - So, we have to create two objects, one object is going to contain the 
   information of Car "Audi" and another object is having information of
   "BMW".
Note : Here we will learn to create set of objects in one variable.*/ 

const car = 
[
    // Object 1
    {
        color: "Red",
        speed: 100,
        brand: "Audi",
        start: function() { console.log(`${this.color} ${this.brand} started at a speed of ${this.speed}`)},
        stop: function() { console.log(`${this.color} ${this.brand} stopped`);}
    },
    // Object 2
    {
        color: "Black",
        speed: 150,
        brand: "BMW",
        start: function() { console.log(`${this.color} ${this.brand} started at a speed of ${this.speed}`)},
        stop: function() { console.log(`${this.color} ${this.brand} stopped`);}
    }    
    
]
// console.log(`My car is ${car.brand} and color is ${car.color}`); // This will not work
// console.log(Object.entries(car));
for(const [key, value] of Object.entries(car))
{
    console.log(`My car is ${value.brand} and color is ${value.color}`);
}

console.log( );
console.log("To print only audi details");
// to print only audi entry
for(const [key, value] of Object.entries(car))
{
    if(value.brand == "Audi")
    {
        console.log(`My car is ${value.brand} and color is ${value.color}`);
        value.start();
        value.stop();
    }
}

console.log();
console.log("To print all the details");
for(const value of Object.values(car))
{
    console.log(`My car is ${value.brand} and color is ${value.color}`);
    value.start();
    value.stop();
}

