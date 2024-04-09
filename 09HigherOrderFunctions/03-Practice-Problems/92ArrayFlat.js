// related to tree question
let arr = [10, 20, [50, 60, [90, 100]], [70, [110, 120], 80], 40];

// arr.flat(1) means level-1 k array fod k unko direct attach kr do
let res1 = arr.flat(1); // arr.flat() [10, 20, 50, 60, [90, 100], 30, 70, [110, 120], 80, 40]
console.log(res1);

// arr.flat(2) means level-1&2 dono k array fod k unko direct attach kr do
let res2 = arr.flat(2); //[10, 20,  50,  60, 90, 100, 70, 110, 120, 80, 40]
console.log(res2);

let res3 = arr.flat(300);
console.log(res3);