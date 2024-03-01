// Agar outer() function k andr ek aur function declare krte h i.e. inner() aur
// iske andr agar console.log() krte hai to yha pe username ka access milega?

// inner() function k andr v username call kr rhe h
// outer() function k bahar v username call kr rhe h
// Ab username ka access kaha milna chaiye?

// inner() function k andr "Inner hitesh" available hai lekin outer() m error h
// Error: username is not defined.

// Note : Function k andr jo v declare kiye wo outer space m available nhi hai
// Agar humne kvi function k andr function bnaya hai to humaare outer() function
// k saare variables wagrh inner() access kr skta hai. Aur yhi chij humein btane
// ki koshish ki gyi h "lexical scope" k andr.
// GEC k baad LEC bnta hai

// Kya inner() function k andr ka variable ko innerTwo() access kr skta hai?
// Parent ki properties le skte h
// Lekin bhai-bhai aapas ki property share nhi krnge

// Kya outer() function k paas "Secret" variable ka access hai?
// No!, Chote bado se maange skte hai but Bade choto se nhi maang skte

function outer() {
    let username = "hitesh";
    console.log(secret); // Error: secret is not defined
    function inner() {
        let secret = "my123";
        console.log("Inner", username); // Inner hitesh
    }
    function innerTwo() {
        console.log("innerTwo", username); // innerTwo hitesh
        console.log(secret); // Error: secret is not defined
    }
    inner();
}
outer();
console.log("Too Outer", username); // Error: username is not defined