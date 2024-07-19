/**
 * Unary Operator :
 * => A type of an operator which requires only one operand.
 * => For example, a++, ++a, a--, --a
 * 
 *    let a = 10;
 *    a++;
 * 
 *    let a = 10;
 *    let y = a++;
 *  
 *    let a = 9;
 *    let y = ++a;
 * 
 * Q. What is this situation? What is these operators all about?
 * => a++ : Postfix Unary Addition : Increment after assignment
 * => If any point of time we see "y = a++", this a++ refers to "increment by 1 unit"
 * => If we do a++ or ++a, in both of the situation this "++" is referring to "increment by 1 unit". 
 * 
 * Q. What is the difference between "a++" and "++a"?
 *  
 *   let a = 10;
 *    y = a++;
 * 
 * => After doing both of the situation i.e. "a++" and "++a", final value of "a" will
 *    become "11". BUt there is a very fundamental difference.
 * => Post means "after", so if we write "y = a++" then y will get old value of "a"
 *    and once we have assigned the value of "a" to "y" after that we are going to
 *    increment the value of "a".
 * 
 * Step-1: We first assign value of a to y (i.e. old value = 10)
 * Step-2: Increment a by +1 (i.e. new value = 11)
 *      
 *         console.log(a,y); // 11 10
 *         a++; // we are not assigning
 *         console.log(a,y); // 12 10
 * 
 */ 


/** 
 * Prefix Unary Increment :
 * => Prefix is just opposite of postfix
 * 
 *    let a = 10;
 *    y = ++a;
 * 
 * => Because it is a prefix operator, we will not assign first, this time we will
 *    increment the value of "a" first and then assign the value of "a" to "y". 
 * 
 *    Step-1 : We first increment the value of "a" by +1
 *    Step-2 : Assign the value of "a" to "y"
 *
 *             let a = 10; 
 *             let y = ++a;
 *             console.log(a,y); // 11, 11
 *
 *             ++a;
 *             console.log(a,y); // 12, 11
*/


/**
 * Unary Decrement Operator :
 * => Now the same thing exist with "--" also.
 * => If we have "a--" or "--a".
 * => "a--" means first assign the value of "a" to the given variable and then decrement.
 * => "--a" means you first decrement the value of "a" then assign the value of "a" to "y". 
 *
*/ 