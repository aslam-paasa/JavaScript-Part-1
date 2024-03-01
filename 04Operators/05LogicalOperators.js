/* Logical Operators :
 - In 9th and 10th class, we have heard "Boolean logic gates".
 - Logic Gates were electronic circuits that take some input, input in the
   form of boolean - "true/false"
 - True means there is flow of current in the wire, false means there is
   no current.
 - And based on some logic inside it used to give some output and that
   output is also going to be a 'boolean'. 
   
1. AND Gate
2. OR Gate
3. NOT Gate

Q) HOw AND Gate works?
 - Take two inputs : x & Y
 
    X      Y      X AND Y
    false  false  false
    true   false  false
    false  true   false
    true   true   true
    
    X      Y      X OR Y
    false  false  false
    true   false  true
    false  true   true
    true   true   true
    
    X      Output (NOT)  
    false  true  
    true   false 
    
 - Logical Operator contain 2 operands : 
   (a) Operator1
   (b) Operator2
 - AND, OR : Inside AND, OR, we need two operands 
 - NOT : whereas NOT Operator need only operand.
+---------------------------------+
|1) AND Gate -> && (Double And)   |
|2) OR Gate  -> || (double pipe)  |
|3) NOT Gate -> !                 |
+---------------------------------+

 - The operand that we pass are always going to be some logical boolean
   operand.
   Operand1(boolean)      Operand2(boolean)
   
 - For example, console.log(true && false); // false
                console.log((10 > 5) && (6 < 3)); Relational+Logical
                                |          |
                                V          V
                              True   &&   False => false
            - We know that relational always return 'boolean' value so
              true && false => false.
*/ 

// Logical Operators 
console.log(true && false); 
console.log(false || false);
console.log(true && true);
console.log((5 < 10) && (6 < 3)); 
console.log(!false); // logical NOT
console.log(~true);  // later
console.log(~(3 > 4)); // later