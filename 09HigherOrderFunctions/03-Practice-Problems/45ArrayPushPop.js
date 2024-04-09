//push appends one or more values at the end of the array
//push returns the new length of array
let arr = [20, 30, 80, 100, 40];
displayArray(arr);

//2 chije dekhni h -
//(a) Kya paas kr skte h?   
// -> jo v denge wo end m jaa k lgega
arr.push(1000);
displayArray(arr);

arr.push(2000, 3000, 4000);
displayArray(arr);

//(b) kya ye return krta h?     //new length

let rv = arr.push(5000, 6000);
console.log(rv);    //11

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}