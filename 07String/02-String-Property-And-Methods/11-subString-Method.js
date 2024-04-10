// Extraction Method : substring method - 
// => substr(start, length); start index se shuru hoga fir btaenge aage k kitne characters capture krna h (6 characters)
let str = "Mohammad Aslam";
let slicedStr3 = str.substr(1, 8); // extract 5 characters starts from index 1
console.log(slicedStr3); // index 2 to 

let slicedStr4 = str.substr(10);
console.log(slicedStr4); // extract all characters starts from index 10

console.log(str);

//Note : Ye method aisa isliye aa rha bcoz this method is no longer in use


let str6 = "Subscribe to RoadsideCoder!";
console.log(str6.substring(13, 27));
console.log(str6.substring());

// 14:34