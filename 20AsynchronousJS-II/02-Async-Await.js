/**
 * Async-Await:
 * => Whatever we have learnt in Promise if fine, but some people find it
 *    irritating. If we have very big code then this ".then()" code become
 *    quite messy and confusing. That's why there was something known as
 *    Async-Await was introduced.
 * => So, Async-Await is just an alternative for writing ".then()" again
 *    and again.
 * */ 

/**
 * 1. This syntax will remain the same.
 * 2. setTimeout() for time based complexity.
 * 3. set timer of 3 sec
 * Note: Promise remains the same, only ".then()" varies.
*/
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // resolve('This was successful');
        reject('This promise was rejected');
    }, 3000);
});

/**
 * => Async-Await always works in pair.
 * => Async is applied on function, then we can use "await".
 * 
 * 1. For Async-Await, we need a anonymous function: 
 *    getMyPromise = () => {}; and that will
 *    be unnamed function. So, basically to call this 'myPromise()'
 *    use this promise and making it new function so that inside this
 *    we can call myPromise.
 * 2. Add async keyword to this anonymous function.
 * 3. Once async is defined, add await inside it. We know that 
 *    myPromise() fn will return the String: "This was successful" 
 *    and store it in a variable: "getResult". So, whatever result
 *    we have, we can get it inside this getResult variable and now
 *    we can call our function using "await". Await simply means
 *    this is a promise so we have to wait for it to run. Once it runs
 *    it will get the data inside getResult:
 * */ 

const getMyPromise01 = async () => {
    const getResult = await myPromise;
    console.log(getResult);
}

// getMyPromise01();

/**
 * Try-Catch Error handling:
 * But there is one issue: reject msg won't work.
 * => We get an error on the console, and this because we are not 
 *    handling rejection.
 * => We can handle using "try & catch":
 *    1. Wrap whole code inside try block and catch block.
 *    2. If an error occur inside the try-block then we will directly
 *       jump to the catch block.
 * */ 

const getMyPromise02 = async () => {
    try {
        const getResult = await myPromise;
        console.log(getResult);
    } catch(error) {
        console.log(error);
    }
    
}

getMyPromise02();



/**
 * If we get an error, we actually don't need to console.log(), we can
 * actually throw the error to the user in red that there is some
 * fatal error:
 * => throw new Error(error);
*/
const getMyPromise03 = async () => {
    try {
        const getResult = await myPromise;
        console.log(getResult);
    } catch(error) {
        // throw new Error(error);
        console.error(error);
    }
    
}

getMyPromise03();