// remove all prime number from array using splice method

// Trick : Loop ulta chalana h 

let arr = [10, 47, 15, 17, 92, 97, 93, 31, 46, 54];

for(let i = arr.length - 1; i>=0; i--){
    let val = arr[i];
    let isPrime = IsPrime(val);
    if(isPrime == true){
        arr.splice(i, 1);
    }
}

displayArray(arr);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

function IsPrime(val){
    for(let div = 2; div * div; div++){
        if(val % div == 0){
            return false;
        }
    }
    return true;
}

/* Points to Remember -
1) Removal krne h splice can help us
    array.splice(i, 1) -> 'i' pe jaa k ek banda uda dega
2) Insert krna h to v splice can help us
    array.splice(i, 0, value) -> udana kuch ni h aur waha pe ek value daal do to insert ho jaega
*/