// "apply" method same kaam krta hai but second or ekhi argument leta hai
// Or wo "array of argument" hota hai

console.log("Call Apply Bind..");

const per1 = {
    name: "ramesh",
    age: 20
}

const per2 = {
    name: "Suresh",
    age: 22
}


function Introduce(status, salary) {
    console.log(`Myself ${this.name}, I am ${this.age} years old and I am ${status} and my salary is ${salary}`);
}

// Yha pe 2nd argument m individual argument pass kiye hai
// But apply m hm isse array m convert kr denge
// And iss tarike se hm argument handle kr skte hai
Introduce.apply(per1, ["coder", 20000]);
Introduce.apply(per2, ["Single", 40000]);