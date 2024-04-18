let person = {
    name: "Piyush",
    age: "25",
}
let arr04 = ["apple", "banana", "cherry", person];

// Methods used to add or remove elements at the end of an array :
// (a) push & pop : used to add and remove elements at the end of an array

console.log("Adding Elements at the end of an array using push() method : ");
arr04.push("orange");
console.log(arr04); // elements added at the end of an array

console.log();

console.log("Removing Elements from the end of an array using pop() method :");
arr04.pop();
console.log(arr04); // elements removed from the end of an array

console.log();

// (b) unshift & shift : used to add or remove elements at the top of an array
console.log("Adding Elements to the top of an array using unshift() method : ");
arr04.unshift("orange")
console.log(arr04); // orange become the first element

console.log();

console.log("Removing Elements from the bottom of an array using shift() method : "); 
arr04.shift();
console.log(arr04); // orange removed from the top of an array

// Note : push() & pop() are more performant than unshift() & shift()