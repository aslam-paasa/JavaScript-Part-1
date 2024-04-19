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

about.call(user2, "guitar", "moazart"); // Mohit 9 guitar moazart
