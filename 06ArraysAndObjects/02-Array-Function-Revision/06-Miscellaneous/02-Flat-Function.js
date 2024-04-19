let arr = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];

let res1 = arr.flat(0);
// [10, 20, [ 30, [ 50, [Array], 60 ], 40 ], 100, [ 120, [ 150, [Array], 160 ], 140, 200 ], 110]

let res2 = arr.flat(1);
// [10, 20, 30, [ 50, [ 70, 80, 90 ], 60 ], 40, 100, 120, [ 150, [ 170, 180, 190 ], 160 ], 140, 200, 110  ]

let res3 = arr.flat(2);
// [10, 20, 30, 50, [ 70, 80, 90 ], 60, 40, 100, 120, 150, [ 170, 180, 190 ], 160, 140, 200, 110]

let res4 = arr.flat(3);
// [10,  20,  30,  50,  70,  80,  90,  60,  40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 110]

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

// flat a deeply nested array without knowing the depth of array 
// (converts multidimensional array to single dimension)
let res5 = arr.flat(Infinity);
console.log(res5);
// [10,  20,  30,  50,  70,  80,  90,  60,  40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 110]