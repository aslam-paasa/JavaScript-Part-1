// node 42ArraysReduce.js
//convert 2d-Array to 1d-Array

let arr2d = [
    [10, 20, 30],
    [22, 17],
    [54, 58, 92, 34],
    [61, 31, 55, 92],
    [17]
]

//ye khali array pv m chala jaega
let arr = arr2d.reduce(function(pv, cv, ci){
    console.log(pv + " " + cv + " " + ci);
    //"concat" is used to add 2 array
    let joined = pv.concat(cv);
    return joined;
}, []);

console.log(arr);


// Output : Converting 2D-Array to 1D-Array
// []                                                       ,  [10, 20, 30]          ,      0
// [10, 20, 30]                                             ,  [22, 17]              ,      1
// [10, 20, 30, 22, 17]                                     ,  [54, 58, 92, 34]      ,      2
// [10, 20, 30, 22, 17, 54, 58, 92, 34]                     ,  [61, 31, 55, 92]      ,      3
// [10, 20, 30, 22, 17, 54, 58, 92, 34, 61, 31, 55, 92]     ,  [17]                  ,      4
// [10, 20, 30, 22, 17, 54, 58, 92, 34, 61, 31, 55, 92, 17]