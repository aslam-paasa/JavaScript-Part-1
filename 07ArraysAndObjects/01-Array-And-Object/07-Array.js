// What are differet ways to create Arrays in JavaScript?
// In JavaScript, there are many ways in which an array can be created -*/ 

// Two ways to Initialize Array -
// Way-1 : Array Literal : The easiest and most common way to creating an array 
const arr2 = [1,2,3]; // This uses Array/String Literals
console.log("First Array");
for(let i=0; i<arr2.length; i++) {
    console.log(arr2[i]);
}

// Way-2 : New Keyword 
// new keyword will create new instance of array class
const arr3 = new Array(4,5,6); // Using Array class
console.log("Second Array");
for(let i=0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
