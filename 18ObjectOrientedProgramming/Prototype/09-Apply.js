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

// Apply() is same as Call().
// Ye internally "apply()" hi use kr rha hai, but the only difference is yha
// value alag alag pass krne k jagha ek list pass kr denge
about.call(user2, ["guitar", "moazart"]); // Mohit 9 [ 'guitar', 'moazart' ] undefined
about.apply(user2, ["guitar", "moazart"]); // Mohit 9 guitar moazart
