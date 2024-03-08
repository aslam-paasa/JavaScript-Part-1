/*Let's assume ki humein user ka data lena h, to kind of multiple screens hoti h.
-> User pehle firstName enter krta h
-> Then lastName enter krta h
-> Uske baad user age enter krta h
-> Then hm print kr dete h

Note : Jitne v callback, promises, and async code hote h wo bina closure k work ni krte h*/ 

function enterFirstName(first) {
    return function enterLastName(last) {
        return function enterAge(age) {
            return function printDetails() {
            console.log("Your name is " + first + " " + last + " and your age is " + age);
            }
        }
    } 
}

console.log("Kindly enter your first Name");
let enterLastName = enterFirstName("Mohammad");
console.log("Kindly enter your last Name");
let enterAge = enterLastName("Aslam");
console.log("Kindly enter your age");
let printDetails = enterAge(25);

// We can do random things with these data - print form, payment, etc...
console.log("Doing Random Stuff");
printDetails();