// Create a custom splice() polyfill, tailor array operations, and conquer
// core concepts.

// The splice() method is JavaScript is a powerful tool for modifying arrays
// by adding or removing elements. While JavaScript provides a native "splice()"
// method, there might be situations where you need to create a custom polyfill
// for it. In this comprehensive guide, we'll explore how to implement your
// version of the "splice()" method, understand its inner workings, and create
// a custom polyfill.



// Why creating a Custom "splice()" Polyfill?
// Before dividing into implementation, let's understand why you might want
// to create a custom splice() polyfill:

// 1. Learning Purposes :
// => Implementing a polyfill helps you gain a deeper understanding of how 
//    JavaScript's native method work. It's an excellent exercise for honing
//    your skills.

// 2. Custom Behavior :
// => You may require custom behavior that isn't achievable with the built-in
//    "splice()" method. Creating your version allows you to tailor it to
//    your specific needs.

// 3. Compatibility :
// => In some environments (e.g. Older Browsers), native methods might not
//    be available. Creating a polyfill ensures consistent behavior across
//    different platforms.



// Understanding splice() :
// The splice() method allows you to change the contents of an array by
// removing or replacing existing elements and/or adding new elements.

// Syntax : 
// array.splice(start, deleteCount, item1, item2, ...);
// => start: The index at which to start changing the array.
// => deleteCount: An integer indicating the number of elements to remove.
// => item1, item2, ... : The elements to add the array, starting the "start" index.


// Here's an example of using the splice():
const fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(2, 1, "grape"); // Removes "cherry" and adds "grape"
console.log(fruits); // Output: ["apple", "banana", "grape", "date"]



// Implementing the Custom "splice()" Polyfill :
// Now, let's create a custom "splice()" polyfill. We'll start with basic
// version and gradually enhance it.

Array.prototype.customSplice = function (start, deleteCount) {
    const arrCopy = [...this]; // Clone the original array
    const deletedItems = [];
    // Handle negative start values
    if (start < 0) {
        start = Math.max(arrCopy.length + start, 0);
    }
    // Handle deleteCount greater than remaining elements
    deleteCount = Math.min(
        deleteCount,
        arrCopy.length - start
    );
    // Remove items from arrCopy and store them in deletedItems
    for (let i = 0; i < deleteCount; i++) {
        const index = start + i;
        const item = arrCopy[index];
        deletedItems.push(item);
        arrCopy[index] = undefined; // Mark as deleted
    }
    // Create a new array without the deleted items
    const newArray = [];
    for (const item of arrCopy) {
        if (item !== undefined) {
            newArray.push(item);
        }
    }
    // Replace items starting from start index
    for (let i = 2; i < arguments.length; i++) {
        newArray.splice(start + i - 2, 0, arguments[i]);
    }
    // Modify the original array
    this.length = newArray.length;
    for (let i = 0; i < newArray.length; i++) {
        this[i] = newArray[i];
    }
    return deletedItems;
};


// A deep dive into the Custom "splice()" Polyfill :
// Now let's break down the custom "splice()" polyfill step by step :

// 1. Cloning the Original Array :
      const arrCopy = [...this];
// We will begin by creating a copy the original array to ensure that we
// don't modify it directly. This copy, arrCopy, will be our working array.

// 2. Handling Negative "start" values :
      if (start < 0) {
          start = Math.max(arrCopy.length + start, 0);
      }
// If the "start" index is negative, we convert it to a positive index by
// adding it to the length of the array. This allows us to work with
// negative indices as they behave in JavaScript.

// 3. Handling "deleteCount" greater than remaining elements :
      deleteCount = Math.min(
         deleteCount,
         arrCopy.length - start
      );
// We wnsure that "deleteCount" doesn't exceed the number of elements from
// the "start" index to the end of the array. This prevents errors and ensures
// that we only remove the elements that exist in the array.

// 4. Removing Items and Storing Them :
      for (let i = 0; i < deleteCount; i++) {
          const index = start + i;
          const item = arrCopy[index];
          deletedItems.push(item);
          arrCopy[index] = undefined; // Mark as deleted
       }
// We iterate through the elements to be deleted, store them in "deletedItems"
// array, and mark the corresponding positions in "arrCopy" as undefined.

// 5. Creating a New Array without Deleted Items :
      const newArray = [];
      for (const item of arrCopy) {
        if (item !== undefined) {
          newArray.push(item);
        }
      }
// We create a new array, "newArray", without the deleted items. This array
// will be our modified array.

// 6. Replacing Items Starting from the "start" index :
      for (let i = 2; i < arguments.length; i++) {
          newArray.splice(start + i - 2, 0, arguments[i]);
      }
// We replace items in "newArray" starting from the "start" index with the
// provided items. The "splice()" method handles the insertion seamlessly.

// 7. Modifying the Original Array :
      this.length = newArray.length;
      for (let i = 0; i < newArray.length; i++) {
        this[i] = newArray[i];
      }
// Finally, we modify the original array(this) by updating its "length"
// property and copying the elements from "newArray". This ensures that the
// original array reflects the changes made.



// Using the Custom "splice()" Polyfill :
// With out custom splice() polyfill in place, we can now use it just like
// the native method:

// const fruits = ["apple", "banana", "cherry", "date"];
// const deleted = fruits.customSplice(2, 1, "grape");
// console.log(fruits); // Output: ["apple", "banana", "grape", "date"]
// console.log(deleted); // Output: ["cherry"]