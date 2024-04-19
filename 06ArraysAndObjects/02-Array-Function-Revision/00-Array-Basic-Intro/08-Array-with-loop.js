// Two ways to write the loop -
// 1) for (let i = 0; i < num.length; i++)
// 2) for (let i = 0; i <= num.length-1; i++)

// For example :
// nums.length = 5
// nums.length = 5-1 => 4



// Example-1 :
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




// Example-2 :
const boolArr = [true, false, true, false, true]
for(let i = 0; i <boolArr.length; i++){
    console.log(`Value at index = ${i} is ${boolArr[i]}`);
}



