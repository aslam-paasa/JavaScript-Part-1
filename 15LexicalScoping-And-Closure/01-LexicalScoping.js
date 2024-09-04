
// Closure gives you access to an outer function's scope from an inner function.
// Scope means uske andr jo v humne variables, functions etc ka access humein
// milta hai

// Avi tk humne pdha h ki har function ka apna ek scope hota h aur scope k bahar
// kuch v declare krte hai to wo available nhi hota hai

function outer() {
    let username = "hitesh";
}
// Kya username ka access hoga? No! Qki Outer() ka scope line 15-17 tk hai
console.log(username); // Error: username is not defined


