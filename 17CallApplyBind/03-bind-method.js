

// "bind" method v same "call" k tarah kaam krta hai
// But call & apply function ko immediately call kr rhe the 
// But bind function ko immediately call nhi krta hai, instead bind function ki
// copy create krta hai, isi "Introduce()" function ko recreate krta hai "per1" &
// "per2" object ko use kr k aur humein wo function return kr deta hai
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
const rameshIntro = Introduce.bind(per1, "coder", 20000);
rameshIntro(); // Myself ramesh, I am 20 years old and I am coder and my salary is 20000

const sureahIntro = Introduce.bind(per2, "Single", 40000);
sureahIntro(); // Myself Suresh, I am 22 years old and I am Single and my salary is 40000
