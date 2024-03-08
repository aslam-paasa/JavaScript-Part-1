// Object.assign() method - creates copy of the object
const assignStudent = {
    name : "abc",
    rno : 10,
    phno : 987
}

let newObject = Object.assign({}, assignStudent);
console.log(newObject); // data is in JSON format
