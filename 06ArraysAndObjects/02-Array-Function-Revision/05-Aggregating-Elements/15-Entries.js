// entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const arr = ["a", "b", "c"];
const iterator = arr.entries();
console.log(iterator.next().value); // Output: [0, "a"]
console.log(iterator.next().value); // Output: [1, "b"]
console.log(iterator.next().value); // Output: [2, "c"]