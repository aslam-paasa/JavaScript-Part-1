/* Sort Function :
 - Sort means arranging in one order and the order can be either ascending
   or descending.*/ 

   const num17 = [5,1,3,2];
   num17.sort();
   console.log(num17); // [ 1, 2, 3, 5 ]
   
   const num18 = [5,1,3,11,2];
   num18.sort();
   console.log(num18); // [ 1, 11, 2, 3, 5 ] -> known as Lexicographical Order
   // Reason : By default sort function takes all function as string.
   // Since, 1 and 11 both starts with 1, so they both will come before 2.
   
   /* Example :
      arr = [1,3,2,11,21,10,33]
      
      arr.sort();
       |
       V
      1,10,11,2,21,3,33
      +------+----+----+
          |     |   V
          |     V  All values starting with '3'
          V  All values starting with '2'
       All values starting with '1'
       
    - If you sort all the values in this order then we call it as
      'Lexicographical Ordering'.
      
    - To sort numbers - 
      arr.sort((a,b) => a-b)
                 |
                 V
               Sort values in ascending order
               
      arr.sort((a,b) => b-a)
                 |
                 V
               Sort values in descending order
   */ 
   
   // Sort in ascending order
   num18.sort((a,b) => a-b);
   console.log(num18);
   
   // Sort in descending order
   num18.sort((a,b) => b-a);
   console.log(num18);
   