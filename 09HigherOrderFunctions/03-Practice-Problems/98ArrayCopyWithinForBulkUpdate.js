let arr1 = [10, 20, 30, 40, 50, 60];

// start se end tk copy krega aur target pe chipkaega
// Jaise maine bola 2nd index se chipka de, 3rd se le k 5th index k values ko uthake
arr1.copyWithin(2, 3, 5);
console.log(arr1);  //[ 10, 20, 40, 50, 50, 60 ]

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
arr2.copyWithin(3, 0, 2); //[10, 20, 30, 10, 20, 60, 70, 80, 90]
console.log(arr2);