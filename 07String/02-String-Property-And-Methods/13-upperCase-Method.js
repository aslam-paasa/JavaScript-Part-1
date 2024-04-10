// 1. str.upperCase() :
// => Humaare paas agar koi v string hai, for example, "abc", aur humein isse
//    completely upperCase m convert kr k dena hai to ye method hm apne
//    string m apply krnge

// => Syntax : str.upperCase();

// Agar humne likha "str.length", to ye string ki ek property hai jo humein
// directly apni value de degi, but "upperCase()" ek method hai jo humein
// kuch kaam kr k dega. "abc" => "ABC"

let str = "Mohammad Aslam";
console.log("upperCase() method converts Mohammad Aslam to : " + str.toUpperCase());

console.log(str); // Mohammad Aslam
console.log(str.toUpperCase()); // MOHAMMAD ASLAM

// Note : String methods Original String ko change nhi krta. Ye always new
// string return krta hai with new value.


// But agar hum isse wapas se "str" m store kr de to humari Original String
// change ho jaegi.
str = str.toUpperCase(); 
console.log(str); // MOHAMMAD ASLAM


// Q) Original String k andr changes q nhi hoti?
// => Strings are immutable means jo chij change nhi hoti.