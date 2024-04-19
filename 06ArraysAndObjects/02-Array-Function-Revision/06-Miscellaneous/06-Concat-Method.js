// Concat Method : Merges two or more arrays and returns a new array.

const nums01 =  [1, 2, 3];
const nums02 = [4, 5, 6, 7];

// If we want to join both of these two array :

const newArr = nums01.concat(nums02);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7]




// Practice Question -1
let arr = [20, 30, 12, 17, 9, 18, 43, 64, 11, 47];
let odd = [];
let even = [];

let i = 0;
while (arr.length > 0) {
    let val = arr.shift();
    if (val % 2 == 0) {
        even.push(val);
    } else {
        odd.push(val);
    }
}

arr = even.concat(odd);
displayArray(arr);
displayArray(odd);
displayArray(even);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}

/*

Q) Rearrange array so that all even elements are at fron and all odd elements are at back?
Note : Functions allowed -> push, pop, shift, unshift

Output :
20,30,12,18,64,17,9,43,11,47 = 10
17,9,43,11,47 = 5
20,30,12,18,64 = 5
*/