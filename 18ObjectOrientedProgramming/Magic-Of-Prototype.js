// Note : Do this in browser
const newHero = ["hulk", "spiderman"]
console.log(newHero);

// Browser humein kuch extra information v deta hai :
// V (2) ["hulk", "spiderman]
//     0: "hulk"
//     1: "spiderman"
//     length: 2
//     [[Prototype]]: Array(0) => Yhi wo prototype hai jiske baare m hm pdhnge


// Note : JS ka "prototypal" behavior hai, wo jldi haar nhi maanti hai. Agar
// wo kuch expect kr rha hai/dhund rha hai to easily give up ni krta, wo
// uske aur ek layer upar jaa k dkhta hai. To wo parent, grandparent, etc
// ko access krta hai jbtk usko "null" value naa mil jae. Aur isi prototypal
// behavior se link ho k humara "this" keyword kaam krta hai, arrow function
// k andr "this" ka access nhi hota qki ye prototype waha pe aa jaata hai.

// Prototype humein "new" keyword, "class", "this", "prototypal inheritance"
// JS mai ye sb isi k through aa rha hai aur kaam kr rha hai. (behavior)


// V (2) ["hulk", "spiderman]
//     0: "hulk"
//     1: "spiderman"
//     length: 2
//   V [[Prototype]]: Array(0) => Yhi wo prototype hai jiske baare m hm pdhnge
//     > at: f at()
//     > concat: f concat()
//     > constructor: f Array()
//     > copyWithin: f copyWithin()
//     > entries: f entries()
//     > ....
//     > ....
//     > [[Prototype]]: Object

// Agar hum iss prototype ko open krte hai to humein kuch methods mile, aur
// niche scroll kre to wapas se humein "prototype" dikh gya. Means haar
// nhi maan na hai, yha nhi mila to aur upar dkhnge, aur wha nhi mila to aur
// upar dkhnge. Aur isi ko hm "inheritance" v bolte hai.


// V (2) ["hulk", "spiderman]
//     0: "hulk"
//     1: "spiderman"
//     length: 2
//   V [[Prototype]]: Array(0) => Yhi wo prototype hai jiske baare m hm pdhnge
//     > at: f at()
//     > concat: f concat()
//     > constructor: f Array()
//     > copyWithin: f copyWithin()
//     > entries: f entries()
//     > ....
//     > ....
//     V [[Prototype]]: Object
//       > constructor: f Object()
//       > hasOwnProperty: f hasOwnProperty()
//       > isPrototypeOf: f isPrototypeOf()
//       > propertyIsEnumerable: f propertyIsEnumerable()
//       > toLocalString: f toLocalString()
//       > toString: f toString()
//       > valueOf: f valueOf()
//       > __defineGetter__: f __defineGetter__() 
//       > __defineSetter__: f __defineSetter__()
//       > ....
//       > ....
//       > __proto__: (...)
//       > get __proto__: f __proto__()
//       > set __proto__: f __proto__()

// Ab iss prototype ko agar hum open krte hai to iske andr v bahut saari chije
// mil rhi hai, but wo pehle wali chije nhi hai, something new hai. Isme
// ye getter & setter proto apne aap mai ek function definition hai aur inn
// function definition k andr mai apne aap mai v ek prototype hai.


// Ye prototype rukta kaha pe hai?
// JS k andr har chij apne aap mai ek object hai to Array v ek object hai.
// object ka koi parent nhi hota hai aur object k andr saari property uski
// apni rehti hai, to object k reference null aata hai.

// Array  --> Object --> null
// String --> Object --> null

// Har chij apne aap mai ek object hai, aur jo property object k paas available
// hai wo saari property String, Array k paas v available hai. Inheritance
// k wajah se parent, grandparent k saari property obviously milegi.


// Q) Function object hai ye function function hi hai?

function multiplyBy5(num) {
    return num*5;
}

// multiplyBy5(5);
multiplyBy5.power = 2; // => Is this possible? Yes!, dot(.) object k saath lgta hai
console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // => Can we access ".prototype"? Yes!, {}
// In JS, everything is an object, function function v hai aur object v hai.
// Means function k andr jo v functionality hai wo function k tarah behave 
// krti hai lekin hum chahe to kisi ko v object k tarah v behave kra skte hai.


// Array  --> Object --> null
// String --> Object --> null
// Function --> Object --> null

// Bahar se humne ek username pass kiye aur andr username bnaya
// Ab yha pe confusion ho skta hai ki kn sa username mera hai, isliye yha
// pe hm "this.username" use kr lete hai.
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// Injecting our own function 
createUser.prototype.increment = function() {
    this.score++;
}
createUser.prototype.printMe = function() {
    // "this" => means "jisne" v score pucha hai uska score bta do 
    console.log(`Score is ${this.score}`);
}

// createUser ko kaise pta ki jb hm increment score++ krge to 25 ko bdhana 
// hai ya fir 250 ko bdhana hai. Isse idea nhi hai ki kaise value ko
// increment krna hai ya kiss value ko increment krna hai
// Avi iske paas context nhi hai means isse nhi pta kisne aawaz lgayi h score++ k liye
// Yha pe hm "this" lgaenge means jisne v bulaya uska value bdhao

// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);

// Problem : Cannot read properties of "undefined" means properties aai hai
// but humne isse btaya nhi ki additional properties aayi hai, aur ye
// btane ka kaam "new" keyword krta hai

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);
chai.printMe();


// Here's what happens behind the scenes when the new keyword is used :

// A new object is created : The new keyword initiated the creation of a
// new javascript object.

// A prototype is linked: The newly created object gets linked to the prototype
// property of the constructor function. This means that it has access to
// properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the
// specified arguments and this is bound to the newly created object. If no
// explicit return value is specified from the constructor. JavaScript 
// assumes this, the newly created object, to be the intended return value.

// The newly object is returned: After the constructor function has been 
// called, if it doesn't return a non-primitive value (object, array, function,
// etc.). the newly created object is returned.