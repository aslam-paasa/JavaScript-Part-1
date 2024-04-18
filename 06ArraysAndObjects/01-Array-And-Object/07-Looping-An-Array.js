let person = {
    name: "Piyush",
    age: "25",
}
let arr04 = ["apple", "banana", "cherry", person];


// Looping an Array using for-loop :
for(let i = 0; i < arr04.length; i++) {
    console.log(`Index ${i} : ${arr04[i]}`);
}

console.log();

// Looping an Array using while-loop :
let i = 0;
while(i < arr04.length) {
    console.log(`Index ${i} : ${arr04[i]}`);
    i++;
}