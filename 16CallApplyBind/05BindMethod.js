
let name = {
    firstName: "Akshay",
    lastName: "Saini",
}

let printFullName = function(hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + " from " + hometown + ", " + state);
}

printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
    firstName: "Mohammad",
    lastName: "Aslam",
}

// function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// bind method
// Instead of directly calling 'call' method over here, the bind method binds
// this printFullName method with a object and returns us the copy of that method

// It will create a copy of printFullName and it will bind that to "name2" object
// and will return a function printFullName. But there is a catch over here, it
// doesn't directly call and prints it to the console, rather it will return us a
// method which can be called later.
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
// Retuns a function which can be invoked later. And we can invoke it like normal
// method
printMyName();

// This is basically used to bind and keep a copy of that method and use it later