// Why we are not actually comparing "isPrimeMember == true or not"?
console.log("Welcome to Prime Video");
let isPrimeMember = false;
if(isPrimeMember) {
    console.log("Enjoy the content");
} else {
    console.log("Please buy the subscription to enjoy the content");
}

// Because the last thing that JS has do with "if-else" statement is whatever
// is the condition, it will evaluate the condition. After evaluation, it will
// try to convert that thing into "boolean". So, the value is "isPrimeMember" is
// "false" which is already a "boolean". So tried to get the value, if the value
// is not already "boolean" then it internally tries to convert it to "boolean".
// And this is how things works in JS.

// Now let's talk about Hotstar. It is bit different than Amazon Prime.
// In Hotstar you can be a user who don't have a subscription or maybe we have
// the VIP subscription i.e. the cheaper version or maybe we have the Premium
// subscription.

// isPremium Member
// Yes