// Extraction method :
// (a) slice() :
// => slice() method humein humaare String ka ek tukda return krta hai

// M o h a m m a d
//     ^         ^
//     +---------+

// Humein "h" se le k "d" tk ka tukda chaiye, to iske liye "h" i.e. meri 
// starting position/index and "d" i.e. my ending position/index hogi ye
// humein "slice()" ko btana pdta hai.

// str.slice(start, end?) // returns part of a string
// => end index is optional value + non-inclusive means start=1 & end=3
//    krne pe start index=1 hoga but end index=3 include nhi hoga. Aur
//    humaare paas jo string ka tukda return ho k aaega wo "1 to 2" tk aaega.

let str = "0123456";
console.log(str.slice(1, 6)); // 6 is non-inclusive means wo include nhi hoga
console.log(str.slice(1)); // end index is optional, wo 1st index se last index tk return krega
console.log(str.slice(4));
console.log();


// Examples :

var str1 = "Hello future coder";
// H  e  l  l  o  <space>  f  u  t  u  r  e  <space>  c  o  d  e  r 
// 0, 1, 2, 3, 4,    5,    6, 7, 8, 9, 10,11,   12,   13,14,15,16,17
console.log(str1);
console.log(str1[4]);
console.log(str1.length);
console.log();

let slicedStr = str1.slice(6, 12); //6th index se shuru hoga aur 12th index se ek phle string tk kategi
console.log(slicedStr); //without hampering original string we can use their part of string
console.log(str1);   //original source of information will not changed
console.log();

let slicedStr1 = str1.slice(6); //6th index se shuru hoga jo last index tk jaega
console.log(slicedStr1);
console.log();

let slicedStr2 = str1.slice(6, -2); //6th index se shuru krni h lekin last k 2 index chorni h
console.log("minus "+slicedStr2);
