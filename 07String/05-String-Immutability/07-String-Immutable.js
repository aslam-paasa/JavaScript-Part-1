//Note : String is Immutable -> 
var immutableStr = "Hi String";
console.log(immutableStr);    //Hi String
console.log(immutableStr.length); //9

immutableStr[9] = "s"; //strings are immutable
console.log(immutableStr);    //Hi String
console.log(immutableStr.length); //9