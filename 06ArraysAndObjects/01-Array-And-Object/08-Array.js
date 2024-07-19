/*Common Operations performed on Arrays :
1. Looping through Array :
=> There are many ways to loop over the Array. The most common ways of
   looping through arrays in JavaScript are :
   
   (a) For Loop :
   Example : 

      // Creating an Array
      const cities = ['Mumbai', 'Delhi', 'Kolkata', 'Lucknow', 'Chennai'];

      // Using loop to iterate over array
      for (let i = 0; i < cities.length; i++)
      // Printing array elements using index
      console.log (cities [i]);
      
      // Mumbai
      // Delhi
      // Kolkata
      // Lucknow
      // Chennai
/*   

What are Multi-Dimensional Array?
1. A Multi-Dimensional Array can be described as an array that consists
   of two or more than two-dimensional array.
2. The arrays we've discussed so far are known as one-dimensional arrays.
   In JavaScript, however, multi-dimensional arrays can also be declared.
3. A multi-dimensional array is also termed as Array of arrays.
4. To build a two-dimensional array, wrap each Array in its own pair of
   "[]" square brackets.
5. In other words, each element of a multi-dimensional is an array in and
   of itself.
   
Tw-Dimensional Array :
        ----+           +----
        |    1   2   3      |
 (rows) |    4   5   6      |
        |    7   8   9      |
        ----+           +----
             ( Columns )

To initialize 2D Array :-
-> const arr = [[R1],[R2],[R3]] 
             = [[1,2,3], [4,5,6], [7,8,9]];

Note : "arr.length" will tell "total no. of rows"
Note : To find the column we have to enter inside particular or each row -
       arr[0].length will tell "total no. of column".*/

// 2-d array
const arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Find rows & columns
console.log(`total number of rows = ${arr4.length}`); // total number of rows
console.log(`total number of columns = ${arr4[0].length}`); // total number of cols present in row 0

// First loop is going to be there for "row"
// And Second loop is going to be there for "column".

// To access value at index i in 1 D array ---> arr[i]
let output;
for (let i = 0; i < arr4.length; i++) // rows
{
   output = ""; // reset the output
   for (let j = 0; j < arr4[0].length; j++) {
      output += (arr4[i][j]) + " "; // Print all the values as given in matrix
      // console.log(arr4[i][j]); // print at row = i and col = j
   }
   console.log(output);
}

console.log("print array using table");
console.table(arr4); // this will print your array in the form of table
