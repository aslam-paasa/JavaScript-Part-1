function personInfo() {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "harsh",
    age: 8,
    about: personInfo
}

const person2 = {
    firstName: "mohit",
    age: 18,
    about: personInfo
}

const person3 = {
    firstName: "nitish",
    age: 17,
    about: personInfo
}

// person.about(); // ReferenceError: person is not defined

person1.about(); // Person name is harsh and age is 8
// about() ko person1 object call kr rha hai, aur iss object m se hum
// "firstName" and "age" extract kr lenge

person2.about(); // Person name is mohit and age is 18

person3.about(); // Person name is nitish and age is 17


// Note: Function ko jo call kr rha hai "this" usi ko refer krega.