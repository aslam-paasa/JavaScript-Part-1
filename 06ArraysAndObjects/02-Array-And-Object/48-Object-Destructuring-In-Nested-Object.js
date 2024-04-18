// Object Destructuring in Nested Objects :
let {
    name : studentName,
    rno : studentRno,
    subject : 
    {
        hindi : hindiMarks,
        english : englishMarks
    }
} = students;

console.log(studentName);   // Mohammad Aslam
console.log(studentRno);    // 10
console.log(hindiMarks);    // 80
console.log(englishMarks);  // 90

/*
let newAvenger = {
    realName : "Tony Stark",
    location : {
        country : "USA",
        city : "California"
    },
    heroName : "Iron Man"
};

let {
    realName : foo,
    location : {
        country : bar,
        city : x
    },
} = newAvenger;

console.log(foo); // "Tony Stark"
console.log(bar); // "USA"
*/ 
