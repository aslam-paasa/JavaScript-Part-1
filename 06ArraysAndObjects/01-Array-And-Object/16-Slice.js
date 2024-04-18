// Slice Method :
// If we have an array and we want to access a certain part of that array.


let person = {
    name: "Piyush",
    age: 25
};

let arr = ["apple", "banana", "cherry", person]

// Print first two element of this array :

// const newArr = arr.slice(startIndex, endIndex); 
// returns a section of an array

const newArr = arr.slice(0, 2); // 0 => inclusive, 2 => exclusive
console.log(newArr); // [ 'apple', 'banana' ]

const newArr02 = arr.slice(-1); // -1 => first element from the end of the array
console.log(newArr02); // [ { name: 'Piyush', age: 25 } ]


const newArr03 = arr.slice(-2); // -2 => last two element from the end of the array
console.log(newArr03); // [ 'cherry', { name: 'Piyush', age: 25 } ]

