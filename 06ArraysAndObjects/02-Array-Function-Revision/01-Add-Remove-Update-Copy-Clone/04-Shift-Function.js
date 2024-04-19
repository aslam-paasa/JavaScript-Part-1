// Removing Elements using "shift" function to an Array :
// => The "shift" method simply does the opposite of the "pop()" method by
//    removing the first element from an array and returns the new length 
//    of the array.

//shift removes 1 value from the front 
//shift returns the removed value
let arr = [20, 30, 80, 100, 40];
displayArray(arr);

let rv = arr.shift();  
displayArray(arr);   
console.log(rv);    

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

/*
Output :
20,30,80,100,40 = 5
30,80,100,40 = 4
20
*/