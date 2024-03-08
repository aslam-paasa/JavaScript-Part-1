/* [Interview Question] Sort array of 0's and 1's
 -> In one array, we have 0 and 1 values like this -
    [0,0,1,1,1,0,1,0,0]
 -> If we are going to sort them, we will get -
    [0,0,0,0,0,1,1,1,1]
    
Approach : Start from left to right then we are counting from left to right
we just have to maintain count of 0 and 1.
Count of 0 = 1   Count of 1 = 0
Count of 0 = 2   Count of 1 = 0
Count of 0 = 2   Count of 1 = 1
Count of 0 = 2   Count of 1 = 2
Count of 0 = 2   Count of 1 = 3
Count of 0 = 3   Count of 1 = 3
Count of 0 = 3   Count of 1 = 4
Count of 0 = 4   Count of 1 = 4
Count of 0 = 5   Count of 1 = 4
=> Total count is 5 0's and 4 1's. 
Note : When the question is sorting directly then it is advisable not to
use the in-built sorting. Interviewer want us to think in a different
direction.
 */ 

const arr1 = [0,0,0,1,1,0,0,1,1,0]
let count0 = 0; count1 = 0;
for(let i=0; i<arr1.length; i++) 
{
    if(arr1[i] == 0)
    {
        count0++;
    }
    else if(arr1[i] == 1)
    {
        count1++;
    }
}

console.log(count0); // 6
console.log(count1); // 4
