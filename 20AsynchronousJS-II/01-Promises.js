/**
 * Promises:
 * => It is an object that returns a value that we hope to receive in
 *    the future but not immediately.
 * 
 * => For example, I loaded a youtube video, now I clicked on the play
 *    button. When we click on play button, data starts loading. Our
 *    video is actually heavy, it might not load in just a second, might
 *    take some time to load the video. So, for that point of time for
 *    2 seconds to play the video that is known as promise.
 * => Promise is not always correct. If we have done any promise, either
 *    we will:
 *    (a) pending : Initial State
 *    (b) fulfill : Final state
 *    (c) reject : In the 2 seconds interval, Internet connection lost.
 * 
 * */ 

/**
 * 1. Create a new promise using this syntax and inside this we can 
 *    declare our function:
 * => const myPromise = new Promise();
 * 
 * 2. Inside this promise we take two things:
 *    (a) resolve
 *    (b) reject
 * => const myPromise = new Promise(function(resolve, reject) {});
 * => When we do something and everything is successful, then we call resolve function.
 * => And we got some errors in between and we want to reject the promise then we call reject function.
 * 
 * 3. Now inside this function, we will call resolve & reject:
 * => const myPromise = new Promise(function(resolve, reject) {
 *       resolve();
 *       reject();
 *    });
 * 
 * 4. Let's say in resolve() & reject() I send a message. So, if it is
 *    resolved it will send a message of 'success' and it is rejected
 *    it will send a message of 'Error occured':
 *    => const myPromise = new Promise(function(resolve, reject) {
 *          resolve("Success");
 *          reject("Error occured :=(");
 *       });
 * 
 * 5. We have to use ".then()" fn to call our promise function when
 *    everything was successful, but when anything fails in our fn 
 *    then it will run ".catch()" function:
 *    => const myPromise = new Promise(function(resolve, reject) {
 *          resolve("Success");
 *          reject("Error occured :=(");
 *       });
 *    => myPromise.then().catch()
 * 
 * 6. Whatever failed in the promise, it will come to catch() fn as
 *    an input - "err". But if there is no error then I will end up
 *    in ".then()" success data will come as an input - "data":
 * 
 *    => const myPromise = new Promise(function(resolve, reject) {
 *          resolve("Success");
 *          reject("Error occured :=(");
 *       });
 *    => myPromise
 *              .then((data) => {console.log(data)})
 *              .catch((err) => {console.log(err)});
*/

const myPromise = new Promise(function(resolve, reject) {
    resolve("Success");
    reject("Error occured :=(");
});

myPromise
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err)});


/**
 * Whatever we have done till now, it doesn't really require promises.
 * We are not waiting for any time, we are sending message instantly.
 * So, even though we made it as promise we are not waiting for any
 * time in between because these are small things and it doesn't take
 * a lot of time. It's not a very good example.
 * 
 * => For it to be a very good example, we will use setTimeout().
 * => Inside JS, we have something known as timeout. Using this fn
 *    we can wait for some couple of seconds for printing output.
*/


/**
 * setTimeout():
 * I am saying Hello but it will be printed after 3 seconds:
*/
setTimeout(function() {
    console.log("Hello");
}, 3000);


/**
 * Now we will use promise() + setTimeout() to check if they wait or not
 * before running:
*/
const setTimeoutPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Hello");
    }, 3000);
});

setTimeoutPromise
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err)});

console.log("This is w");

/**
 * Promises on its own doesn't take any time, its the code/logic inside
 * it which takes time to run.
*/

/**
 * How promises works?
 * => Stack                          => Web API
 * +-----------------------------+   +-------------------------------+
 * |                             |   |                               |
 * |                             |   |                               |
 * |                             |   |                               |
 * |                             |   |                               |
 * |                             |   +-------------------------------+
 * |                             |   => Callback
 * |                             |   +-------------------------------+
 * |                             |   |                               |
 * |                             |   |                               |
 * |                             |   |                               |
 * |                             |   |                               |
 * +-----------------------------+   +-------------------------------+
 * => Whenever we run some normal code (not promise based), it runs on
 *    stack sequentially one after another.
 * => If we say console.log() statement, it will go, execute and move
 *    out of the stack.
 * => If we say 'const', it will be created and move out of the stack.
 *    And this is how normal stack works.
 * 
 * Q. What happens when we have a promise?
 * => If we have a promise, we have :
 *    1. console.log() statement at the top.
 *    2. Then we have promise()
 *    3. Then we have console.log() statement
 * Q. How exactly does it work? 
 * => console.log goes into the stack, it executes itself, it exits.
 * => Then the promise() goes into the stack, we know that prmomise
 *    will take some time, it doesn't work instantaneously. So, it 
 *    will send it to Web API. 
 * => Web API is specifically build for time taking functions. So, it
 *    will take the promise from the stack and immediately move it to
 *    Web API.
 * => Web API is an individual thing, it works on its own. So, till the
 *    point it sends it here in Web API, after that we can continue.
 *    It will send the promise in the Web API, it will keep on running
 *    simultaneously and we can run our rest of the code. 
 * => That is the reason whenever we refresh the page, firstly we see
 *    the message which is written at the bottom:
 *    console.log("This is w");
 * => Then it waits for 3 seconds and get us 'hello'.
 * 
 * => Basically Web API took this promise logic, started running it in
 *    the Web API section. And it said no need to wait for me, continue
 *    with the rest of the code and keep on printing. That's why the
 *    bottom message is printed first.
 * 
 * Callback Queue:
 * => When we are inside Web API, it is like a timer which will run.
 *    So, our timer was 5 sec. It will wait for the processing and when
 *    it is done with everything then it will go to Callback Queue.
 * => Callback Queue means now it is ready to execute then callback sends
 *    the result back to the stack.
 * => It's an event loop.
*/


/**
 * API Request:
 * => Whenever we are in frontend/Website, whatever data we need to load
 *    it needs comes from a server. If I need to access the server, this
 *    communication is time consuming.
 * => Let's say I am in India and trying to access a server which is in
 *    USA. Definitely it will take a lot of time because this data has 
 *    a lot of physical distance to travel. So, these type of transfer
 *    of data between server and frontend can include 3seconds, so it
 *    is time consuming. In those 3 seconds, I dont' want my JS Project
 *    to stop responding so we make promise-based.
 * => Now it is taking time, set it into a promise, we do our thing.
 *    Till that point we will load another thing on our website. When
 *    we are done, send us the data and we will access. This is what
 *    promise-based API Request means.
*/

/**
 * Note: If we want to do multiple tasks then we can chain them into
 *       multiple ".then()" fns.
 * => When we get some data, we don't want to directly console.log().
 *    I want to do multiple tasks on it, we can chain multiple ".then()"
 * => If we want to pass the 'data' to another ".then()" fn. W create
 *    a new variable and did String concatenation:- 
 *    => 'let dat = "Hello " + data;
 * 
 *      dotThenPromise
 *          .then((data) => {
 *              console.log(data);
 *              let dat = "Hello " + data;
 *              return dat;
 *          })
 *          .catch((err) => {console.log(err)});
 * 
 * => So, we did something with our data. Now after doing this modification
 *    on our data, we want to proceed in out new ".then()" fn, and for
 *    that we can return this dat to ".then()".
 * => And here we can access the data and we can console.log() that data
 *    here:
 * 
 *      dotThenPromise
 *          .then((data) => {
 *              console.log(data);
 *              let dat = "Aslam says " + data;
 *              return dat;
 *          })
 *          .then((dat) => {
 *              console.log(dat);
 *          })
 *          .catch((err) => {console.log(err)});
 * 
*/


const dotThenPromise = new Promise(function(resolve, reject) {
    resolve("hello");
    reject("Error occured :=(");
});

dotThenPromise
    .then((data) => {
        console.log(data);
        let dat = "Aslam says " + data;
        return dat;
    })
    .then((dat) => {
        console.log(dat);
    })
    .catch((err) => {console.log(err)});
