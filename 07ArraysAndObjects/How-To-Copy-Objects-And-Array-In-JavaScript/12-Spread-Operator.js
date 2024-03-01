// Copying an array
// From Original Array we want to create a new array. So, I want to copy all the
// elements of array to another array.

console.log('copying array');
// Original Array
const productList1 = ['phone', 'adapter'];
// Copy Array
const newProduct = productList1;
// Copy using Spread
const cloneProduct = [...productList1];

console.log(productList1);  // [ 'phone', 'adapter' ]
console.log(newProduct);    // [ 'phone', 'adapter' ]

// newProduct.push('Camera');

// console.log(productList1);  // [ 'phone', 'adapter', 'Camera' ]
// console.log(newProduct);    // [ 'phone', 'adapter', 'Camera' ]
// Original Array is also altered

cloneProduct.push('Camera');
console.log(productList1);    // [ 'phone', 'adapter' ]
console.log(cloneProduct);    // [ 'phone', 'adapter', 'Camera' ]
// Only the cloneProduct is altered
// When we use Spread Operator we make sure that the Original Array is not affected
// whenever we alter the new array