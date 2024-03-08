// function definition
function fn(param) {
    console.log("I am function definiton", param);
    //execute chota fn
    param();
}

// functions are also variables -> Functions are first class citizens in JS
function chotafn() {
    console.log("Hello, I am a chota fn");
}

// function can also be passed as an argument in a function
// HOF
fn(chotafn);

