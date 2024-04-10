// Polyfill copyWithin :
// The Array.prototype.myCopyWithin method is a custom implementation of the
// built-in Array.copyWithin method in JavaScript. It allows for the efficient
// copying of elements within an array, providing flexibility in specifying
// the target, start, and end positions. 


// Understanding the code :
// Let's break down the code snippet provided to gain a clear understanding
// of how the Array.prototype.myCopyWithin method works :

Array.prototype.myCopyWithin = function (
    target = 0,
    start = 0,
    end = this.length
) {
    if (target < 0) {
        target = this.length + target;
    }

    if (start < 0) {
        start = this.length + start;
    }

    if (end < 0) {
        end = this.length + end;
    }

    for (let i = start; i < end && target < this.length; i++) {
        this[target] = this[i];
        target++;
    }

    return this;
};

// Understanding the logic :
// 1. The myCopyWithin method is added to the prototype of the Array object,
//    allowing it to be called on any array instance.
// 2. The method takes three optional parameters : taget, start and end.
// 3. If the target position is negative, it is adjusted by adding the array
//    length to it. This ensures that negative values are treated as offsets
//    from the end of the array.
// 4. If the start position is negative, it is also adjusted by adding the
//    array length to it.
// 5. If the end position is negative, it is adjusted similarly.
// 6. The method then enters a for-loop, starting from the start position
//    and continuing until either the end position or the end of the array
//    is reached.
// 7. Inside the loop, each element at the current position, "this[i]", is 
//    copied to the target position, "this[target]".
// 8. The target position is incremented by one after each copying operation.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.myCopyWithin(3, 0, 4);

console.log(arr); // Output: [1, 2, 3, 1, 2, 3, 7, 8, 9]

// In this example, we have an array "arr" containing the elements :
// [1, 2, 3, 4, 5, 6, 7, 8, 9]. We use the "myCopyWithin" method on "arr"
// with a target position of "3", a start position of "0", and an end position of "
// of "4".The elements from index "0 to 3" (exclusive) are copied to the target
// positions starting from index "3". The resulting modified array is
// [1,2,3,1,2,3,7,8,9], which is then logged to the console.