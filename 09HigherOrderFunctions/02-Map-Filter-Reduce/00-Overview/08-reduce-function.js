// reduce() function doesn't reduce anything
// reduce() function is used at a place where we have to take all the elements of
// an array and come up with a single value out of them.

const arr = [5, 1, 3, 2, 6];

// We can iterate and find :
// (a) sum of all the elements of array
// (b) largest and maximum number in this array
// etc...


// sum or max
function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr)); // 17


// sum or max using reduce()
// This function takes two parameters :
// (a) acc => accumulator
// (b) curr => current
// This function is iterating over each and every element of this array and
// when we are iterating this function, this "curr" i.e. 2nd parameter, represents
// the current values inside this reduce() function and the "acc" i.e. 1st parameter,
// used to accumulate the result what we have to get out of those values which
// are present in the array. 

// "acc" is acting like the "sum" variable and it is just accumulating all the values
// and the accumulator is appending the sum of the current value to itself.

// Q) How do we pass initial value to an accumulator?
// That is the 2nd argument.
// Reduce() takes 2nd argument i.e. initial value which we need to pass inside
// this accumulator. So, we will set the intial value as "0".

const output = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0); 

console.log(output);


// max value
function findMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr)); // 6


// max value using reduce()
const outputMax = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(outputMax);  // 6