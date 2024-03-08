/* For searching we can use - 
1) find, 
2) findIndex, 
3) filter, 
4) indexOf, 
5) lastIndexOf, 
6) includes

1. Easy Searching : indexOf, lastIndexOf, includes
2. Complex Searching : find, findIndex
3. Complex Searching with all filtered values : filter

Note : Use 'find' & 'findIndex' for complex searches like -
    -> complex search m ek banda chaiye to 'find'
    -> complex search m ek bande ki index chaiye to 'findIndex'
    -> complex search m ek search pe multiple bande chaiye to 'filter'
*/

let arr = [10, 20, 30, 40, 50, 60, 60, 50, 40, 30, 20, 10];

// 'indexOf' shuru se search krega aur pehle index de dega i.e. '30'
let ioRes = arr.indexOf(30);    //first Index or -1

// lastIndexOf ulta/piche se search krta h
let lioRes = arr.lastIndexOf(30);   // last index or -1

// mil gya to 'true/false'
let iRes = arr.includes(30);        // true or false

// 1st wale ki value return krta h (bina function k kaam ni krta)
// give me the first value above 50
let fRes = arr.find(function(v, i, oarr){
    return v > 50;
})

// 1st value ki index return krta h
//give me the index of first value above 50
let fiRes = arr.findIndex(function(v, i, oarr){
    return v > 60;
})

// jo jo '30' h sbko dhund k de dega
// give me all  value above 50
let fltrRes = arr.filter(function(v, i, oarr){
    return v > 50;
})

console.log(ioRes); // 2
console.log(lioRes);// 9
console.log(iRes);  // true
console.log(fRes);  // 30
console.log(fiRes); // 2
console.log(fltrRes);//[ 30, 30 ]

