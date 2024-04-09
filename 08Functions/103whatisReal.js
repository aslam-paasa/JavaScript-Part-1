console.log("script started");
iamReal();
// 1)
function iamReal(wePassedParameter) {
    console.log("I am Real");
}

// 2)
function iamReal() {
    console.log("He isn't real -> I am the real one");
}

iamReal();