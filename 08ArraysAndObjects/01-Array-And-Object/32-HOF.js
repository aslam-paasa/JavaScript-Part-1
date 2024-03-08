/*
HOF : Higher Order Array Functions are the functions that operate on 
      other functions, either by receiving them as argument or by 
      returning them.

 - It is a function that accepts a function as a parameter or returns
   a function as the output.
   
1. Map() : It is used to create a new array from the existing one, 
   applying a function to each one of them.
Eg - [1,2,3]
        | Add 10 to each
        V
O/p  [11,12,13]
    */

const num14 = [1,2,3,4]

// without using map
for(let i = 0; i < num14.length; i++)
{
    // take each value and add 10 to it
    num14[i] += 10; // num14[i] + 10
}

console.log(num14);

// using map
const updatedArray = num14.map(item => item + 10) 
// this takes all values from num14 array and add 10 to each

console.log(updatedArray);

/*
2. Filter : This takes each element in an array and it applies a conditional
   statement to it. If condition is true then the value gets added to the
   array.*/ 

const arr8 = [1,2,3,4,5,6,7];
// even values = 2,4,6
// odd values = 1,3,5,7

let evenResultArr = []; // initializing an array -> empty array
let oddResultArr = [];
// without filter
// to filter out only even values
for(let i=0; i<arr8.length; i++)
{
    if(arr8[i] % 2 == 0)    // even value
    {
        evenResultArr.push(arr8[i])
    }
}
console.log(evenResultArr);

// to filter out only odd values
for(let i=0; i<arr8.length; i++)
{
    if(arr8[i] % 2 == 1)    // odd value
    {
        oddResultArr.push(arr8[i])
    }
}
console.log(oddResultArr);

// with filter
evenResultArr = arr8.filter(item => item % 2 == 0)
oddResultArr = arr8.filter(item => item % 2 == 1);

console.log(evenResultArr);
console.log(oddResultArr);


/*
3. Reduce : It iterates through an array and returns a single array.
 - Map will take all the values and returns another array to us.
 - But reduce take all the values and at the end it returns "one" value.

Q) Difference between map and reduce?
 - Map will perform operations on all values and it will return an array.
 - Reduce will returns "one" value.
*/ 
const arr9 = [1,2,3,4,5,6,7];

// without reduce
let sum = 0;
for(let i = 0; i<arr9.length; i++)
{
    sum += arr9[i];
}

console.log(sum);

// with reduce
let totalSum = arr9.reduce((sum, item) => sum + item);
console.log(totalSum);

