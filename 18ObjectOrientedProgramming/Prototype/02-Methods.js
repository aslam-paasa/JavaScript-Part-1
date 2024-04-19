// Methods : Function inside object

const person = {
    firstName: "Mohammad",
    age: 27,
    // key: about, Value: function
    about: function () {
        // console.log("Person name is Mohammad and age is 27");
        // console.log(`Person name is ${firstName} and age is ${age}`); // Error: firstName & age is not defined
        console.log(`Person name is ${this.firstName} and age is ${this.age}`);

    }
}

// Access the function inside object :
console.log(person.about); // [Function: about]
person.about(); // Person name is Mohammad and age is 27

// But yha pe ek problem hai. Maan lo kl humne "person.firstName" change kr
// diya (Abdul) iss object mai. Aur mai about() ko run krnge fir v wo
// mujhe Mohammad dikhaega. But mai chahta hu ki "about()" m wahi print
// ho jo use ka firstName hai. (Not hardcoded)


// Note : "this" keyword ki value humein tb nhi pta lgti jb hm code likhte hai
// but humein tb pta lgti hai jb humari code run ho rhi hoti hai. Means "this"
// ki value humein "runtime" pe pta lgti hai.

// Iss function mai "this" wo object hai jo object iss function ko call kr rha
// hai i.e. "person" object. => person.about(). Means about() k andr jo
// this keyword lgi hai wo ye "person" object hai.

// "this" keyword means object. So, ye poora ka poora "person object" hai.
// Aur iss poore object mai se hm "firstName" & "age" ki value extract kr
// sakte hai.
