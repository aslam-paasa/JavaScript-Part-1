// Removing Elements using "pop" function to an Array :
// => The "pop()" method removes the last element from an array and returns
//    the length of the array.


//pop removes 1 value from the end 
//pop returns the removed value
let arr = [20, 30, 80, 100, 40];
displayArray(arr);

let rv = arr.pop();  
console.log(arr);   //[ 20, 30, 80, 100 ]
console.log(rv);    //40

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}