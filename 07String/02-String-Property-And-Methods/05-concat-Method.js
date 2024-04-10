// Modyfying String : :
// => concat() : joins two strings
// => concatenation method -> concatenation means kisi do chijo ko jodna

// Syntax : str1.concat(str2); // joins str1 with str2


let firstStr = "Believe in ";
let secondStr = "yourself";

let concatenationedStr = firstStr+secondStr;
console.log(concatenationedStr); // result will be stored in new string

let concatStr = firstStr.concat(secondStr, " and me");
console.log(concatStr);

let concatStr1 = secondStr.concat(firstStr, " and me");
console.log(concatStr1);


// What if we have some strings which have some gaps?
let str6 = "Subscribe to RoadsideCoder!";
console.log(str6.concat(" and share this video"));
console.log();

const newStr = "    Hello World   ";
console.log(newStr.trim()); // It cannot remove the spaces in between