/* Bitwise Operators :
 - Let's say we have a number 5 so internally computer doesn't recognize this
   symbol of 5. Computer knows only binary(0 or 1 internally).
 - 5 -> 101
 - 7 -> 111
 - Bitwise Operators perform the corresponding operations bit-by-bit on the
   given operand.
   
& -> single ampersand -> Bitwise AND
| -> single pipe -> Bitwise OR
^ -> Bitwise XOR 
~ -> Bitwise NOT 

 - 5 && 7 (logical AND) -> First value is truthy so return the second value : 7
 - 5 & 7 (Bitwise AND) -> This Bitwise AND will not work on (5 & 7), instead it
   will actually work on Binary of 5 (101) and 7(111) and then bit-by-bit it will
   do the AND Operation.
   
   101   (a) 1 & 1 -> true i.e. 1
 & 111   (b) 0 & 1 -> false i.e. 0
 ------- (c) 1 & 1 -> true i.e. 1
   101 => 5
   
 - 6 & 9 :
  
   0110       (a) 0 & 1 -> 0
 & 1001       (b) 1 & 0 -> 0
 --------     (c) 1 & 0 -> 0
   0000 => 0  (d) 0 & 1 -> 0
   
 - 5 | 6
 
   0101       
 | 0110       
 --------     
   0111 => 7 
   
 - 8 | 4

   1000       
 | 0100       
 --------     
   1100 => 12 
   
*/ 