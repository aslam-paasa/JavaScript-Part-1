/**
 * Agenda:
 * 1. Understanding: this, call, apply, bind
 * 2. Prototypal Inheritance
 * 3. Closures
 * 4. Event Delegation
 * 5. Higher-Order Functions
 * 6. Error Handling (try...catch blocks)
 * 7. Custom Events
 * */ 


/**
 * Keyword:
 * => Keyword means aisa word jiska koi fix meaning ho programming
 *    language mai.
 * => for, if-else, this, etc.
 * 
 * this keyword:
 * => this keyword JS mai one of the most suspenseful keyword hai.
 * => this ki value baar baar badal skti hai alag alag conditions mai,
 *    saari conditions ko seekh jao to this ko smjh jaoge.
 * 
 * Understand Case Scenarios of "this" in:
 * 1. Global : window
 * 2. function : window
 * 3. method : object
 * 4. function inside method(es5) : window
 * 5. function inside method(es6) : object
 * 6. constructor fun mai this ki value : new blank object
 * 7. Event Listener main this ki value : that element jispar event listener lga ho
*/

/**
 * 1. global: window
 * => Kisi v function k andr nhi hai to global scope mai hai.
*/
console.log(this);

/**
 * 2. function: window
 * => Function Scope k andr hai, jo "window" ko refer kr rha hai.
*/
function fnScope() {
    console.log(this);
}
fnScope();

/**
 * 3. method: object
 * => Kisi method k andr agar this check krnge to wo uska parent object
 *    de deta hai, jiss v object k andr wo hota hai i.e. "this == obj". 
 * => "this" ek object hai to ab hm aise likh skte hai.
 * 
 *     name: function() {
 *        console.log(this.age);
 *     }
*/
var obj = {
    name: function() {
        console.log(this.age);
        console.log(this.email);
    },
    age: 25,
    email: "aslam123@gmail.com"
}
obj.name();


/**
 * 4. Function inside method(ES5) - window
 * => It means method k v andr ek aur function bnana hai.
 * => obj2.sayName() k fn ko chalaenge to sayName() fn chalega, jiske
 *    wajah se childFnc() chalaega, jiske wajah se console.log(this);
 *    chalega.
 * => But again it is returning "window" as value. It's a huge problem.
 *    a. sayName() pe "this" ki value "object" hai.
 *    b. childFnc() pe "this" ki value "window" hai. So, yhe pe ab
 *       hm this.name, this.age nhi likh skte hai. Means iske andr
 *       hm koi v aisa code nhi likh skte jo "this" se related ho. 
*/

var obj2 = {
    sayName: function() {
        console.log(this.name); 
        function childFnc() {
            console.log(this.name);
        }
        childFnc();
    },
    name: "this can access name variable"
}
obj2.sayName();


/**
 * 5. Function inside method (ES6) - object 
 * => ES6 method i.e. Arrow Function which will solve our previous prob.
 * => obj3.sayName() k fn ko chalaenge to sayName() fn chalega, jiske
 *    wajah se child() chalaega, jiske wajah se console.log(this);
 *    chalega.
 * => This arrow function will solve our problem:
 *    a. sayName() pe "this" ki value "object" hai.
 *    b. child() pe v "this" ki value "object" hai. 
 *    c. grandChild() pe v "this" ki value "object" hai
 * => Basically they are referring to the same parent object. 
 * => Aur aisa isliye ho rha hai qki ES5 function humaare "this" ki value
 *    ko rebind kr deta hai "window" se. But arrow function kehta hai
 *    ki "this" ki value parent se lo.
 * 
 * 
*/
var obj3 = {
    sayName: function() {
        console.log(this);
        const child = () => {
            console.log(this);
            const grandChild = () => {
                console.log(this);
            }
            grandChild();
        }
        child();
    }
}
obj3.sayName();

/**
 * Issue:
 * => Iss case m "this" ka parent obj4 hai, jo window m hai, isliye
 *    ye "window" return karega.
*/
var obj4 = {
    sayName: () => {
        console.log(this);
    }
}


/**
 * Solution:
 * => Isliye always yaad rkha hai ki "method" mai humesa ES5 fn use
 *    karein aur uske andr humesa ES6 fn use kre.
*/

var obj5 = {
    sayName: function() {
        console.log(this);
        const child = () => {
            console.log(this);
        }
        child();
    }
}


/**
 * 6. Constructor Function
 * => Aise fn jiske "new" keyword k help se chla dete hai usko
 *    constructor function kehte hai.
 * => "this" ki value - new blank object
 * => Agar main apne fn ko "new" keyword k help se chala du aur ek
 *    variable m store kr du to iski value jo jaati hai "blank object".
*/

function add() {
    console.log(this);
}
add(); // this - window
const ans = new add();  


/**
 * 7. Event Listener
 * => Event Listener m this ki value, addEventListener() k pehle jo
 *    selected element hai wo hota hai humesa. Means "this" ki value
 *    wo element hai jispar event listener lga ho.
 * => Ex: this => button
*/

document.querySelector("button")
.addEventListener("click", function() {
    console.log(this);
})
