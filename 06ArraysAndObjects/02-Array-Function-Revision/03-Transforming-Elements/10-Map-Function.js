let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'M',
        age: 28
    },
    {
        gender: 'F',
        age: 74
    },
    {
        gender: 'M',
        age: 31
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'M',
        age: 26
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'F',
        age: 74
    },
    {
        gender: 'M',
        age: 39
    },
    {
        gender: 'M',
        age: 47
    }
];

// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <=30


//Way-1 : Using normal function
let shortlist = arr.map(function (v, i, oarr) {
    if (v.gender == "F" && v.age >= 20 & v.age <= 30) {
        return true;
    } else {
        return false;
    }
});

console.log(shortlist);

// Way-2 : Using arrow function
let shortlist2 = arr.map((v, i, oarr) => v.gender == "F" && v.age >= 20 && v.age <= 30);
console.log(shortlist2);

// We can also write arrow function like this (inside curly braces) -
let shortlist3 = arr.map((v, i, oarr) => {
    return v.gender == "F" && v.age >= 20 && v.age <= 30
});
console.log(shortlist3);