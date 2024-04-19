let arr = [10, 20, 30, 40, 50, 60];
let na = arr.slice();   //slice for cloning is fine for integer array bcoz ints are value type

// Array-1
displayArray(arr);

//Array-2
displayArray(na);

//humne new array k 3 ko i.e. 40 ko 300 bana diya to puraane array m change ni hoga
na[3] = 400;
displayArray(arr);
displayArray(na);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}
/*
integer wala array h to koi dikkat nhi h qki shallow copy hi deep copy h -

Output -
10,20,30,40,50,60 = 6
10,20,30,40,50,60 = 6
10,20,30,40,50,60 = 6
10,20,30,400,50,60 = 6


*/