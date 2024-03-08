// Hw 
// Problem : Write a code to rotate the array in clock-wise direction in one position.
// Problem : Write a code to rotate the array in clock-wise direction by k position.

const arr12 = [1,2,3,4,5,6];
let k = 2;

if(k > arr12.length)
{
    // update k
    k = k % arr12.length;
}

let resultArr1 = [];

// values on left
for(let i = k; i <arr12.length; i++)
{
    resultArr1.push(arr12[i]);
}

// values on right
for(let i = 0; i <k; i++)
{
    resultArr1.push(arr12[i]);
}

console.log(resultArr1);
