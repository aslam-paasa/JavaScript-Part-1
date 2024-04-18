/*
Q) Write a method to rearrange an array such that even positioned elements
are greater than odd positioned elements.
Example :
Input :
a = [1,3,2,2,5]
     0 1 2 3 4
n = a.length; 

Even indexes = 0,2,4 (1,2,5)

Output :
[1,5,2,3,2]

[1,2,3,4,5,6]
 0 1 2 3 4 5
 
 Even indexes : 0,2,4
 Odd indexes : 1,3,5
 
 i = even number
 A[i] >= A[i+1]
 If i = even, that means i+1 is odd.
     +------------------------------------------------+
arr =|      |      |      |      |      |      |      |
     +-----------------------------------------+------+
                       i-1    i     i+1 
    i -> Even
    i-1 and i+1 will be odd.
Eg : i = 4
     i-1 = 3 (odd)
     i+1 = 5 (odd)

A[i] >= A[i-1]

Eg : arr = [1,2,2,1]
            0 1 2 3
Even indexes = 0,2

arr = [1,2,2,3,5]
length = 5
lastIndex = 4
          = length - 1
right = length - 1 
left = 0

Easiest Way : After Sorting by using arr.sort()
                |
                V
            1,2,2,3,5   | l = 0, r = n-1 
    1. Check if index is even or odd
        -> even -> 
                    resultArr = arr[r-1];

We have to use :
(A) How we are going to get the array length?
(B) How we are going to sort the array?
(c) How we are going to use the push?
So, we are solving three functions in this.
*/ 
const arr = [1,3,2,2,5];
arr.sort();

let resultArr = [];
let n = arr.length;
let l=0, r=n-1 // l-> left most value in the array, r-> right most value in the array
for(let i = 0; i<arr.length; i++)
{
    // even values
    if(i%2==0)
    {
        resultArr.push(arr[r]);
        r--;
    }
    else 
    {
        resultArr.push(arr[l]);
        l++;
    }
}
console.log(resultArr); // [ 5, 1, 3, 2, 2 ]
