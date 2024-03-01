// Mutable and Immutable :
// If the value can change, the object is called mutable, while if the value
// cannot change, the object is called immutable.

// How we know which is mutable and which is immutable?
// (a) Primitive Types : string, number, boolean, symbol, null, undefined
//     They are directly stored in the location variable axis.
//  -> Basically immutable

// (b) Non-primitive types/Reference Types : Array & Objects
//     Stored in variable location which is pointer to allocatin of the memory
//     where the object is stored
//  -> Immutable


// Primitive DataType :
let x = 20;
let y = x;

y = y+1;

// x & Y, both are sharing different memory location as they are Primitive Type 
console.log(x); // 20
console.log(y); // 21


// Non-Primitive DataType :
let a = ['value1', 'value2'];
let b = a;

// remove data
b.pop();

// Both are pointing at the same location
console.log(a);  // [ 'value1' ]
console.log(b);  // [ 'value1' ]


let c = {
    name: 'John',
    city: 'Delhi'
}

let d = c;
// Adding one more property
d.age = 20;

console.log(c); // { name: 'John', city: 'Delhi', age: 20 }
console.log(d); // { name: 'John', city: 'Delhi', age: 20 }