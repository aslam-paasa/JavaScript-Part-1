/* 
Function Currying is a functional programming technique in which a function is
transformed into a sequence of functions, each function taking a single argument
*/ 
console.log("currying");

// Non-Currying function
function add(a,b,c) {
    return a + b + c;
}
add(1,2,3);

console.log("Addition without Currying : " + add(1,2,3));

// Currying function (using closure)
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
curryAdd(1)(2)(3);

console.log("Addition with Currying : " + curryAdd(1)(2)(3));


// Currying function (using closure) - Version-2
// Note : Single statement ho to return lagaane ki jarurt nhi hai
const curryAddVersion2 = (a) => (b) => (c) => a + b + c;

curryAddVersion2(1)(2)(3);

console.log("Addition with Currying : " + curryAddVersion2(1)(2)(3));


// Real-life Example :
// Humaari clothing store hai aur isme hm kuch price pass krnge
// Aur iske andr ek function pass krwaenge
// Jb koi cutomer aaenge clothes kharidne to iss "price" pe mai kuch discount dunga
// To kitna % discount dunga wo "discountPer" mai inner function m pass karunga
// And then ye function "discountedAmount" return krega

// Factory function
function dressPrice(price) {
    return function(discountPar) {
        return price - (price * discountPar / 100)
    }
}

// Calculated Amount
const calcAmount = dressPrice(100);

// customer-1
console.log(calcAmount(20)); // customer-1 has to pay 80 only

// customer-2
console.log(dressPrice(100)(30)); // customer-2 has to pay 70 only

// "calAmount" m humne price set kr diya aur fir aage usko reuse kr rhe hai uspe
// discountedAmount calculate krne k liye

// Note : Isse "Function Factory" v bolte hai. Means "dressPrince()" naam se ek
// factory bna di aur uske baad hm sirf reuse kr rhe hai means original Cloth price
// k upar alag alag customer ko alag alag discount/output mil rha hai