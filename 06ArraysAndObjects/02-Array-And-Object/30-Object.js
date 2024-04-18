// 4. Object.isSealed() : Checks if object is sealed or not.

const student_5 =
{
    name : "Mohammad Aslam",
}

console.log(Object.isSealed(student_5)); // false

Object.seal(student_5);
console.log(Object.isSealed(student_5)); // true
