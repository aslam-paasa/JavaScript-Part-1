const user1 = {
    firstName: "Mohammad",
    age: 8,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

user1.about(); // Mohammad 8


// Mujhe about() use krna hai user2 k liye 
const user2 = {
    firstName: "Mohit",
    age: 9,
}

// Note : user2 m koi v about naam ka method nhi hai lekin humein use krna hai
// (humein copy nhi krna, borrow krna hai user1 se). FUnction call same hoga
// bass () k andr hum bta skte hai ye "this" ki binding kis object k saath
// hogi i.e. user2
user1.about.call(user2); // Mohit 9
user1.about.call(); // undefined undefined => No value is passed
user1.about.call(user1); // Mohammad 8

