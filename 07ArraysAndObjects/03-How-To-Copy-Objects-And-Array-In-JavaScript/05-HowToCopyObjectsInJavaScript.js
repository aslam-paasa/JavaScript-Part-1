// Object.assign() : Most commonly used method to copy objects

// Approach 2 to copy object : Object.assign() - Deep Copy
let originalObject = {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name;
    }
}

// Take two arguments - 
// (a) reference of our object - destination
// (b) objectName - originalObject - target
let copiedObject = Object.assign({}, originalObject);

console.log(originalObject); // { name: 'John', age: 20, getName: [Function: getName] }
console.log(copiedObject);   // { name: 'John', age: 20, getName: [Function: getName] }

copiedObject.name = "Peter";

console.log(originalObject); // { name: 'John', age: 20, getName: [Function: getName] }
console.log(copiedObject);   // { name: 'Peter', age: 20, getName: [Function: getName] }

// Note : But here we also have one issue that Object.assign() doesn't give us complete
// deep copy. It provide a partial deep copy in JS.

