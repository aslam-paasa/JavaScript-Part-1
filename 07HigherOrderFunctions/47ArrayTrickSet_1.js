//47ArrayTrickSet_1.js

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr[10] = 500;  //no array out of index exception, increases the length
displayArray(arr);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}


/*
length to iski 5 hi h lekin array m aisa ni hota ki fix length tk hi chije daal skte h.
For example, agr iski length=5 h fir v hum iske 10 value pe kuch daal skte h -
let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr[10] = 500;
displayArray(arr);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

//Ab iska value 11 ho jaana chaiye, aur bich wale indexes m ye 'undefined' daal dega.
Output :
20,30,80,100,40 = 5
20,30,80,100,40,,,,,,500 = 11

*/