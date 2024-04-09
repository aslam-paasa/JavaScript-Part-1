// Disadvantage of using this approach -
// When we have function in our object

let originalObject = {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name;
    }
}

// Now our object is also holding a function
// So, when have a function type in our object then at that time JSON.stringify()
// will not copy the object accurately.

let copiedObject = JSON.parse(JSON.stringify(originalObject));

console.log(originalObject); // { name: 'John', age: 20, getName: [Function: getName] }
console.log(copiedObject);   // { name: 'John', age: 20 }

// Mutate/change the value
copiedObject.name = 'Peter';

console.log(originalObject); // { name: 'John', age: 20, getName: [Function: getName] }
console.log(copiedObject);   // { name: 'Peter', age: 20 }


// JSON.stringify() not able to copy the function() from the original object.
// So, we can use JSON.stringify() to create deep copy when object don't have
// any function()

