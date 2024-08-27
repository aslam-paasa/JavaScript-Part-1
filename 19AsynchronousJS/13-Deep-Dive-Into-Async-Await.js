/**
 * +--------------------------------+
 * | Diving Deep into async/await : |
 * +--------------------------------+
*/ 


/** 
 * Q. What is the difference between handling the promise using
 *    async/await and normal older way?
*/
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});



/**
 * (a) Handling promise before async/await :
*/
function getData() {
    /**
     * JS Engine will not wait for promise to be resolved
    */
    p.then((res) => console.log(res));
    console.log("Before async/await 1 : Namaste Javascript");
}

getData();

/**
 * Explanation: Handling promise before async/await 
 * 
 * Q. What will be printed first? Namaste Javascript or Promise Resolved Value!!?
 * => First this "Namaste Javascript" will be printed, then "Promise Resolved Value!!"
 *    will be resolved after 10seconds.
 *    
 *    Namaste Javascript
 *    Promise Resolved Value!!
 * 
 * => As soon as this getData() function is executed, it will register this promise
 *    and it will take this callback function and keep it separately till it is
 *    resolved, and it will continue executing. After registering the function it
 *    will move to the next line and print the "Namaste Javascript".
 * => Then after 10 seconds "Promise Resolved Value!!" will get printed in JS. And
 *    this is the normal behavior of promises in JS.
 * 
 * Note: The problem with this was it used to be very confusing for lot of developers.
 *       Many developers think JS will first wait for the promise to resolved and then
 *       only it will go to next line i.e. "Namaste JavaScript".
*/



/**
 * (b) Handling promises after async/await :
*/

/**
 * await can only be used inside an async function
 * */ 
async function handlePromise() {
    /**
     * JS Engine was waiting for the promise to resolved
    */
    const val = await p;
    console.log("After async/await : Namaste Javascript");
    console.log(val);
}
handlePromise();


/**
 * Explanation: Handling promises after async/await
 * 
 * Q. What will be printed first? Namaste Javascript or Promise Resolved Value!!?
 * => Nothing will get printed on the console. And after 10 seconds we will get:
 * 
 *    After async/await : Namaste Javascript
 *    Promise Resolved Value!!
 * 
 * => So, basically the JS Engine is waiting at "const val = await p;" and once the
 *    promise is resolved whether it takes 10seconds, 20 seconds, etc and this "await"
 *    got the value inside the "val" then only it will go to the next line i.e. 
 *    "Namaste Javascript". And this is the major difference.
*/





/**
 * Q. Will our program wait two times or will it run parallely?
*/
async function handlePromise2() {
    console.log("Async/Await Example 2!!");
    /**
     * JS Engine was waiting for the promise to resolved
    */
    const val = await p;
    console.log("After async/await : Namaste Javascript 01");
    console.log(val);

    const val2 = await p;
    console.log("After async/await : Namaste JavaScript 02");
    console.log(val2);
    console.log();
}
handlePromise2();

/**
 * Explanation:
 * => First it will print:
 *    
 *    Before async/await : Namaste Javascript
 *    Async/Await Example!!
 * 
 * => Then after 10 seconds our both the promises are resolved:
 * 
 *    Promise Resolved Value!!
 *    After async/await : Namaste Javascript
 *    Promise Resolved Value!!
 *    After async/await : Namaste Javascript 01
 *    Promise Resolved Value!!
 *    After async/await : Namaste JavaScript 02
 *    Promise Resolved Value!!
*/



/**
 * Now let's create two promises:
*/ 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);
});

async function handlePromise3() {
    console.log("Async/Await Example 3!!");
    /**
     * JS Engine was waiting for the promise to resolved
    */
    const val = await p1; // 10 seconds
    console.log("After async/await : Namaste Javascript 01");
    console.log(val);

    const val2 = await p2; // 5 seconds
    console.log("After async/await : Namaste JavaScript 02");
    console.log(val2);
    console.log();
}
handlePromise3();

/**
 * Explanation:
 * 
 * Q. What will happen?
 * Q. Will this "Namaste JavaScript 02" will be printed after 5seconds?
 * Q. And this "Namaste JavaScript 01" will be printed after 10 seconds?
 * =>  After 10 seconds all of them gets printed.
 * => Namaste Javascript 02 is resolved at 5 seconds but still these lines
 *    had to wait for 10 seconds to print.
*/




/**
 * In this example we will reverse the order :
*/
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);
});


const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

async function handlePromise4() {
    console.log("Async/Await Example 4!!");
    /**
     * JS Engine was waiting for the promise to resolved
    */
    const val = await p1; // 5 seconds
    console.log("After async/await : Namaste Javascript 03");
    console.log(val);

    const val2 = await p2; // 10 seconds
    console.log("After async/await : Namaste JavaScript 04");
    console.log(val2);
    console.log();
}
handlePromise4();

/**
 * Explanation:
 * 
 * Q. What will happen?
 * Q. Will this "Namaste JavaScript 01" will be printed after 5seconds?
 * Q. Or this will wait for "Namaste JavaScript 02" to get printed after 10 seconds?
 * => Namaste Javascript 03 will get printed after 5 seconds.
 * => Then Namaste JavaScript 04 will be printed after 10 seconds.
 * 
 * => When we reverse the order the behavior changes automatically, and this is the
 *    most confusing part of JS.
 * => This "handlePromise4" is not in the callstack when it is waiting over here.
 * => Otherwise, if that was the case then our program/page will freeze but while
 *    we are doing this our page is not frozen.
 * => So, this JS Engine is not actually waiting, so this statement that 
 *    "JS Engine was waiting for the promise to resolved" is not true at all.
 * => Basically it looks like the JS Engine is waiting but it is not true at all.
*/


/**
 * Q. If the program doesn't wait then what does it do actually?
 * Q. How does it work behind the scenes?
 * => When this function will be executed, it will go line by line because JS is
 *    a synchronous single threaded language.
 * => 32:48
*/