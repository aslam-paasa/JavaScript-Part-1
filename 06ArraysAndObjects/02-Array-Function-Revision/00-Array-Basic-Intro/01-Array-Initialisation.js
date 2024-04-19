// 2 ways of initializing array -
// way-1 : initializing array using array literals
const arr = [1,2,3]; //this uses array literals
console.log("first array");
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
// way-2 : initializing array
//new keyword will create new instance of array class
const arr1 = new Array(4, 5, 6); //using array class
console.log("second array");
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

//representing 2-D Array
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //3 rows, 3 column
console.log(`total nums of row = ${arr2.length}`);
console.log(`total nums of column = ${arr2[0].length}`);

// creating extra row
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 1, 1]];
// total no of row 
console.log(`total nums of row = ${arr3.length}`);
// total no of cols present in row 0
console.log(`total nums of column = ${arr3[0].length}`);

// to access value at index i in 1 D Array --->  arr3[i]; 
// first loop is 'row' and 2nd loop is for 'cols'
for(let i = 0; i < arr3.length; i++){
    for(let j = 0; j < arr3[0].length; j++){
        console.log(arr3[i][j]); //print at row=i and col=j
    }
}

// (1)create one empty string 
let output;
// to print the array value
for(let i = 0; i < arr3.length; i++){
    output = ""; //reset the output
    for(let j = 0; j < arr3[0].length; j++){
        // (2) add the values to this variable
        output += arr3[i][j] + " "
        // console.log(arr3[i][j]); //print at row=i and col=j
    }
    //print the variable
    console.log(output);
}
console.log("print array using table");
console.table(arr3); //this will print your array in the form of table