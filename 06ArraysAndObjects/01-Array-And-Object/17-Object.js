// How to get only key from object?
// Use object.keys() method -> returns array of object's keys

const studentKeys = {
    name : "abc",
    rno : 10,
    phno : 987
}

// print only the key part
Object.keys(student).forEach((key) => console.log(`key is ${key}`));
console.log(Object.keys(student));
