let arr2d = [[2, 8, 10], [34], [45, 31, 25, 64, 72, 88], [], [25, 73]];

let arr = arr2d.reduce(function(pv, cv, ci, oarr){
    let narr = pv.concat(cv);
    return narr;
}, []);

console.log(arr);
// [], [2, 8, 10]
// [2, 8, 10], [34]
// [2, 8, 10, 34], [45, 31, 25, 64, 72, 88]
// [2, 8, 10, 34, 45, 31, 25, 64, 72, 88], [25, 73]
// [2, 8, 10, 34, 45, 31, 25, 64, 72, 88, 25, 73]
// flatten the 2d array (convert 2d array to 1d array)