// Template Literal in JS :
// => A way to have embedded expressions/variables in strings.
//        `this is a template literal`



// String Interpolation :
// => To create strings by doing substitution/addition of placeholders(varaibles).
// => String+varaibles embedded inside backticks.

// `string text ${expression/variables} string text`



// Explanation :
// Agar hum koi string bnate to string ko hm iss tarah se bna skte hai :
let str3 = "Mohammad";
// But strings ko bnane ka ek aur tarika v hota hai.



// Template Literals : 
// => backticks => Iss backticks k andr hm koi v text likh skte hai
// => Template Literal ko special type of string keh skte hai
let specialString = `This is a template literal`
console.log(specialString);
console.log(typeof specialString);
console.log();



// Q) Jb double & single quotes tha to backticks kyu?

let obj = {
    item : "pen",
    price : 10
}

// => Agar humein iss obj ka item and price, dono print krwana h ek line m 
//    print krwana hai hm kaise likhnge?

console.log("The cost of", obj.item, " is", obj.price, " rupees"); // Ugly approach
console.log(`the cost of ${obj.item} is ${obj.price}`); // better approach
console.log();
// Note : Template literal m hm string k saath apne variable ko v likh skte hai


let str5 = `Mohammad
Aslam`;
console.log(str5);
console.log`Hello`; // Power of backticks




function test(string, youtubeChannel, person) 
{
    console.log(string, youtubeChannel, person);
}

const channel = "mohammad_05";
const name = "Aslam"

// name, channel is provided separately to youtube & person 
// That's why they are printed separately
test`Subscribe to ${channel} run by ${name}`;