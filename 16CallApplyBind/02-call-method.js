// Let just say ki "Introduce()" function kuch argument leta like "status" &
// "salary"

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

// Yha pe hm 2 argument pass kr skte hai
// And iss tarike se hm argument handle kr skte hai
Introduce.call(per1, "coder", 20000);
Introduce.call(per2, "Single", 40000)