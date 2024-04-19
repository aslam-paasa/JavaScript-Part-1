// keys(): Returns a new Array Iterator object that contains the keys for each index in the array.

const myObj = { a: 1, b: 2, c: 3 }
const keysArray = Object.keys(myObj);
console.log(keysArray); // Output: ["a", "b", "c"]




let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr[10] = 500;  
displayArray(arr);

arr["kuchbhi"] = 1000;  //bcoz every array can be used like an object also
displayArray(arr);
//becoz every array is an object
console.log(arr["kuchbhi"]);

console.log(Object.keys(arr));  //print index

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

/*
Output :
20,30,80,100,40 = 5
20,30,80,100,40,,,,,,500 = 11
20,30,80,100,40,,,,,,500 = 11
1000
[ '0', '1', '2', '3', '4', '10', 'kuchbhi' ]
*/