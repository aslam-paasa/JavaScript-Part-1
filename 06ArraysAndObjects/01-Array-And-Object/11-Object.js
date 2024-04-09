// Using "this" keyword we refer to an object -
//  1. We can use it in object method
//  2. Use it alone to refer global objects

// Example-1 : "this" in a method
const person = {
    firstName : "Mohammad",
    lastName : "Aslam",

    fullName : function()
    {
        return `Full Name is ${this.firstName} ${this.lastName}`
    }
};

console.log(person.fullName());

// To access global objects - console.log(this);
