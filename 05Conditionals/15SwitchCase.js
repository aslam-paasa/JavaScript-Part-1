// Switch Case :

// Syntax :
// switch(value or some expression) {
//   case value1:
//         logic
//         break;
//   case value2:
//         logic
//         break;
//   case value3:
//         logic
//         break;
//   default
// }

// Whenever we write "switch(value or some expression)" => whatever value or 
// expression gets calculated, we can use that value & check for the "case".

let name = "Sanket";
switch(name) {
    case "Sarthak":
        console.log("Working at PhonePe");
        break;

    case "Sanket":
        console.log("Working at Google");
        break;

    case "JD":
        console.log("Working at Microsoft");
        break;

    default:
        console.log("Don't know the company");
}

// Output : Working at Google

// switch is going to check every "case" 
// In the case, it will check, is the value inside the "switch == "Sarthak"". 
// No! If not then it will move to the next "case". 
// Now again it will check, is the value inside the "switch == "Sanket"". 
// Yes!, then it will execute that logic. And then move to the next line i.e. "break"

// If we use "break" within a switch case, the moment we hit the break statement,
// we exit out of the switch. And nothing more is going to get persist/happen.


let name2 = "Sunny";
switch(name2) {
    case "Sarthak":
        console.log("Working at PhonePe");
        break;

    case "Sanket":
        console.log("Working at Google");
        break;

    case "JD":
        console.log("Working at Microsoft");
        break;

    default:
        console.log("Don't know the company");
}

// If we check all of the "case" and non of the cases match the value that we have
// put inside switch. If non of the cases match then we are going to print the
// "default case" : "Don't know the company"

// But if we don't put "default case", nothing will get printed.
// If we don't have "default" and non of the cases matches, we don't do anything.



let name3 = "Sanket";
switch(name3) {
    case "Sarthak":
        console.log("Working at PhonePe");
        break;

    case "Sanket":
        console.log("Working at Google");
        // break;

    case "JD":
        console.log("Working at Microsoft");
        break;

    default:
        console.log("Don't know the company");
}

// What if we don't put a break?
// If we don't put break then whatever case we hit, below that everything get 
// executed till we find a break.

// Note : Everything we can do with switch case, we can do the same with if-else.


