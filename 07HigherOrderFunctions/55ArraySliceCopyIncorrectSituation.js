let o1 = {
    age: 100
};
let o2 = {
    age: 200
};
let o3 = {
    age: 300
}
let anarr = [o1, o2, o3];
displayObjectArray(anarr);

let shallowCopy = anarr.slice();
displayObjectArray(shallowCopy);

shallowCopy[0].age = 110;
displayObjectArray(anarr);
displayObjectArray(shallowCopy);

function displayObjectArray(arr){
    let str = ""

    for(let i = 0; i < arr.length; i++){
        str += arr[i].age + ", "
    }
    console.log(str + ".");
}

/*
-> 3 objects banae, fir array m bhr diye display kiye
-> slice se copy ban gyi, display kiye

shallowCopy[0].age = 110;
-> Agar iski age ko chede to iski original age chid jaega
*/