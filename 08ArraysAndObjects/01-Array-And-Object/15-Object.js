/* Object.create metohd :
 - There is an inbuilt function for creating an object in JS.

Example :
 - const laptop = {...}
 - const newObject = Object.create(laptop)
                                |
                                V
                    This is going to create copy of laptop object
                    
   let num = 123
   let temp = num
 - Here also we were creating copy of num in temp variable. */

 const originalStudent = {
    name: "Mohammad Aslam",
    rno: 5,
    isDayScholar: true,
    subject: ["maths", "english", "hindi"]
}
//  to create copy of student object
const copyStudent = Object.create(originalStudent);
console.log(typeof(copyStudent));
console.log(copyStudent.name);
