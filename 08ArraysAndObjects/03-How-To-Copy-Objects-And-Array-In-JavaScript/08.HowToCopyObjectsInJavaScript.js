// How to modify the nested object?

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


// Mutate/Change the object
copiedObject = {...copiedObject,
    name: 'Alisha',
    address: {
        ...copiedObject.address,
        city: 'Goa'
    }
};

console.log(originalObject);
// {
//     name: 'John',
//     age: 20,
//     getName: [Function: getName],
//     address: { city: 'Delhi', country: 'India' }
//   }
console.log(copiedObject);
// {
//     name: 'Alisha',
//     age: 20,
//     getName: [Function: getName],
//     address: { city: 'Goa', country: 'India' }
//   }

// This time it is giving me complete Deep Copy