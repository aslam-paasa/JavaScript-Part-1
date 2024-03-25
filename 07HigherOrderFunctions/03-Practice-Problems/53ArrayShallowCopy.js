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
Putting it all together, the line of code str += arr[i].age + ", " takes the i-th object's age property 
value, converts it to a string, and appends it to the existing value of the str variable, followed 
by a comma and a space. This is a common way to build a comma-separated list of ages within a string.
*/


/*
Addition assignment operator -
let a = 2;
let b = 'hello';

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += ' world')); // Concatenation
// Expected output: "hello world"

arr[i]: This is an array 'arr' from which an element is being accessed using the index i. 
In this context, it seems like 'arr' is an array of objects, and arr[i] accesses the i-th object 
in the array.

Humne 3 objects banae, fir teeno ko ek array m bhara, fir ek displayObjectArray function banaya jo
object m loop lagata h aur sbke ages ko dikhata h.

Shallow copy means? 
*/