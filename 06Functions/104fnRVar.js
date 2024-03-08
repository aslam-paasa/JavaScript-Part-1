// function definition
function fn(param) {
    console.log("I am function definiton", param);
    //execute chota fn
    param();
}

// string -> reference/address pass hota h
// fn("Hello");

// boolean -> value
// fn(true);

// object -> address pass hota h
// fn({name: "Jasbir"});

// Array -> address pass hota h
// fn([10, 20, 30]);

// We can write it as (obj k andr address pass kr rhe h) -
// let obj = {name: "Jasbir"};
// fn(obj);


// functions are also variables -> Functions are first class citizens in JS
function chotafn() {
    console.log("Hello, I am a chota fn");
}

// function can also be passed as an argument in a function
fn(chotafn);