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
// (1) Yes (Premium Member) : (2) No 
//                                (a) Yes(VIP Member)
//                                (b) No (Free user)

// We can have multiple conditions based on which we can do want to do one thing
// If user is "Premium Member" then show some specific content to the user
// Or if the user is VIP member then we want to show something else to the user
// Or if the user is free user then we want to show something else to the user
// For this kind of situation, we got something like this :

// if(condition1) {

// } else if(condition2) {

// } else {

// }

console.log();

let isUserPremium = false;
let isVIPPremium = false;

if(isUserPremium) {
    console.log("Enjoy the premium content on hotstar");
} else if(isVIPPremium) {
    console.log("Enjoy the VIP content on hotstar, for more subscribe to premium");
} else {
    console.log("Please purchase either VIP or Premium Subscription to enjoy content on hotstar");
}

console.log("END");

// If multiple conditions are true then the block where first true condition is
// written will be executed.

// (1) if can exist without else-if & else 
// (2) else cannot exist without if but can exist without else-if
// (3) else-if cannot exist without if but can exist without else


// if(isUserPrime && isUserDiscovery) {
//    show both content
// } else if(isUserPrime) {
//    only prime content
// } else {
//    buy subscription
// }


// Another solution : Nested if-else
// if(isUserPrime) {
//      if(isUserDiscovery) {
//          show both content
//      } else {
//          only Prime content
//      }
// } else {
//      buy subscription
// }

// In programming there are used cases that for one thing there are multiple
// solutions.

console.log();

let isUserPrime = true;
let isUserDiscovery = true;
let isUserAccorn = true;

if(isUserPrime) {
     if(isUserDiscovery) {
        if(isUserAccorn) {
            console.log("Enjoy all accorn, prime and discovery content");
        } else {
            console.log("Enjoy both prime and discovery content");
        }
     } else if(isUserAccorn) {
            console.log("Enjoy both prime and accorn");
     } else {
         console.log("Enjoy Prime Content");
     }
} else {
     console.log("Please buy a subscription to enjoy content");
}