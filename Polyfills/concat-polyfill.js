// Polyfill Concat :
// The Array.prototype.myConcat method is a custom implementation of the
// built-in Array.concat method in JavaScript. It allows for the concatenation of
// of multiple arrays and/or values into a new array.


// Understanding myConcat() :
// Let's break down the code snippet provided to gain a clear understanding
// of how the Array.prototype.myConcat method works :

Array.prototype.myConcat = function () {
    let newArr = [];

    // Copy the elements of the original array into newArr
    for (let i = 0; i < this.length; i++) {
        newArr.push(this[i]);
    }

    // Iterate through the arguments passed to myConcat
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            // If an argument is an array, copy its elements into newArr
            const dummyArr = arguments[i];
            for (let i = 0; i < dummyArr.length; i++) {
                newArr.push(dummyArr[i]);
            }
        } else {
            // If an argument is not an array, directly push it into newArr
            newArr.push(arguments[i]);
        }
    }

    // Return the concatenated array
    return newArr;
};


// Understanding the logic :
// 1. The myConcat method is added to the prototype of the Array object,
//    allowing it to be called on any array instance.
// 2. The method starts by initializing an empty array, "newArr", which will
//    hold the concatenated elements.
// 3. It then copies all the elements from the original array onto "newArr"
//    using a simple for loop.
// 4. Next, it iterates over the "arguments" object, which represents the
//    arguments passed to the method.
// 5. For each argument, it checks if it is an array using the "Array.isArray"
//    method.
// 6. If the argument is an array, it creates a temporary array, "dummyArr",
//    and iterates over its elements, pushing them onto "newArr".
// 7. If the argument is not an array, it is directly pushed into "newArr".
// 8. Finally, the method returns the concatenated array, "newArr".


// Example Usage:
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const result = arr1.myConcat(arr2, 6, [7, 8]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// In this example, we have an array "arr1" containing the elements [1,2,3].
// We use the "myConcat" method on "arr1" and pass "arr2", the value "6",
// and another array [7,8] as arguments. The resulting concatenated array is
// [1,2,3,4,5,6,7,8], which is then logged to the console.