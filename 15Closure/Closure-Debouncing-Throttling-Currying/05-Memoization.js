// Application of Closure : Memoization

// Ye "memoizeSqaure()" ek number ki square print krega. For example, 5 => 5 *5 = 25
// Iss function m ek argument pass krnge "n" aur humein iss "n" ka sqaure find kr 
// kr dena hai. Aur iski value hold krwane k liye hum ek object bna lenge "cache"
// Aur iski value hm iss "cache[n]" object m hold krwa denge. So, jo v "n" ki value
// hogi uss naam se ek "key" create karunga isme store kar dunga aur jo value hogi 
// wo "n * n" se aaegi.
// Agar hum "n = 5" krte hai to key:value object aisi dikhegi - "5:25" 

// Ho skta hai ki "25" pehle se available ho, to agar wo phle se available h to
// usko directly return krwa denge or compute naa kre. Means niche wala cache[n]
// code chlega hi nhi/computation dobara nhi hoga aur stored value return ho jaega
// Note : "Performance increased using closure"
function memoizeSquare() {
    const cache = {};
    return function(n) {
        if(n in cache) {
            console.log("return from cache");
            return cache[n];
        }
        cache[n] = n * n;
        console.log("calculating...");
        return cache[n];
    }
}

const memoSquare = memoizeSquare();

console.log(memoSquare(5));
console.log(memoSquare(5));