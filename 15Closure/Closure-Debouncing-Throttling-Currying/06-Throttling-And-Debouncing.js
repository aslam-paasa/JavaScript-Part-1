// Debouncing and throttling are techniques used in web development to control the
// rate at which certain functions or actions are executed in response to events
// like user inputs or browser events.

// Ek search baar m maine 5 words type kiye "abcde"  to console m 5 baar
// "calling api" log print hua. Hum iss log ko api call k tarah smjh skte hai
// Jb kvi v hm uss searchbar m type krte hai to har ek "keystroke" k liye api call
// ho rha hai.

// Ab har "keystroke" pe api call hota h to server pe load aata hai, isliye 
// api call mujhe reduce krna hai. To yha pe mai "debouncing technique" ka use
// kr skta hu

/* In a search bar, you can use debouncing to deplay sending an API request until
   the yser has finished typing or paused for a moment. This prevents excessive 
   requests for each keystroke.
*/

// This is my JS Code jiske har input pe hm "callAPI()" function call kr rhe hai

// Ab isse hum debounce/optimize krnge aur "debounce" function ko implement krnge
// closure ka use kr k
// Iss debounce function m 2 chije pass krnge :
// 1. "func" : function pass krnge jisko debounce krna hai
// 2. "delay" : Kitne second m delay krna hai
// Note : "Closure" m hm outer function k andr inner function pass krte hai

// Ab humein API reduce krna h to somehow api call ko delay krna pdega
// To delay krne k liye "setTimeout()" ka use krnge 
// Aur iss setTimeout() m hm "func" function ko call krnge but not immediately, 
// after some delay. So, if we pass "1" sec to "1sec" baad ye "func" function call
// hoga

// const debounce = (func, delay) => {
//     return function() {
//         setTimeout(() => func(), delay)
//     }
// }

// Ab ye jo "setTimeout()" h ye "unique id" return krta hai, to uske hm ek variable
// m hold krwa lete hai i.e. "debouncing". Aur iss debouncing ko hm apne
// outer function m bna lete hai : "let debouncing;" and isko inner function m
// assign kr lenge : "debouncing = setTimeout(() => func(), delay)". Ab uniqueId
// "debouncing" variable m hold hoga aur iss "uniquqId" ka use kr k hm iss
// setTimeout ko cancel krnge

// const debounce = (func, delay) => {
//     return function() {
//         debouncing = setTimeout(() => func(), delay)
//     }
// }

// Jb iss inner function ko call kr rhe hai aur debouncing ki value pehle se exist 
// krti hai to hmlg usko clear out kr denge by using "ClearTimeout" and usme
// debouncing pass kr dnge : "clearTimeout(debouncing)".
// Aur ye humaara basic implementation tyr ho gya hai debounce function ka

const debounce = (func, delay) => {
    let debouncing;
    return function() {
        clearTimeout(debouncing)
        debouncing = setTimeout(() => func(), delay)
    }
}

const callAPI = function () {
    console.log("calling api...");
}

// Har ek keystroke pe mai api call kr rha hu to iss API call ko mai debounce
// karunga
// Iske liye mai ek aur function bna lunga jisme mai debounce use krnge aur
// usme hm ye "callAPI" function pass krnge aur usko delay krnge. Then usko
// hm kisi m hold krnge
const debouncedAPI = debounce(callAPI, 500);


// Upar mai hmne bass function ko hold karwaya h, call nhi kiya hai
// Ab yha pe mai "callAPI()" ko use krne k jagha "debouncedAPI()" ko use krunga
document.getElementById('search-input').addEventListener('input', function (e) {
    debouncedAPI()
})


// Ab hm UI Searchbar m within 1/2 sec k kitne v keystroke kre wo ek hi request
// hit karega.
// Jb kvi maine "abc" type kiya turant, to jb "a" type kiye to ye line nhi chala
// i.e. clearTimeout(debouncing), qki debouncing exist nhi krta tha, uske baad
// ye setTimeout chala aur isne "func()" function ko after 500ms baad call kiya
// Ab 500 ms k under maine "b" v type kr diya, ab ye "func()" function phir se
// chala, aur jb maine "b" type kiya tb "debouncing" ki value exist krti thi qki
// maine 500ms k andr hi type kiya tha. Ab qki exist krti thi iss "debouncing" ki
// value to ye timer discard ho jaega, aur fir se hm "c" type krnge 500ms k andr
// to wo timer fir se dicard ho gya. To ab "abc" type kr k maine pause liya aur
// kuch aur type nhi kiya, to 500ms k baad finally ye "func()" function call hua
// aur timer cancel nhi hua

// Note : Jb kvi v user type krte waqt pause leta hai then uske baad API call krte hai

// To debounce ka use kr k hmlg "input" event ko immediately nhi response krte hai
// but after some delay response krte hai

// Ex: Suppose hum word document m apni document bna rhe hai aur humein auto-save 
// functionality implement krni h to uss case mai jb user typing pause krega tb
// hm debounce kr k auto-save krnge (Performance Optimization)