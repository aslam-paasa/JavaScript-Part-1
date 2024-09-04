/**
 * String Methods:
 * => These are built-in functions to manipulate a string.
*/

/**
 * 1. charAt(): 
 *    a. Accessing characters.
 *    b. String k andr agar kisi v index pe koi character humein 
 *       findout kr k return krwana hai to uske liye charAt() use
 *       krte hai.
 *    c. Syntax : str.charAt(idx)
*/

let str = "ILoveJS";
console.log(str.charAt(0));
console.log(str.charAt(3));


/**
 * Issue with Index Property:
 * 1. Only read data of particular index.
 * 2. Cannot modify data of particular character.
 * 
 *    SLoveJS X => ILoveJS (Can't do this)
*/

str[0] = "S";
console.log(str);

/**
 * Note:
 * a. Original String m changes nhi aaega because of "String Immutability".
 * b. By using replace() method, we can generate a new String and store the
 *    modified data to that String.
 * 
 * Q. How replace() fn works internally?
*/


/**
 * 2. replace(): 
 * => It is used to search & modify String.
 * => First jo value match hogi wo replace ho jaegi.
 * => For example, maine ek string likha "abcdefgh", ab iske andr mujhe search
 *    krni hai apni value "ef". To iss value ko search kr k iski jagha hm "123"
 *    likhna chahte hai uske liye hm 2 parameters pass krte hai:
 *    (a) searchVal
 *    (b) new Val
 * 
 *    Syntax : str.replace(searchVal, newVal)
 * 
 * Note: Jo v first value match hogi wo replace ho jaegi.
*/

str = str.replace("I", "S"); // ILoveJS 
console.log(str);

console.log();

/**
 * 3. replaceAll(): 
 * => It is used to search & modify String.
 * => Saari matching values replace ho jaegi.
 * 
 *    Syntax : str.replaceAll(searchVal, newVal)
 * 
*/

let str01 = "hello";
console.log(str01.replaceAll("lo", "low"));