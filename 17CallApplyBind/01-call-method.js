// Call, Apply and Bind function helps us to bind our "this" keyword
// or "bind" the context of "this", manually to a particular object.
console.log("Call Apply Bind..");

const per1 = {
    name: "ramesh",
    age: 20
}

const per2 = {
    name: "Suresh",
    age: 22
}

// Let's say mujhe ek function banana hai jisme ramesh object apne aap ko introduce
// karna hai.
// function Introduce() {
//     console.log(`Myself ${per1.name}, I am ${per1.age} years old`);
// }

// Introduce(); // Myself ramesh, I am 20 years old

// Ab let's say ki mujhe ye function reuse krna hai Suresh object k liye taaki 
// Suresh v apne aap ko introduce kr pae. Aur hum "call" keyword k help se 
// Suresh ko introduce krnge. Ab "per1.name" and "per1.age" k jagha pe likh skte 
// hai "this" keyword. Aur hm jaante h ki jb kvi v hm "Introduce()" function ko
// call krte hai aur uske andr "this" use krte hai to "this" refers krta h 
// ki "Introduce()" function ko kon call kr rha hai. Aur avi humaare case m 
// "Introduce()" function ko koi call nhi kr rha hai. And koi nhi call kr rha hai
// means ki "window" call kr rha hai. Technically hm aise v likh skte hai -
// "window.Introduce()" but output m humein "undefined" mil rha hai means "window"
// mai name and age available nhi hai.
// But ab mai "this" ki value change krna chahta hu apne function k andr.
// Main chahta hu ki "this" ki value ek baar "per1" object ko point kre aur ek 
// baar "per2" object ko refer kre.

// Kaise hum "this" ki value change kr skte hai function k andr?
// Using "call" method. Aur "Introduce()" ko kon call kr rha hai wo hum isme pass
// kar skte hai

function Introduce() {
    console.log(`Myself ${this.name}, I am ${this.age} years old`);
}

// Introduce(); 
Introduce.call(per1); // Myself ramesh, I am 20 years old
Introduce.call(per2); // Myself Suresh, I am 22 years old
