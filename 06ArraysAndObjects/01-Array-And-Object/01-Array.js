/* 
Q) What do you mean by Data Structure?
 - We know that we are going to have lots of data
 - And Structure means how are we going to store it.

Q) What is an Array?
 - A array can be described as a group or collection of items (numbers)
   stored inside memory in a logical order. The main function of Array is
   to store a collection of homogenous data of the same type.
 - In an array, all items are kept in a single memmory region.
 - All arrays are allocated dynamically; it provides a variable-size list
   data structure, allowing elements to be removed or added in an array.
 - An array is a data structure where we save comparable objects.
 - An array is index-based, with the first element, or the first element
   in the Array, stored at the 0th index, the second element at the 1st
   index, the third element at the 2nd index, and so on.
 - An array can be used to store primitive values or objects in JavaScript.
 - We can create both single-dimensional and multi-dimensional arrays.

Array : Real-life example => Index in a Book 
+-----------------------+
| Index         Page No.|
|   1.            1     |
|   2.            12    |
|   3.            50    |
+-----------------------+

The following is the representation of an array :
arr = +---------------------------+
      | 11 | 12 | 20 | 2 | 5 | 30 |
      +---------------------------+
         0    1    2   3   4   5
value at position 3 = 2
value at position 5 = 30

If you want to calculate the total number of arr -
 - Total no. of elements in array = arr.length (returns total no. of elements in array)
                                  = 6
So, if we have 6 elements then index range is going to be 0-5.

Creating an Array = 
 - let nums = [5,6,7,1]
 - Index Range = 0 to 3

Advantage of Arrays :-
1. In one variable we can store more than one value.
 - Example : const num1 = 5;    |
             const num2 = 6;    |
             const num3 = 7;    | const arr = [5,6,7,1]
             const num4 = 1;    |

2. In arrays, the elements can be accessed in any order by using the
   index number.

   arr = +---------------------------+
      | 11 | 12 | 20 | 2 | 5 | 30 |
      +---------------------------+
         0    1    2   3   4   5
             
2. Arrays are stored in contiguous manner. Means it is going to store 
   continuously. Hence, there is not possibility of additional memory
   being allocated in the case of arrays. This saves memory spillage
   or overflow of memory and helps to regulate memory usage in any
   database.

   +---------------------------------------------+
   | num1 | ... | num2 | num3 | ... | num4 | ... |
   +---------------------------------------------+
   (Not necessary the values will be stored on after the another)
   
   +---------------------------------------------+
   |      | arr |
   +---------------------------------------------+
             |
             V
         [5,6,7,1]
(But inside arr variable everything is stored at once place. So, contiguous manner)

3. Arrays are homogeneous (same type) in nature. Means the stored values
   are going to be -
        (a) Entirely num type - [5,10,3,9]
        (b) Entirely String type - ["Mohammad, "Aslam"]
        (c) Entirely boolean type - [true, false, true, false]
 
    -> To access any value based upon index -> arr[indexNo.]
       
4. With the use of arrays, other data structures like stacks, queues,
   trees, linked lists, graphs, etc., can be implemented.

Disadvantages of arrays :
1. Size limit : In the Array, we can only store elements of a fixed size.
   It does not expand in size during use.
2. In JavaScript, a collection framework is employed to handle this problem,
   which grows automatically.
*/