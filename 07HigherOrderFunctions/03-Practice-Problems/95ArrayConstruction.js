// Way-1 to create array[]
let arr1 = [10, 20, 30];

// Way-2 tto create Array[] (static Array)
let arr2 = Array.of(10);
let arr3 = Array.of(10, 20, 30);

console.log(arr1);
console.log(arr2);
console.log(arr3);

// Way-3 to create Array[]
let arr4 = Array.from("Aslam"); //Used fo Array like object (for instance, string, nodelist, arguments)
console.log(arr4);

// Convert character to ASCII (character+1 => ASCII Code)
let arr5 = arr4.map(ch => ch.charCodeAt(0) + 1);
console.log(arr5);

// Convert ASCII to Character 
let arr6 = arr5.map(v => String.fromCharCode(v));
console.log(arr6);

let str = arr6.join("");
console.log(str);

/*
3 ways to create 'static array' -
-> Ye humare arr2, arr3 pe call ni hoga, ye 'Array.of()', 'Array.from()' pe call hoga.
1) of
2) from
*/ 