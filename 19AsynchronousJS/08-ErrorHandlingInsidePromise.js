/**
 * Consumer:
*/
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

promise
    .then(function (orderId) {
        // proceedToPayment(orderId); 
        console.log(orderId);
    })
    .catch(function (err) {
        console.log(err.message);
    });


/**
 * Producer:
*/
function createOrder(orderId) {

    const pr = new Promise(function (resolve, reject) {
        /**
         * a. createOrder
         * b. validateCart
         * c. orderId
        */
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        /**
         * logic for createOrder
        */
        const orderId = "12345";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 2000);
        }
    });

    return pr;
}

/**
 * validateCart
*/
function validateCart(cart) {
    /**
     * reject promise => Error: Cart is not valid
     * */ 
    return false;
}


/**
 * => This displays red color error in browser : "Cart is not valid" means
 *    we haven't handled this error. This is failing inside the browser and
 *    we as a developer should never do this, we should always write code 
 *    to handle error.
 * 
 * Q. What will happen if we push this to production?
 * => This will fails in user's computer and they will silently get this error
 *    in their browser console and user will not see anything on the page. 
 * => So we should always gracefully handle error whenever we write code.
 * 
 * Q. How to handle this error?
 * => Now as a consumer we have just written the success part, if the orderId 
 *    is correct then we will do this:
 * 
 *    promise.then(function (orderId) {
 *        console.log(orderId);
 *    })
 * 
 * Q. But what if it fails? How do we write that code?
 * => For that promise also comes with one more function known as ".catch()", 
 *    it is just like ".then()" and we can attach a failure callback also to it.
 * => So the promise object can be attached with a failure callback as well.
 * => Failure callback means if our callback fails then this callback will be 
 *    invoked:
 * 
 *    .catch(function(err) 
 *     { 
 *        console.log(err.message)
 *     });
 * 
 * 
 * => Code:
 *     promise
 *    .then(function (orderId) {
 *        console.log(orderId);
 *     })
 *     .catch(function(err) {
 *        console.log(err.message);
 *     });
 * 
 * => Now we don't get a red in our console, this is gracefully handling the 
 *    rejection of a promise.
 * => We should also do that whenever we are creating a promise or consuming 
 *    any promise, we should always write a ".catch()" statement to handle the
 *    "error" gracefully.
*/