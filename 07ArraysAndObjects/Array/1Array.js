// Sum of five value without using array
const num1 = 5;
const num2 = 1;
const num3 = 2;
const num4 = 3;
const num5 = 1;
// created 5 variables to store 4 values
let sum = num1+num2+num3+num4+num5;
console.log(`Sum is ${sum}`);


// Sum of five value using array
const num = [5, 1, 2, 3, 1];
console.log(`Value at index-4 is ${num[3]}`); // to access value at index 3
console.log(`Length of array is ${num.length}`); //range of index

// using for loop sum the values of array
for(let i = 0; i<num.length; i++){
    sum += num[i]; //sum = sum + num[i];
}
console.log(`Sum of 5 value is ${sum}`);

// print all values one after another
for(let i = 0; i < num.length; i++){
    console.log(`Value at index = ${i} is ${num[i]}`);
}



/*
nums.length = 5
nums.length = 5-1 => 4

Two ways to write the loop -
1) for (let i = 0; i < num.length; i++)
2) for (let i = 0; i <= num.length-1; i++)

*/

const boolArr = [true, false, true, false, true]
for(let i = 0; i <boolArr.length; i++){
    console.log(`Value at index = ${i} is ${boolArr[i]}`);
}


// 2 ways of initializing array -
// way-1 : initializing array
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