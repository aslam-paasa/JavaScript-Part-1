/*Problem-1: Remove Duplicate Values from an Array
Given array: [1, 2, 1, 3, 2, 1]
Output: [1, 2, 3]

HW : First Approach - Do it through HashMap

Approach 1: Using HashMap
- Initialize an empty HashMap (JavaScript object).
- Iterate through the array elements.
- Check if the HashMap already has the current element as a key.
    - If yes, do nothing (skip the duplicate).
    - If no, add the element to the HashMap.
- The keys of the HashMap will represent unique values.

Hint : if(arrHashMap.has(nums[i])) -> This means value already existing
       {
            // do not do anything
       }
       else
       {
            // Add values to arrHashMap
       }

2nd Approach : Using indexOf
-> Let's say we have an array - 
arr = [1,2,3,1,2,1]
console.log(arr.indexOf(3));
console.log(arr.indexOf(2)); // 2 is available at index 1, this returns the first index of the value

// In this array if we want to add new thing -
arr.push(5); // this adds a value to the array at the end
console.log(arr);

-> Now for the 2nd approach, 
1. we will create one "result" array
2. Check if this result array contains arr[i] means value of index i.
3. If result array contains the value then do not add.
4. If result array do not contain the value then add.

-> Here we are checking index of those values which are available in an 
   array. What if I am trying to get a value, lets say -
   console.log(arr.indexOf(10));
-> We know in our array we don't have a value 10, so if we do it is going
   to give us -1. So, here when we are writing down if the value is 
   already there, how we can checking it? Against '-1' because if a value
   is not available, it is going to give -1.
*/ 

const arr5 = [1,2,3,1,2,1]
console.log(`Index of value 3 is ${arr5.indexOf(3)}`);
console.log(`Index of value 2 is ${arr5.indexOf(2)}`);
// 2 is available at index 1, this returns the first index of the value

// In this arr5ay if we want to add new thing -
arr5.push(5); // this adds a value to the array at the end
console.log(arr5);

console.log(`Index of value 10 is ${arr5.indexOf(10)}`);
// returns -1 if the value not available in array 

// Example of indexOf
const arr6 = [9, 10, 3, 1, 4]

for(let i=0; i < arr6.length; i++)
{
    console.log(`Value ${arr6[i]} is available at index ${arr6.indexOf(arr6[i])}`);
}

/*Now we are going to use this concept to solve our problem*/ 
const arr7 = [1,2,3,1,2,1];
let resultArr = []; // new array created which is empty

for(let i = 0; i < arr7.length; i++)
{
    if(resultArr.indexOf(arr7[i]) == -1) // if a value arr[i] is not there in the resultArray then index will be -1
    {
        resultArr.push(arr7[i]);    // add value to the resultArr
    }
}
console.log(resultArr);
