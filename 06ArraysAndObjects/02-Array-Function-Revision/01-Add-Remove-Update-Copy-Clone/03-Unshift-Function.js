// Adding Elements to an Array :
// (2) Using "unshift" method :
//  => The "unshift" method allows you to add one or more elements at the
//     beginning of an array and returns the new length of the array.


//unshift adds 1 or more values at the front of array
//unshift returns the new length of array
let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr.unshift(1000);
displayArray(arr);

arr.unshift(2000, 3000, 4000);
displayArray(arr);

let rv = arr.unshift(5000, 6000);
console.log(rv);   

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}


/*
Output :
20,30,80,100,40 = 5
1000,20,30,80,100,40 = 6
2000,3000,4000,1000,20,30,80,100,40 = 9
11
*/