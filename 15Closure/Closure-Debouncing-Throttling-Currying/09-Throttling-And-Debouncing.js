// Throttling :

// Debouncing m hmlg event ko respond krte hai, not immediately but after some delay
// But throttling m hmlg immediately respond krte hai but hmlg limit kr dete hai

// Suppose mai apne window pe mouse bna rha hu. Mouse ghumana v ek event hai aur 
// mouse ghumaane pe mujhe API call krna h ya kuch action perform krna hai.
// Iss case mai agar mai debouncing apply karunga to mai continuously mouse ghumaate
// rahunga aur jaise hi pause lunga tb jaake action perform hoga but ye chij mai
// nhi chahta hu qki debouncing m jb pause krte hai tb jaake API call hoti hai

// Throttling m jaise hi hum mouse ghumaenge, immediately mai response kkarunga
// event ko, mouse ghumaana ek bahut mehngi chij h to mai limit kr dunga jis aid
// se wo function call hoga

// For example, hm ek game bna rhe h aur usme enemy ko shoot krna hai, ab yha pe
// mai debouncing ka use nhi kr skta qki debouncing m mai lgattar button click krta
// hu to aur jaise hi jaake mai pause krta hu means enemy ko shoot krna band krta 
// hu tb jaake asal m goli chalegi.
// To jaise hu mai button click karu waise hi head shot lage aur agar mai lagataar
// button press krta hu to har ek button press pe shoot ni krna, mujhe iss button
// ko throttle krna hai means button ki rate of firing ko limit krna hai.


// 2) Same as debouncing with slight modification
const throttle = (func, limit) => {
    let isThrottling;
    return function() {
        const args = arguments;
        const ctx = this;

        // 6) Point 3,4 & 5 tabhi chalaenge jb humaara function throttle nhi hoga
        // Jaise hi maine enemy ko shoot kiya, to throttle nhi h humara function
        // To function immediately call hua mtlb enemy ko head shot lg gyam uske
        // baad button humaara throttle ho gya means maine isThrottling = true kr diya
        // For example, 500ms limit lagae h to wapas button kaam krega 500ms baad
        // qki 500ms baad isThrottling ki value "false" hogi and fir se ye kaam krega
        if(!isThrottling) {
            // 3) immediately shoot
            func.apply(ctx, args)
            // 4) Shoot kr diya to uske baad throttle (limit) krna hai
            isThrottling = true;
            // 5) Ab setTimeout() ka use kr k hmlg isThrottling ko false krnge kuch time baad
            setTimeout(() => isThrottling = false, limit)
        }
    }
}

function shoot() {
    console.log("Function called");
}

// 7) "1sec" per shot chahe kitna hi button click kre
const throttledShoot = throttle(shoot, 1000);

// 1) Maine ek "button click" banaya h aur uss buttonClick par mai shoot click karunga
// Ab jb shoot krnge to immediately log dikhega lekin lagaatr click krnge to limit
// mai wo kaam krega (Almost same bss thoda change hoga debouncing se)
document.getElementById("myButton").addEventListener("click", () => {
    throttledShoot()
});