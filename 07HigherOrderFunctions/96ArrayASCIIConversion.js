let arr1 = Array.from("Aslam"); //Used fo Array like object (for instance, string, nodelist, arguments)
console.log(arr1);

// Convert character to ASCII (character+1 => ASCII Code)
let arr2 = arr1.map(ch => String.fromCharCode(ch.charCodeAt(0) + 1));
console.log(arr2);

let str = arr2.join("");
console.log(str);


let str1 = "sumeet";
for(let i = 0; i < str1.length; i++){
    console.log(str1.charCodeAt(i));
}