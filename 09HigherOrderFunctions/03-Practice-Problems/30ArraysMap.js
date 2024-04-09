// node 30ArraysMap.js

// map is itself a function
// map takes as input a callback function (with v and i)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v and i to callback
// callback will process the value and index and return a single input value
// values returned by each run of callback will be collected in a new array
// map returns that new array
//Note : map is also called an iterator

let arr = [2, 5, 9, 8, 15, 11, 6];
let sarr = arr.map(function(v, i){
    console.log(v + " " + i);
    return v*v; 
});

console.log(arr);
console.log(sarr);

// let arr = [2, 5, 9, 8, 15, 11, 6];
// mujhe sbke square chaiye, ye map hmko ek new array bna k dega
// map ek function h aur ye input m v function deta h (Promise, .then jaisa ho gya ye)
//iss function k andar bahar wale array (arr) k items aaenge('v' value aaegi fir 'i' -> array index aaega)
// let sarr = arr.map(function(v, i){
    //display value-index relation
    // console.log(v + " " + i);
    //jo mai answer chahta hu wo return hoga
//     return v*v; //value*value
// });

// console.log(arr);
// console.log(sarr);

/*
arr.map() ko chaiye ek function, uss function k 2 parameter h
1) Value
2) Index
value contains -> 2, 5, 9, 8, 15, 11, 6
index contains -> 0, 1, 2, 3, 4,  5,  6

Output :
2 0
5 1
9 2
8 3
15 4
11 5
6 6

It means map ko input m chaiye ek function, us function k andr wo pehli value bhejta h uske index k 
saath, fir wo next value ko bhejta h uske index k saath etc... Fir humne value ka square kr diya aur
usko return kr diya. Jitne ko humne return kiya na unn sb ka ek new array ban k return krega aur
'sarr' wale array m dal jaega.

map function input m function leta h like promise, then, readFileSync etc... Means ye jo input 
function leta h wo ek callback h. (Jb apna function hm kisi function ko de dete h to wo callback 
function hota h. So, humara function map() function k liye callback h. To map array ki pehli index pass
krega then dusri, teesri etc.. Humne usse kaam diya ki value print kra do or index ko print kra do
and values ki square return kra do. To jo v hum yha se return krte h wo saari ek ek kr k sqaure hota
jaega aur sbka array bnta jaega aur jo return hoga wo 'new' array.
Note : callback m jitni value hogi utni baar wo return hogi)
Note : dhyan se smjhe to dkhnge ki map k internally for loop chal rha h, to jitne value rhegi utni baar
ye chlega. Aur saari values ko append kr k ek array banegi.
Note : map is working like $$eval().
*/