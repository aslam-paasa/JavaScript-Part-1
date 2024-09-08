/**
 * Async JS:
 * 1. Async JavaScript [done]
 * 2. Fetch API [done]
 * 3. Axios (or other HTTP libraries) [done]
 * 4. Callbacks
 * 5. Promises
 * 6. Async/Await
 * 7. Event Loop
 * 8. Callbacks vs Promises vs Async/Await 
 * 9. Generators
 * 10. Error Handling in Asynchronous Code
 * 11. Web Workers
 * 12. AJAX 
 * */ 

/**
 * Story of Async JS:
 * => Aisa koi v code jisme kuch time lgta hai, JS mai usse by default
 *    async code maan kar side stack m daal diya jaata hai.
 * 
 * a. setTimeout()  : setTimeout ka code kuch der baad chlta hai
 * b. setInterval() : setInterval ka code kuch der baad chlta baar baar
 *                    ek particular interval k time mai.
 * c. Fetch API     : Ye kis aur URL(API) par jaa kar kuch data laega
 *                    ya data humaare paas se uss URL(API) par le jaega
 * d. Axios         : Ye v wahi krega jo fetch krta hai, bss ye thoda
 *                    jyda developer friendly hai.
 * e. promise etc   : Iske andr jo code likhnge wo apna kaam krega, aur
 *                    ye khud side stack m chla jaega uss code ko lekar
 *                    aur jb andr se code ko resolve kiya jaega tb ye
 *                    chlega.
 * => Ye sabhi use hi tab kiye jaate hai jb humein kuch aisa krna ho
 *    jisme time lgega.
 * */ 


/**
 * 1. setTimeout():
 * => It is a fn which takes two inputs:
 *    (a) fn
 *    (b) timer on which our fn depends.
*/

// console.log("1");
// console.log("2");
// setTimeout(function() {
//     console.log("3");
// }, 1000);
// console.log("4");

/**
 * Console:
 * => 1 -> 2 -> 4 -> 3
 * => Pehle main stack khali hota hai fir side stack process hone k
 *    baad main stack m aata hai aur fir wo khali hota hai.
*/


/**
 * 2. setInterval();
 * => Almost same as setTimeout, but the only difference is usme 
 *    humaari fn x-sec k baad chal rhi, but isme humaari fn har x-sec
 *    k loop m chalegi.
*/

// console.log("1");
// setInterval(function() {
//     console.log("2");
// }, 1000);
// console.log("3");


/**
 * Q. How to stop setInterval()?
 * => 1. Store it in a variable.
 *    2. Pass that variable in a clearInterval()
*/

/**
 * Way-1:
*/
// var humaraInterval = setInterval(function() {
//     console.log("Hey Interval!!!");
// }, 3000);

// clearInterval(humaraInterval);

/**
 * Way-2:
*/
let count = 0;
var ourInterval = setInterval(function() {
    if(count == 3) {
        clearInterval(ourInterval);
    }
    count++;
    console.log(count);
}, 3000);


/**
 * 3. Fetch API:
*/