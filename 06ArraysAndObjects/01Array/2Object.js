const student = {
    name : "Aslam",
    rno : 5,
    isDayScholar : true,
    subject : ["maths", "english", "hindi"]
}

console.log(student);

/*
{
  name: 'abc',
  rno: 5,
  isDayScholar: true,
  subject: [ 'maths', 'english', 'hindi' ]
}
*/

console.log(`Student ${student.name} has roll number ${student.rno} and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"}, having subjects : ${student.subject}`);

student.rno = 10; //mutable
console.log(`Student ${student.name} has roll number ${student.rno} and isDayScholar : ${student.isDayScholar == true ? "yes" : "no"}, having subjects : ${student.subject}`);

//object doesn't have index so how can we iterate values?
