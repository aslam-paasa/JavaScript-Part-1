// Another way to implement :
// Yha pe "spread operator -> ...args" naa likh k, humaare paas ek special keyword
// hota hai jisko hmlg bolte hai "arguments". To iss inner function m humein 
// "rest operator" use krne ki jarurt nhi hai. Iss special "argument" keyword mai
// iss inner function ko jo v argument pass krte hai wo hmlg receive kr skte hai.
// Note : "argument" keyword v ek array hota hai to usko fir se "spread" kr skte hai
// Then "func()" m ek aur method ka use kr skte hai i.e. "apply" aur isme 2nd
// argument m directly array pass kr skte hai aur humein spread krne ki v jrurt nhi
// hai
// Note : We will see "apply" keyword later. But "apply" method ka use kr k
// hmlg function call kr skte hai aur 2nd argument m saare argument as a array
// pass kr skte hai
// "apply" method ko generally hmlg use krte hai method ko call krne k liye with
// different differnet object. (later)
// To "apply" method mai iss "func()" function ko kn call kr rha hai wo pass krna 
// hota hai. To kn call kr rha hai usko hm access kr skte hai "this" keyword ka use
// kr k aur "this" ki reference ko hold krwa lete ha "ctx" variable mai aur "ctx"
// ko hmlg 1st argument m pass kr lenge.

// To humaare case m iss function ko kn call kr rha hai?
// debouncedAPI()
// To humaare case m "this" refer krega "window" ko means ek function jb dusre
// function ko call krta hai to window ko refer krta hai default
const debounce = (func, delay) => {
    let debouncing;
    return function() {
        const args = arguments;
        const ctx = this;
        clearTimeout(debouncing)
        debouncing = setTimeout(() => func.apply(ctx, args), delay)
    }
}

const callAPI = function (term) {
    console.log("calling api...", term); // calling api...abc
}

const debouncedAPI = debounce(callAPI, 500);

document.getElementById('search-input').addEventListener('input', function (e) {
    debouncedAPI(e.target.value)
})

