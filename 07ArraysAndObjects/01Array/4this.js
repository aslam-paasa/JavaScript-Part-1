// 'this' is a method 
const person = {
    firstName : "abc",
    lastName : "xyz",

    fullName : function()
    {
        return `full name is ${this.firstName} ${this.lastName}`
    }
};

console.log(person.fullName());

// to access global object 
console.log(this);
