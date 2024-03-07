/*Closure :
 - A closure is the combination of a function bundled together (enclosed) with
   references to its surrounding state (the lexical environment).
 - In other words, a closure gives you access to an outer function's scope from
   an inner function
   
   Lexical Environment/Scope in JS :
 - "Lexical Scope" is the ability for a function to access varible from the parent
   scope.
 - We call the child function to be lexically bound by that of the parent function.
*/ 



// Suppose mujhe ek function bnana hai jo value increment kre

// let count = 0;
// function increment() {
     // let count = 0;
//     count = count + 1;
//     return count;
// }

// console.log(increment());   // 1    // 1
// console.log(increment());   // 1    // 2
// console.log(increment());   // 1    // 3

// Teeno baar "1" print hua h, but aisa kyu?
// Qki hmlg count ko baar baar reinitialize kr rhe hai, means count har baar reset
// ho jaa rhi hai "0" pe.
// But mai chahta hu -
// 1
// 2
// 3
// Aisa print ho. Aisa krne k liye "let count = 0;" ko "increment()" function k
// bahar rkh denge i.e. global scope.

// But there is a problem in this code.
// Iss chij ko achieve krne m maine apne Global Scope ko pollute kr diya that means
// "count" throughout the application accessible hai. Ho skta hai somehow humare
// application m koi dusra function hoga jo iski value modify kr de
// Aur iss count ko sirf "increment()" function use kr rha hai to isko Global q rkhe
// Ye acchi practice nhi h, isliye humein iss count ko function k andr hi rkhna h
// aur iss chij ko "data encapsulation" bolte hai. Hmlg ko iss count ko encapsulate
// krna hai function k andr aur ye count iss function k andr hi modify honi chaiye

// Problem : Kahi v bahar se humaara application modify nhi hona chaiye, humein
// somehow iss variable ko iss function k andr encapsulate krna hai taaki iss
// count ki value sirf iss function k andr se hi modify ho sake and ye count
// throughout the application accessible naa ho. 

// Solution: Closure
// Closure ka use kr k hum "data-encapsulation" achieve kr skte hai jo ki ek acchi
// programming practice hai.
// Step-1 : "let count = 0" ko utha k "increment()" k andr daalna hai
// Step-2 : "increment()" k andr ek aur function bnana hai and -
//          (a) count = count+1;
//          (b) return count;
// Ye dono ko hm inner function k andr move kr denge
// Step-3 : "return" the inner function. 
// Ab "increment()" iss inner function ko return kr rha hai
// Step-4 : increment() ko ek const m hold kr lenge and then isse call krnge
// Note : "Data-Encapsulation" achieved using "Closure"

function increment() {
    let count = 0;
    return function() {
        count = count + 1;
        return count;
    }
}

const myInc = increment();
console.log(myInc());   // 1
console.log(myInc());   // 2
console.log(myInc());   // 3

// When inner function has access to outer function scope wherein the inner function
// can access variable that are defined in outer function then that inner function
// along with outer environment(lexical environment) forms a closure.