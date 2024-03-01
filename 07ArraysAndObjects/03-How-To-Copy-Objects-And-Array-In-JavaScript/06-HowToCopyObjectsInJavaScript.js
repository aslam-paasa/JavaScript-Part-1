// Disadvantage of Object.assign() :
// Suppose our object has nested keys as well i.e. address and that address is holding
// a city, country etc. If we try to mutate our nested objects, at that time our
// object.assign() will not work.

// Object.assign() - Deep Copy
let originalObject = {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name;
    },
    address: {
        city: 'Delhi',
        country: 'India',
    }
}

let copiedObject = Object.assign({}, originalObject);

console.log(originalObject); 
// {
//     name: 'John',
//     age: 20,
//     getName: [Function: getName],
//     address: { city: 'Delhi', country: 'India' }
//   }

console.log(copiedObject);   
// {
//     name: 'John',
//     age: 20,
//     getName: [Function: getName],
//     address: { city: 'Delhi', country: 'India' }
//   }

copiedObject.name = "Peter";
copiedObject.address.city = "Pune";
// Nested Object are changing in the originalObject also which should not change
// So, Object.assign() method gives partial deep copy

console.log(originalObject); 
// {
//     name: 'John',
//     age: 20,
//     getName: [Function: getName],
//     address: { city: 'Pune', country: 'India' }
//   }
console.log(copiedObject);  
// {
//     name: 'John',
//     age: 20, 
//     getName: [Function: getName],
//     address: { city: 'Pune', country: 'India' }
//   }

