// ages of all the ladies [24, 40, 44, 28, 27]
let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 40, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 27, gender: "F"}
];

// Way-1 : Normal function
let females = arr.filter(function(v, i, oarr){
    if(v.gender == "F"){
        return true;
    } else {
        return false;
    }
}).map(function(v, i, oarr){
    return v.age;
});
console.log(females);
//ye humein sirf females return krega to ab females k upar map laga denge


// Way-2 : Using arrow function
let lAges = arr.filter((v, i, oarr) => v.gender == 'F').map((v, i, oarr) => v.age);
console.log(lAges);