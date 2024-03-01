/* HashMap :

Q) What is the meaning of HashMap?
 - Have you ever seen a dictionary :
   +------------------------------------+
   | Apple                              |
   | Arm                                |
   |                                    |
   |                                    |
   |                                    |
   |                                    |
   |                                    |
   |                          PageNo-10 |
   +------------------------------------+
 - One Page can have multiple works, so even when we were doing in objects 
   key & value pairs. And we have learned at that time that value can be
   repeated but a key cannot. Key has to be unique. 
 - Same concept lies even with the hashmap (dictionary)

Q) Javascript Code remove the duplicate element in the array :
Input: const arr = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
Output: [ 'a', 'b', 'c', 'd' ]

Q) JavaScript practice program to get the number of times the particular 
   letter is occurring in the given string -
 
 Input: OCCURRENCE
 Output:
    O occurring 1 times
    C occurring 3 times
    U occurring 1 times
    R occurring 2 times
    E occurring 2 times
    N occurring 1 times

-> We have different ways of doing it but today we will learn with the 
   hashmap method but in the upcoming classes we will learn with different
   ways.

-> OCCURRENCE : How many times #O is coming here? 1 time!
                How many times #C is coming here? 3 times!
                How many times #U is coming here? 1 times!
                How many times #R is coming here? 2 times!
                How many times #E is coming here? 2 times!
                How many times #N is coming here? 1 times!

Q) How we are actually going to do the counting?
-> We are checking if it is available.
-> If it is available we are adding it here but if it is already available
   then we are increasing the count value (eg: #C -> 1 -> 2 -> 3)

-> Hash Map -> Basically 3 things we are doing in hashmap -
Initially it is going to be empty. We have all these letters
1. We going to say check if a letter is already available or not.
2. If it is not available then add it.
3. If hashmap has the letter then update the count.

Example : arr = [1,2,1,2,3,1,4,3,2]
           |
           V
    Count all the values - means how many times a value is occurring

-> If we want to count it we have to go from left to right. At starting
   that our hashmap is empty but when we add/insert first value i.e. 1, 
   and then we will insert a count because '1' is occurring for 1 time.
               Value  Count
   Hashmap (1) : 1      1
   Then we will move to next value, here 2 is occurring for 1 time -
               Value  Count
   Hashmap (2) : 2      1
   Then again we will insert the next value i.e. 1, and here hashmap will
   check do we already have value '1'. Answer is Yes!, So we will update
   the count - 
               Value  Count
   Hashmap (1) : 1      2
   Because in the array we have 2 '1' etc...... 
               Value  Count
   Hashmap (1) : 1      3
   Hashmap (2) : 2      3
   Hashmap (3) : 3      2
   Hashmap (4) : 4      1
 */ 

   const numsArr = [1,2,3,2,1,1,6,3,2,4,1,2,3,5]
   let numsHashMap = new Map(); // creating new instance of classs Map
   
   for(let i = 0; i < numsArr.length; i++)
   {
       if(numsHashMap.has(numsArr[i])) // check if numsHashMap has value numsArr[i] or not
       {
           let count = numsHashMap.get(numsArr[i]); // this will return occurrence count of numsArr[i]
           count++;
           numsHashMap.set(numsArr[i], count); // this will set the updated value in the hash map
       }
       else
       {
           numsHashMap.set(numsArr[i], 1); 
           // adding value to hashmap and we are taking 1 because for the first
           // time, count of the number occurrences is going to be 1
       }
   }
   
   // Way 1 to print using for-loop
   // key-> number, count -> count of occurrences of number 
   for(const [key, count] of numsHashMap)
   {
       console.log(`Number : ${key} is occurring ${count} times`);
   }
   
   // Way 2 to print using console.table
   console.table(numsHashMap);
   
   // OCCURENCE
   // const str = "OCCURENCE";
   // console.log(str);   // return the entire string
   // If we want to get all the characters one after another, we have 2 ways :
   // (a) Convert this from string to character array
   // (b) to access all the elements one after another using  charAt
   
   // for(let i = 0; i < str.length; i++)
   // {
   //     console.log(str.charAt(i));
   // }
   
   // Once we have all the characters one after the another, it is easy to just use the previous code :
   
   // charAt returns you the character at index
   const str = "OCCURENCE";
   let strHashMap = new Map(); // creating new instance of classs Map
   let ch;
   
   for(let i = 0; i < str.length; i++)
   {
       ch = str.charAt(i)
       if(strHashMap.has(ch)) // check if strHashMap has value ch or not
       {
           let count = strHashMap.get(ch); // this will return occurrence count of ch
           count++;
           strHashMap.set(ch, count); // this will set the updated value in the hash map
       }
       else
       {
           strHashMap.set(ch, 1); 
           // adding value to hashmap and we are taking 1 because for the first
           // time, count of the number occurrences is going to be 1
       }
   }
   
   // key-> number, count -> count of occurrences of number 
   for(const [char, count] of strHashMap)
   {
       console.log(`Character : ${char} is occurring ${count} times`);
   }
   
   console.table(strHashMap);
   