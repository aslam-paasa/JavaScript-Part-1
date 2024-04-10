// Escape Characters in template literal :
// => console.log() k andr agar bahut bda sa output hai. Ab hm chahte hai ki
//    output ko 2 part m break kr k alag alag line m kr de, tb hm "\n" use
//    krnge jiska kaam hota hai string k andr ek new line de dena. Aur agar
//    humein tab ka space chaiye hota tb hm "/t" use krte.
console.log("Mohammad\nAslam");
console.log("Mohammad\tAslam");

// Agar hm escape characters use krne k baad length krwa k dekhe to string
// ki length kya hogi?

let str4 = "Mohammad\tAslam";
console.log("Length of the string after escape characters are : " + str4.length);

// => Hum expect krnge ki string ki length 13 ho lekin length 14 aaegi because
//    "\t" ek single character k tarah count hota hai.

