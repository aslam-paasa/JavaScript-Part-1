// filter() function is used to filter the values inside an array.
const arr = [5, 1, 3 ,2 ,6];

// Suppose if we want to filter out all the values which are odd inside it or
// which is greater than 4 inside the value. So, it will result out to 6 and 5.
// Or maybe we can filter out all the even numbers inside array etc...
// So, we are taking this array as input and finding out an array which has only
// the values which are filtered based on some logic.


// filter odd values
function isOdd(x) {
    return x % 2;
}
const output = arr.filter(isOdd);

console.log(output); // [ 5, 1, 3 ]


// filter even values
function isEven(x) {
    return x % 2 == 0;
}
const output_2 = arr.filter(isEven);

console.log(output_2); // [ 2, 6 ]


// filter value greater than 4
const output_3 = arr.filter((x) => x > 4);

console.log(output_3); // [ 5, 6 ]


