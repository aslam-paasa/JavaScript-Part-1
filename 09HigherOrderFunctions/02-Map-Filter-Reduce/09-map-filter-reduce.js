const users = [
    { firstName: "akshat", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];


// Assume that this is list of users data that we get from API.

// list of full names :
// ["akshat saini", "donald trump" ...]

const outputMap = users.map(x => x.firstName + " " + x.lastName);
console.log(outputMap);


// If this user list is given, we need to find out what are different age inside
// this array and how many people are with the same age?
// acc = { 26 : 2, 75 : 1, 50 : 1}

// reduce() => we want to reduce our array to a particular value

const outputReduce = users.reduce(function(acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(outputReduce); // { '26': 2, '50': 1, '75': 1 }



// find firstName of all the people whose age is less than 30
// Note : The map() will be running on output of "users.filter((x) => x.age < 30)"
// these objects 

const outputFilter1 = users.filter((x) => x.age < 30);
console.log(outputFilter1);
// [
//     { firstName: 'akshat', lastName: 'saini', age: 26 },
//     { firstName: 'deepika', lastName: 'padukone', age: 26 }
// ]


// Method chaining :
const outputFilter2 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(outputFilter2); // [ 'akshat', 'deepika' ]


// Get the same result using "reduce()" :