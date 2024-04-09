let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 20, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 30, gender: "M"},
    {name: "H", age: 27, gender: "F"}    
];

// if every callback returns 'true' then 'every' returns 'true'
// Are all female candidates valid
let allFemaleCandiatesValid = arr.filter(c => c.gender == 'F')
.every(fc => fc.age >= 20 && fc.age <=30);

console.log(isThereAnyValidCandidate);