// So, there are different methods available in JS to create a deep and shallow
// copy in JavaScript of our object.

// Approach-1 to copy objet :
// JSON.stringify() - used to copy objects (deep copy of non-primitive type)
let originalObject = {
    name: 'John',
    age: 20
}

let copiedObject = JSON.parse(JSON.stringify(originalObject));

console.log(originalObject); // { name: 'John', age: 20 }
console.log(copiedObject);   // { name: 'John', age: 20 }

// Mutate/change the value
copiedObject.name = 'Peter';

console.log(originalObject); // { name: 'John', age: 20 }
console.log(copiedObject);   // { name: 'Peter', age: 20 }


