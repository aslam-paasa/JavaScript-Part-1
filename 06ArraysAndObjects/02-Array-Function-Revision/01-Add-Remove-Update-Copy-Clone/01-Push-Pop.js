// Modifying Arrays :
// => Some arrays are specifically used to make changes, such as adding or
//    removing elements from an array from either the end or beginning,
//    adding or removing elements at specified positions, or generally making
//    updates to the array data structure. Let's look at the most frequently
//    used ones :

// Adding Elements to an Array :
// (1) Using "push" method :
//  => This helps you add one ore more elements to the end of an array and
//     return the new length of the array.

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

//2 chije dekhni h -
//(a) Kya paas kr skte h?   
// => jo v denge wo end m jaa k lgega
arr.push(1000);
displayArray(arr);

arr.push(2000, 3000, 4000);
displayArray(arr);

//(b) kya ye return krta h?   => new length

let rv = arr.push(5000, 6000);
console.log(rv);    //11

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}