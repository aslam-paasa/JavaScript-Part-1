// node 43ArraysReduce.js
// f(g(h(i(x)))) -> inn saare functions ko chala k ek result nikalnge
// array of functions       //factorial


// Way-1 : Writing normal functions
// function f(x){
//     return x * x;
// }

// function g(x){
//     return 10 * x;
// }

// function h(x){
//     return x / 5;
// }

// Way-2 : Write functions using arrow function
let f = (x) => x * x;
let g = (x) => 10 * x;
let h = (x) => x / 5;



// h(g(f(5))) = h(g(25)) = h(250) =50

//Way-1 : array of functions
let arr = [f, g, h];
let val = arr.reduce((pv, cv, ci) => cv(pv), 5);
console.log(val);


// Way-2 : array of functions
let val2 = arr.reduce(function(pv, cv, ci){
    console.log(pv + "-" + cv + "-" + ci);
    return cv(pv);
}, 5);
console.log(val2);

// 5, f, 0
// f(5), g, 1         -> 25, g, 1
// g(f(5)), h, 2      -> 250, h, 2
// h(g(f(5)))         -> 50