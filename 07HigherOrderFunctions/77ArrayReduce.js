let arr = [10, 20, 30, 40, 50];

//way-1
let sum1 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
});

console.log(sum1);   // 150

// 10 20 1
// 30 30 2
// 60 40 3
// 100 50 4

//way02
let sum2 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
}, 5);

console.log(sum2);  //150

// 5 10 0
// 15 20 1
// 35 30 2
// 65 40 3
// 105 50 4
// 155