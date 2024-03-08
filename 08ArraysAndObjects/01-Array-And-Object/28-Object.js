/*2. Object.seal() : prevents new properties from being added and delete
   existing properties.
   
Note : Difference between delete and seal?*/

// Without seal
const student_3 =
{
    name : "Mohammad Aslam",
    rno : 10
}

console.log(student_3);

delete student_3.rno;   // deleting existing property
console.log(student_3);

student_3.marks = 100;  // adding a new property
console.log(student_3);

// With seal
const student_4 =
{
    name : "Mohammad Aslam",
    rno : 10
}
Object.seal(student_4); // sealing the object
console.log(student_4);
delete student_4.rno;   // neither delete property
console.log(student_4);
student_4.marks = 100;  // nor add property
console.log(student_4);
