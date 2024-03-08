// More Parameters

let name = {
    firstName: "Akshay",
    lastName: "Saini",
}

let printFullName = function(hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + " from " + hometown + ", " + state);
}

// First parameter will alaways be reference to 'this' variable
// And later arguments can be the arguments to the function
// So, we are passing hometown as our 2nd argument 
printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
    firstName: "Mohammad",
    lastName: "Aslam",
}

// Over here it is undefined because we didn't pass anything 
// So, we will pass "Mumbai"
printFullName.call(name2, "Mumbai", "Maharashtra");
