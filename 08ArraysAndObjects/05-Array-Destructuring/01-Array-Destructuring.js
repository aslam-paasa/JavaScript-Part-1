// Array Destructuring :
// There is a class in which Students have just completed their practical exams
// Now they are preparing for their viva in which teacher will ask Oral Questions
// to Students. Now teacher will be calling student based on their "Roll Number"
// Now suppose I am having 2 students present who have given their viva but the
// third student is absent so in attendence sheet teacher has marked as "A".
// [P,P,A]
// And once the 3rd student is absent, he will call the 4th student and will take
// the viva. So, one by one he is calling and if the student is absent, he will
// mark it as "A". Basically, he is cerating one hole/space, later on if the 
// student is willing to give the exam then that student will come later and give 
// the exam.
// [P,P, ,P] -> Whole will be left and viva has to be done in order

// Now this entire process we will apply in our array destructuring :

let arrNum = [100, 300, 500];

// Old way before ES6
console.log(arrNum[0]);
console.log(arrNum[1]);
console.log(arrNum[2]);

// ES6 Array Destructuring
const [first, second, third] = arrNum;
console.log(first);
console.log(second);
console.log(third);