// Inversion of Control is another problem which using callbacks
// IOC is like you loose the control of your code when we are using callbacks

const cart = ["shoes", "pants", "kurta"];

// In this code, we are creating an order and we take this callback function 
// -> function() { api.proceedToPayment();}
// and give it to createOrder API, and we as a developer are sitting back are blindly trusting createOrder API 
// We are expecting that createOrder API at some point of time will create an order and call our function back
// And this is very risky, because this proceedToPayment() is an important piece of our code, 
// and we gave the control of our program create order API, and now it us the responsibility OF createOrder API to call our function back and we are blindly trusting this API
// createOrder API must have been in some other service or some other developer wrote it, there could be lot of bug inside it.
// What if our callback function was never called, because we don't know know the createOrder API, some other guy wrote it and we are blindly trusting it. 
// Or what if our callback function i.e. proceedToPayment() called twice
// We are trying to say, whenever we have this callback function and we pass it to some other function we are giving control of our function(our piece of written code to some other code)

api.createOrder(cart, function() {
    api.proceedToPayment()
})

// Later we will see how this inversion of control is handled in our code.