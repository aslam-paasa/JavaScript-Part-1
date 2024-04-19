Slice : Returns a shallow copy of a portion of an array into a new array. [Clone]

// like substring
// start is inclusive, end is exclusive
// for cloning an array
let arr = [10, 20, 30, 40, 50, 60];
let na1 = arr.slice(1, 4);
displayArray(na1);  //from 1 to 3 (4 not included)

let na2 = arr.slice(1); //from 1 to end
displayArray(na2);

let na3 = arr.slice();  //the entire array (can be used for cloning)
displayArray(na3);

//use negative index
let na4 = arr.slice(-3, -1);    //from -3 to -2
displayArray(na4);

let na5 = arr.slice(-3); //from -3 to end
displayArray(na5);

let na6 = arr.slice(1, -2);
displayArray(na6);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}

/*
Negative-Positive index -
       -6  -5  -4  -3  -2  -1
arr = [10, 20, 30, 40, 50, 60]
       0    1  2   3   4   5  
       
*/