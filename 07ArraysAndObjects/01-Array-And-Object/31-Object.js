// 5. Object.isFreeze() : Checks if object is freezed or not. 

const student_6 =
{
    name : "Mohammad Aslam",
}

console.log(Object.isFrozen(student_6)); // false

Object.freeze(student_6);
console.log(Object.isFrozen(student_6)); // true
