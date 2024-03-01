/* 
 - Promises are used to handle Async Operation in JS. 
 - Suppose we are creating an ecommerce website like Amazon so we have a
   cart in it. And this cart is nothing but an array and we will add
   some string items to the cart.*/
   
const cart = ["shoes", "pants", "kurta"];

// Along with the cart suppose we have 2 more api's :
// (a) createOrder : This api takes "cart" item and return us the order details or order id.
// createOrder(cart); // orderId
// This will create an order in our database and will give us orderId
// (b) proceedToPayment : This api will then take this "orderId" and will take us to the payment page
// proceedToPayment(orderId); 
// So, now these 2 api's are asynchronous, we don't know how much time it will take and they are dependent on each other
// so we can only do proceedToPayment once we have created the order.

// Callbacks used to be very crucial part when writing asynchronous code in our programming.
// So how we handle these types of situations in our code using callbacks?
// We wrap this proceedToPayment function inside a callback function 
// function() {
//     proceedToPayment(orderId);
// }
// And we design our api in such a way that we pass this callback function to create order api.

// createOrder(cart, function(orderId) {
    // proceedToPayment(orderId);
// });

// Now it is the responsibility of the createOrder api to create an order first of all and then will call our callback function back once the order is created with the orderId.
// This is how we are using async operations using callback but there is very important issue with this code - "Inversion Of Control"
// We have given/ this callback function to create order api - 
// function(orderId) {
//      proceedToPayment(orderId);
// }
// And now we are just sitting back as a developer that at some point of time this createOrder function will call our callback function back and everything will be peaceful.
// But what if we are just blindly trusting this createOrder api and it never calls our callback function back or it might call it twice.
// Because this createOrder api can be in some other server or external world or written be some other developer or intern so we can' blindly trust these api.
// So, we meant to say is that we have given the responsibility of our code "proceedToPayment(orderId);" to some other api and it's not in our control anymore, we have just passed in and expecting it to randomly/magically being called after the order is created. Isn't it risky?
// So passing callback functions like this isn't reliable, we are just giving the control of our program to some other part of code which we are not aware of. This is not a very confident way of writing code.

// How we can solve this Inversion Of Control?
// We will see how we can handle these types of situations using promises.
// If we would designing these api's, we would have designed our createOrder API in such a way that createOrder API will no longer take a callback function but it will just take card details and it will return us a promise.

// const promise = createOrder(cart);

// And we will capture that promise in a veriable 'promise. So, whenever we call this line, this createOrder(cart) api will return us a promise and promise is nothing but we can assume an empty object with some data value in it.
// {data: value}
// And this data value will hold whatever this createOrder api will return to us.
// This createOrder API is an async operation, it will take some time to execute but we don't know how much time it will take but as soon as this line is executed - "const promise = createOrder(cart);", it will return us an object with a data having some undefined property
// {data: undefined} -> undefined means empty value
// And suppose after 5-6 seconds, whenever how much ever time it takes, it will create an order and will give us order detail and will fill these objects back at some later point of time.
// {data: orderDetails}

// What will happen once we have there orderDetails/data with us?
// How do we continue our program?
// What will happen to proceedToPayment?
// Now we will attach callback function - "promise" to this promise object and for doing that we will use ".then()" 
// This is the function which is available over promise object, so we will use promise.then() and we will attach a callback function using this ".then()" function -

// promise.then(function(orderId) {
//     proceedToPayment(orderId);
// })

// Earlier this {data: undefined} used to be undefined, but as soon as JS executed this line "const promise = createOrder(cart). This was empty.
// But after certain point of time, this will be filled with exact data that will be returned by createOrder api - {data: orderDetails}
// And once we have data inside this promise object - {data: orderDetails}, the callback function "proceedToPayment" that we attacked to this promise object will be automatically called.

// Explanation :
// Earlier we passed this function : function(orderId) {proceedToPayment}; to createOrder api and we were blindly trusting on createOrder API and we were relying on it.
// And in case of promise, we are attaching a callback function to a promise object. 
// There is a difference - 
// In the first one, we are "passing" the callback function to another function
// And here, we are "attaching" a callback function a promise object. So, here we will have control of the program with us. How?
// createOrder api will only do its job, create an order and fill the promise object with data whenever it wants to and as soon as this promise object is filled with that data, it will automatically call our callback function. That's how we never loses the control of our program.
// And promises gives us that guarantee that it will call the callback function whenever there is data inside the "promise" object and it will call it once and only once.
// And we will have control of our program with us as we are not passing our code to some external function which resolved the issue of "Inversion Of Control".

// We will deep dive and see how promise objects look like -
// fetch is basically an api given by browsers to us to make external calls so now we will use this fetch function to make an api call to github servers and will get user info with us.
const GITHUB_API = "https://api.github.com/users/askhaymarch7"
// We will try to fetch this user info from this api
// By design. this fetch function returns us a promise and let's capture that promise into object known as "user".
// And we will pass this GITHUB_API inside fetch
const user = fetch(GITHUB_API);
// As soon as this line of code is executed, we will get a promise object inside this "user". So, fetch return us a promise.
// user: undefined ---(after execution)-> user: Promise {<pending>}
// If we see what is inside this promise object :
    // V user: Promise
    //     >[[Prototype]]: Promise
    //     >[[PromiseState]]: "pending"
    //     >[[PromiseResult]]: "undefined"
// Whatever we have discussed about the "empty object" or {data: undefined}, it is this - "[[PromiseResult]]: undefined"
// Right now this promise is in a pending state.

// What are the states of a promise?
// (a) State of Promise : Promise State tells us that in what state that promise is. Initially the promise will be in "pending" state and once have got the data back after some seconds/minutes, the promise will changes to "fulfilled" state.
// (b) Result : Result will store whatever data the fetch method will returns. This will be stored inside "PromiseResult".

// What will happen when we run this code?
console.log(user);
// Once line no 86 is executed, fetch will return us a promise "user", and this console.log will log that promise.
// If will show "Promise { <pending> }", but if we expand it, it will show :
    // V user: Promise
    //     >[[Prototype]]: Promise
    //     >[[PromiseState]]: "fulfilled"
    //     >[[PromiseResult]]: Response
// Why it is behaving in this way?
// When this console.log statement is executed, at this point of time the "user" - the promise object is in pending state.
// JS Engine doesn't wait for anything, it executes quickly. So, when it executes "fetch", it returns a promise and the promise at that particular point of time is in pending state, it takes some time to get the data and fill it back to get "fulfilled"
// But JS doesn't wait for that, it just goes on and print console.log(user), and that's why this promise is pending over here. 
// But what does Chrome does is, after some point of time, this GITHUB_API will come into this "user" promise object, so if we expand the promise in chrome, it shows us current state of promise, that's why it is fulfilled now, but when it was logged it was on pending state.


// Now what if we have some callback attached to this promise object?
// How do we attach it?
// And we can do, it we have GITHUB_API data, this data will come over here and we can just use this as we want to with this data. And that's how we attach callbacks to promise. 
// We can use this data in our program and do whatever we want to with this.
user.then(function(data) {
    console.log(data);
})
// There can be only 3 states inside a Promise :
// (a) Pending : 
// (b) Fulfilled
// (c) Rejected
// This brings lot of trust in the transaction

// Promise objects are immutable. Means whenever it is fulfilled or we have data inside our promises, we can just pass it here and there in our code and we don't have to worry about that someone can mutate that data once it is fulfilled.


// Definition :
// 1. Promise Object is a placeholder for a certain period of time until we recieve a value from a asynchronous operation.
// 2. Container for a future value.
// 3. Promise is an object representing the eventual completion or failure of an asynchronous operation.


// We solved inversion of control which was a major issue while using callbacks, we were giving control of our code to someone else but there is one more issue with callback.
// There was an issue of "callback hell/Pyramid Of Doom" (because of dependency on each other)
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        })
    })
});

const promises = createOrder(cart);

promises.then(function (orderId) {
    proceedToPayment(orderId);
});

// Promises helps us avoid this as well and this is handled using "promise chaining". So promise comes with an important feature called "promise chaining"
// How to solve callback hell using Promise Chaining?
// This createOrder API will return us a promise and then we will attach a callback function over here :
// createOrder(cart)
//  .then(function (orderId) {
//     proceedToPayment(orderId);
//  })
//  .then(function (orderId) {
//     showOrderSummary(paymentInfo);
//  })
//  .then(function (paymentInfo) {
//     updateWalletBalance(paymentInfo);
//  });

// There is a bug where most of developers fall into a lot of code.
// Whenever we are attaching a lot of ".then()" function and lot of callbacks in this promise chain, we use to pipe the data/we want to flow the data in the whole chain.
// What will happen is? Whatever is the response of this createOrder should pass into this chain and then whatever is the response of "proceedToPayment" should pass down the chain and then whatever there is returned from "showOrderSummary" should pass down the chain, for that we have to take care in mind that we return from here.
// So we always "return" a promise from in promise when we are chaining it. So, that when we get data properly into our chain
createOrder(cart)
 .then(function (orderId) {
    return proceedToPayment(orderId);
 })
 .then(function (orderId) {
    return showOrderSummary(paymentInfo);
 })
 .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
 });

//  This is how we write code and our doen't grow horizontally but in a meaning chained fashion.
// Some developers also like to use arrow function over here :
createOrder(cart)
 .then(orderId => proceedToPayment(orderId))
 .then(paymentInfo => showOrderSummary(paymentInfo))
 .then(paymentInfo => updateWalletBalance(paymentInfo));