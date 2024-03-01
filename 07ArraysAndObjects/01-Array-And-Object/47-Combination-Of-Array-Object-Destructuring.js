// Combination of Array and Object Destructuring
let newAvenger = {realName : "Tony Stark", city: ["california", "Malibu"], heroName : "Iron Man"};

let {realName: foo, city: bar} = newAvenger;
console.log(foo);   // "Tony Stark"
console.log(bar);   // ["california", "Malibu"]
