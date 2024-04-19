// Note : "Arrow Function" ka apne "this" nhi hota. Wo "this" apne surrounding
// se leta hai

const user1 = {
    firstName: "Mohammad",
    age: 8,
    about:() => {
        console.log(this); // window {}
        console.log(this.firstName, this.age);
    }
}

user1.about(); // undefined undefined
// Ye undefined isliye aa rha hai qki arrow function m jo "this" hota hai wo
// "this" apne surrounding se leta hai. Means "user1" iska "this" nhi hoga,
// iska "this" aur ek level up hoga i.e. "window".

// Note : Arrow Function m "this" ko hum change nhi kr skte hai.