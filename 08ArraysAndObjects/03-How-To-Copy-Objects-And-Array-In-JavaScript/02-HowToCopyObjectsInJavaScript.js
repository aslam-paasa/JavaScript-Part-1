// Different method of copying one object into another and see how it will perform
// deep and shallow copy

// Primitive Type (Deep Copy by default)
let originalValue = 10;
let copiedValue = originalValue;

console.log(originalValue); // 10
console.log(copiedValue);   // 10

// Mutate/Change the value
copiedValue = 20;

console.log(originalValue); // 10
console.log(copiedValue);   // 20


// Non-Primitive Type (Shallow Copy by default)
let originalObject = {
    name: 'John',
    age: 20
}

let copiedObject = originalObject;

console.log(originalObject); // { name: 'John', age: 20 }
console.log(copiedObject);   // { name: 'John', age: 20 }

// Mutate/Change the value
copiedObject.name = 'Peter'; //

console.log(originalObject); // { name: 'Peter', age: 20 }
console.log(copiedObject);   // { name: 'Peter', age: 20 }

