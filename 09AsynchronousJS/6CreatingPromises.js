// Suppose we are creating an ecommerce website and it has a cart which has 3 items inside the cart :
const cart = ["shoes", "pants", "kurta"];
// Now with these cart items we will have to create an order
// And suppose we have an async operation createOrder api which takes cart and returns orderId
// createOrder(cart); // orderId
// After that we proceedToPayment with this orderId
// proceedToPayment(orderId); // orderId


// Consumer Part
const promise = createOrder(cart); // orderId

promise.then(function (orderId) {
    // proceedToPayment(orderId); 
    console.log(orderId);
})

// Now we will see how does this "createOrder(cart)" return a promise. Who is writing this? We as developers will write this createOrder
// So now we will see that how we can create our new promise and send it to the "consumer"

// Producer Part
// Now we will try to write our own createOrder Function by ourself
// function createOrder(cart) {...}
// We already know by design of this api is that this createOrder will return a promise
// So create a promise : "const pr = ", return the promise : "return pr";

// function createOrder(orderId) {

//     const pr = 

//     return pr;
// }

// Now we will see how do we create a promise.
// To create a promise we will use a 'new' keyword and a Promise() constructor.
// const pr = new Promise();

// How do we call this promise constructor? (important)
// This promise constructor will take a function and this function have two parameters which is "resolved" and "reject"
// const pr = new Promise(resolved, reject) {...};
// This is how we create a promise. There is a promise constructor and this constructor takes a function which has "resolve" and "reject" and these "resolve" and "reject" are functions which are given by JS Design API to build promises.
// So if we invoke this Promise constructor with using a new keyword and passing the function over here with (resolve, reject), now we can just return this promise - "return pr"
// function createOrder(orderId) {

//     const pr = new Promise(function(resolve, reject) {


//     });

//     return pr;
// }

// What we will do inside a Promise?
// We will write our logic of handling whatever we need to do inside this createOrder function.
// createOrder will basically take the cart items and it will just create an order
// Because we don't have database now, so this is place where we write calls to database or validate cart or make an api call to create an order and we will get an orderId that we will return as a success. So, our promise should return a success or failure.
// So the success would be to returning an orderId and the failure would be to throw an error, whatever error it gets
// Let's take a dummy example -
// Suppose if we are trying to validate our cart, suppose we have a function called validateCart and we pass in cart item to it, if this function fails then we will reject this promise
// So, if the cart is not validated, we will just throw an error/reject the promise.

// How do we reject the promise?
// This is where "resolve, reject" comes into picture.
// These "resolve, reject" are the functions which are passed by JS to us.
// We will just call this "reject" function with some error, if we reject it so our "const promise" over Consumer part will be rejected (whoever is calling this api)
// If the cart is not valid we will just reject it and throw a new error, we are on the producer end now.
// Let's create an error and pass a message -
// if(!validateCart(cart)) {
//     const err = new Error("Cart is not valid");
//     reject()
// }
// And then we will reject this with this error :
// if(!validateCart(cart)) {
//     const err = new Error("Cart is not valid");
//     reject(err);
// }

// Now we will write logic for createOrder
// If the logic of createOrder is successful then we will get some orderId
// Let's assume we will get some orderId after making some DB Calls, let's just take a dummy orderId = "12345" and now if the orderId is valid then we will just resolve our promise/make it a success.
// So, promise can have only two things : (a) fulfilledresolved (b) reject
// We will just resolve the promise byc calling resolve and we will just pass an orderId over here :
// const orderId = "12345";
// if(orderId) {
//     resolve(orderId);
// }
// This is how we create a whole promise.

// Producer
function createOrder(orderId) {

    const pr = new Promise(function(resolve, reject) {
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 2000);
        }
    });

    return pr;
}

// validateCart
function validateCart(cart) {
    // resolve promise
    // return true;
    // reject promise
    return false;   // Error: Cart is not valid
}

// This displays red color error in browser means we haven't handled this error. This is failing inside the browser and we as a developer should never do this, we should always write code to handle error 
// What will happen if we push this to production? This will fails in user's computer and they will silently get this error in their browser console and user will not see anything on the page. So we should always gracefully handle error whenever we write code.

// How to handle this error?
// Now as a consumer we have 