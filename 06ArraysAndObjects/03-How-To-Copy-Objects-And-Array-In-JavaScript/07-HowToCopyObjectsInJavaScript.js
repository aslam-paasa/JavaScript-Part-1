// Approach-3 to copy objects : Spread Operator (ES6)

// Spread Operator (ES6)
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

// We can create new Object and spread out the original object with this 
let copiedObject = {...originalObject}

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


// Mutate/Change the Object
copiedObject.name = 'Alisha';
copiedObject.address.city = 'Goa';

console.log(originalObject);
// {
//     name: 'John',
//     age: 20,
//     getName: [Function: getName],
//     address: { city: 'Goa', country: 'India' }
//   }

console.log(copiedObject);
// {
//     name: 'Alisha',
//     age: 20,
//     getName: [Function: getName],
//     address: { city: 'Goa', country: 'India' }
//   }

// So, it's working the same way we have in the Object.assign() method.
// Partial Deep Copy

