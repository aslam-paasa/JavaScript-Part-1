// Modifying Strings :
//replace() method string k andr kisi value ko search krne k kaam aata hai
// For example, maine ek string likhi "abcdefgh", ab iske andr mujhe search
// krni hai apni value "ef". To iss value ko search kr k iski jagha hm "123"
// likhna chahte hai uske liye hm 2 parameters pass krte hai :
// (a) searchVal
// (b) new Val

// Syntax : str.replace(searchVal, newVal)

let str = "hello";
console.log(str.replace("h", "y")); // first jo value match hogi wo replace ho jaegi
console.log(str.replace("lo", "low")); // first jo value match hogi wo replace ho jaegi
console.log(str);
console.log();

console.log(str.replaceAll("lo", "low")); // saari metching values replace ho jaegi 
console.log(str);