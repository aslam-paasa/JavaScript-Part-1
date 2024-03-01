// Rest in Object Deconstructuring :
const restStudent = 
{
    name : "Mohammad Aslam",
    rno : 10,
    hindiMarks : 80,
    englishMarks : 90
}

let { name, rno, ...remDetails } = restStudent;
console.log(name);  // Mohammad Aslam
console.log(rno);   // 10
console.log(remDetails);    // { hindiMarks: 80, englishMarks: 90 }

// Rest Parameter : Add(...values) {...}
//                        |-> Rest Parameter
let Add = (...nums) => 
{
    let sum = 0;
    for(let i = 0; i<nums.length; i++)
    {
        sum += nums[i];
    }
    return sum;
}

console.log(Add(1,2));
console.log(Add(1,2,3));
console.log(Add(1,2,3,4));
console.log(Add(1,2,3,4,5));
