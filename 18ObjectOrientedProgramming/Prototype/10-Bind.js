function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName: "Mohammad",
    age: 8,
}


const user2 = {
    firstName: "Mohit",
    age: 9,
}

// Bind humein ek function return krta hai jisme meri ye saari value stored hai
// Ab infuture mujhe kvi iss value ki jarurt pade to hm aaram se iss function 
// ko call kr skte hai
const func = about.bind(user2, "guitar", "moazart"); 
func(); // Mohit 9 guitar moazart
