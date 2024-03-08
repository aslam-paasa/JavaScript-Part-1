// node 40ArraysReduce.js
//reduce is a function
//it takes input as callback
//callback has 3 params - pv, cv, ci
//for the first call to reduce pv is 0th value, cv is 1st value and ci is 1

//Way-1 : reduce() function without arrow function
let arr = [10, 20, 30, 40, 50];
let val = arr.reduce(function(pv, cv, ci){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
});

console.log(val);   //150
 

//Way-2 : reduce() function using arrow function
let val2 = arr.reduce((pv, cv, ci) => pv * cv);
console.log(val2);  //12000000


/*
Way-1 
let arr = [10, 20, 30, 40, 50];
let val = arr.reduce(function(pv, cv, ci){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
});

console.log(val);   //150

Way-2 
let val2 = arr.reduce((pv, cv, ci) => pv * cv);
console.log(val2);  //12000000

map() v ek array return krti thi, filter() v ek array return krti h but the difference is
map() jo array return krta tha original array k equal hota tha aur filter() jo array return
krta tha wo original array se chota hota tha. But reduce() ek value return krta h.

Reduce() 3 value leta h -
1) Previous Value
2) Current Value
3) Current Index
Reduce jb pehli baar function ko call krega to 10, 20, 1 pass krega.

Output : 
10 20 1
30 30 2
60 40 3
100 50 4

-> Isne pehli baar m pv(10), cv(20), ci(1) pass kra. Isme cv, ci to smjh aa gya
-> pv value m pehli baar m 10 pass kr diya, dusri baar m ye wahi pass krega jo pehle wale ne return
kiya tha i.e. pv(10)+cv(20) = 30. Similarly, 30+30=60, 60+40=100.
So, basically reduce() function saare ka ek bana deta h i.e. 150.
*/