
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

// In call method, we pass these arguments individually comma separated
// In apply method, we pass it as a second argument as an array list

printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);
