/*Arrange it like all 0's are coming first then comes the 1's
for that create one resultArray
When we are going to create a resultArray : 
resultArray = 0 to count0, push value 0;

+------------------------+
| 0 | 0 | 0 | ...... |   |
+------------------------+

for(i = 0; i < count0; i++)
{
    //push 0;
}

for(i = count0; i <count0+count1; i++)
{
    //push 1;
}

We are doing count0+count1 because if we have 5 0's and 4 1's.
Total length = 5+4 = 9 (by adding count0 + count1)
+------------------------+
| 0 | 0 | 0 | ...... | 1 |
+------------------------+*/

let resultArray = [];
for(let i=0; i<count0; i++) 
{
    resultArray.push(0);
}

for(let i = count0; i<count0+count1; i++)
{
    resultArray.push(1);
}

console.log(resultArray);

// HW : Sort 0's, 1's and 2's -> [0,1,2,0,0,1,2,2,1,1]
// count0, count1, count2
// resultArray2 
