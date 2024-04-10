// Polyfill for At :
// The Array.prototype.myAt() method is a custom implementation that allows
// developers to access array elements by their index, supporting both positive
// and nagative indices. 

// Understanding Array.prototype.myAt() :
// The Array.prototype.myAt() method is an extension of the built-in Array
// object in JavaScript. It provides a flexible way to access elements from
// an array using positive and negative indices. The method takes an index
// parameter and returns the element at that index.


// Implementation of Array.prototype.myAt() :

Array.prototype.myAt = function (index) {
    if (index >= 0) {
        return this[index];
    } else {
        return this[this.length + index];
    }
};


// Explanation :
// The implementation begins by defining a new method called "myAt" on the
// "Array.prototype". This allows all arrays in JavaScript to have access to
// this method.

// The method takes a single parameter, "index", which represents the index
// of the element to be accessed. If the index is non-negative (greater than
// or equal to 0), the method simply returns the element at that index using
// "this[index". However, if the index is negative, it calculates the correct
// index by adding the length of the array to the negative index (this.length + index).
// This allows negative indices to access elements from the end of the array.


// Let's see how "myAt" method be used :

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.myAt(2));    // Output: 'c'
console.log(arr.myAt(-1));   // Output: 'e'
console.log(arr.myAt(-3));   // Output: 'c'


// In the example above, we create an array "arr" with five elements. We then
// use the "myAt" method to access elements at various indices. In the first
// "console.log()" statement "arr.myAt(2)" returns the element at index 2,
// which is "c". The second "console.log()" statement uses a negative index
// of -1 to access the last element of the array, which is "e". Similarly, 
// the third "console.log()" statement uses a negative index of -3 to retrieve
// the element at the index equivalent to "arr.length - 3" which is again "c".