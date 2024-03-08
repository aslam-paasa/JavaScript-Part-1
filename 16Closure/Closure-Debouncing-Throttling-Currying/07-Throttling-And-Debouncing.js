// 1. Ho skta hai ki ye jo return function hai isko call kr to kuch argument pass
// kr rhe honge
// 4. To Jitne v mai argument pass kr rha hu usko mai "spread operator" use kr k
// wo argument hold kr skta hu i.e. "...args". Aur iska console.log() kre to
// humein array dikhega aur usme [1,2,3] milega. To hlg jitne arguments pass kr
// rhe hai "spread operator" kr k hm array m hold krwa skte hai
// 5. But iss "func()" function ko mujhe individually argument pass krna hai to
// agan mai argument ko "spread out" kr dunga. Kisi variable m hold kr k "spread out"
// kr dunga i.e. const myargs = args then again hm "spread" kr lenge 
// Aur iss tarike se hm jo argument hm "debounceAPI" ko pass kr rhe hai usko handle
// kr skte hai
const debounce = (func, delay) => {
    let debouncing;
    return function(...args) {
        console.log(args);
        const myargs = args;
        clearTimeout(debouncing)
        debouncing = setTimeout(() => func(...myargs), delay)
    }
}

// 3. To jo argument hm niche pass kr rhe hai i.e. (1,2,3) wo iss "func()" function
// ko v pass krna hai
// 8. Ab yha pe mai ko console.log() kr rha hu, yha pe mai receive kr skta hu
// to console m mai "calling api" k saath "term" ko print kr skte hai means jo
// v argument pass/type kr rhe hai usko print kr skte hai
const callAPI = function (term) {
    console.log("calling api...", term); // calling api...abc
}

const debouncedAPI = debounce(callAPI, 500);

// 2. For example, (1,2,3)
// 6. Yha pe jo v input mai type kr rha hu uski value m pass krta skta hu
// Uske liye "event.target.value" likh skte hai
document.getElementById('search-input').addEventListener('input', function (e) {
    debouncedAPI(e.target.value)
    // debouncedAPI(1,2,3)
})