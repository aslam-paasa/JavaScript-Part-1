let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], //50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60], //90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60], //100, 60
    [10, 50, 70, 80, 90, 100, 30, 60]  //100, 60
];

let inter2 = arr2d.reduce(function(pv, cv, oarr){
    console.log("[" + pv + "] [" + cv + "]");
    let inter = pv.filter(v => cv.includes(v));
    return inter;
});
console.log(inter2);