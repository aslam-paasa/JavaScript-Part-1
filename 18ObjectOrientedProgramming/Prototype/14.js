const user1 = {
    firstName: "Mohammad",
    lastName: "Aslam",
    email: "mohammad05aslam@gmail.com",
    age: 2,
    address: "House No-22, Village-Maheshpur, pincode, state",
    about: function () {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function () {
        return this.age >= 18;
    }
}

const user2 = {
    firstName: "Mohammad",
    lastName: "Afzal",
    email: "mohammad05afzal@gmail.com",
    age: 2,
    address: "House No-22, Village-Maheshpur, pincode, state",
    about: function () {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function () {
        return this.age >= 18;
    }
}

const aboutUser = user1.about(); // Object is created and stored
console.log(aboutUser);

// Ab humein aise laakho users chaiye, but aise hm laakho users nhi bna skte.
// Itna tedicous kaam hm nhi kr skte. Humein kuch better approach lgana pdega
// Hum ek function create krnge jo function as a input lega and return kr
// dega humein ek object. Means object create and return krega

// 1. function (that function creates object)
// 2. Add key value pair
// 3. object ko return krega

function createUser(firstName, lastName, email, age, address) {
    const user = {}; // object store, now return
    // Add key value pair
    user.firstName = firstName; // Input se aa rha hai aur "user" m store kr rhe hai
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old`; // function same rhega sbke liye
    }
    user.is18 = function () {   // function same rhega sbke liye
        return this.age >= 18;
    }
    return user; // returning object
}

const user3 = createUser("Mohammad", "Abdullah, abdullah@gmail.com", 3, "my address");
console.log(user3);

const is18 = user3.is18();
console.log(is18); // false

const about = user3.about();
console.log(about); // Mohammad is my address years old


// Note : Iss code m bahut jyda faults hai

// 46:42