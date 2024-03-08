function outer() {
    // JS m array k andr function v store kr skte h q ki variable h
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(function () {
            console.log(i);
        })
    }
    return arr;
}

console.log("Before calling outer");
let arr = outer();
arr[0]();
arr[1]();
arr[2]();
console.log("After calling outer");