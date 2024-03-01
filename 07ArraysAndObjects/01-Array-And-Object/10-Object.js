/*
Is it possible for us to change/update it later (Mutable)
 - Mutable - whose state can be modified (Objects)
 - Immutable - whose state cannot be modified (Arrays)
*/ 

// Object Mutable Example - 
student.rno = 10;
console.log(`student ${student.name} has roll number ${student.rno}
and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"},
having subjects ${student.subject}`);


// 2. Creating Objects using New Keyword (When we want to create new instance)
const newStudent = new Object(); // creating new object with the help of "new" keyword
newStudent.name = "abc";
newStudent.rno = 15;
newStudent.isDayScholar = true;
newStudent.subject = new Array("maths", "english", "hindi");

console.log(newStudent);
console.log(`Student ${newStudent.name} has roll number ${newStudent.rno}
and isDayScholar : ${newStudent.isDayScholar == true ? "yes" : "no"},
having subjects ${newStudent.subject}`);

// Update roll number
newStudent.rno = 21;
console.log(`Student ${newStudent.name} has roll number ${newStudent.rno}
and isDayScholar : ${newStudent.isDayScholar == true ? "yes" : "no"},
having subjects ${newStudent.subject}`);
