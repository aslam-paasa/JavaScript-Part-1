// 1) Using object literals :

const student1 = {
    name : "Aslam",
    rno : 5,
    isDayScholar : true,
    subject : ["maths", "english", "hindi"]
}

console.log(student1);
console.log(`Student ${student1.name} has roll number ${student1.rno} and isDayScholar : ${student1.isDayScholar == true ? "yes" : "no"}, having subjects : ${student1.subject}`);

student1.rno = 10; //mutable
console.log(`Student ${student1.name} has roll number ${student1.rno} and isDayScholar : ${student1.isDayScholar == true ? "yes" : "no"}, having subjects : ${student1.subject}`);

// 2) Using new keyword
// here we are creating variable student and initializing it to object type
const student = new Object(); //creating new object with the help of 'new' keyword
student.name = "abc";
student.rno = 15;
student.isDayScholar = true;
student.subject = new Array("maths", "english", "hindi");

// it will print exactly the same
console.log(student);
console.log(`Student ${student.name} has roll number ${student.rno} and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"}, having subjects : ${student.subject}`);
