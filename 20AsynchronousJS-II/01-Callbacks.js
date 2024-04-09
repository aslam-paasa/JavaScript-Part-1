// Callbacks :


// func => HOF? => It takes fb(which is a function as argument)
// n => number
// fn => function

// Example-1 :
function func(x, fn) {
    for(let i = 0; i < x; i++) {
        console.log(i);
    }
    fn();
}

func(10, function exec() {  //callback
    console.log("I am executed also");
})


// Output :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// I am executed als



// Example-2 :
setTimeout(function exec() {
    console.log("Running after sometime");
}, 4000);