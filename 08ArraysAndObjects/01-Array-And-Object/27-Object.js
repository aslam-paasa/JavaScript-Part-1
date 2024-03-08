/* Array - 2 Deck :
-------------------
1. Object.freeze() : Freezes an object that prevents new properties from
   being added to it.
 - If we are going to use it, we have to sure that if are freezing it
   we are not going to add it later.
   
Q) Where do practically use it?
 - There are some contents in some websites, can we go and change the values
   of it, even if we try we cannot change.
 - Let's say about online calculator, we perform some calculation after
   that if we refresh, it comes back and it doesn't store value.*/ 
   const student_2 = {
    name : "Mohammad Aslam",
    rno : 10
}

const obj = Object.freeze(student_2); // prevents adding new properties to the object
console.log(student_2); // { name: 'Mohammad Aslam', rno: 10 }
student_2.marks = 100;
console.log(student_2); // { name: 'Mohammad Aslam', rno: 10 }
obj.marks = 100;
console.log(obj);  // { name: 'Mohammad Aslam', rno: 10 }
