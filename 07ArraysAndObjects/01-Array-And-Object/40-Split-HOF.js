/* 
5. Split : If we have a string, it will split all the characters from
   that.
*/ 

const string = "abcde";
console.log(string); //abcde
const splittedString = string.split(''); // this will convert string to character array
console.log(splittedString); // [ 'a', 'b', 'c', 'd', 'e' ]


const string1 = "hello to my world";
const splittedString1 = string1.split(' '); // split whenever we see a space
console.log(splittedString1); //[ 'hello', 'to', 'my', 'world' ]
