// Short Syntax :
// Humein function k liye key:value pair likhne ki jarurt nhi hai.
// Hum direct function name likh skte hai

const user1 = {
    firstName: "Mohammad",
    age: 8,
    about() {
        console.log(this.firstName, this.age);
    }
}

user1.about(); // Mohammad 8