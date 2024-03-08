// Mutating Variables
let title = "Tom and Jerry - Childhood favourite"
const cartoonData = {
    id: 1,
    title: "Tom and Jerry",
    createdIn: "1940",
    createdBy: "William Hanna and Joseph Barbera",
    isAired: true,
    famousCharacters: [
        "Tom-Cat",
        "Jerry-Mouse",
        "Spike",
        "Tyke",
        "Toddles Galore",
        "Quacker",
        "Jeannie",
        "Mammy Two Shoes",
    ],
    books: {
        English: {
            book1: "There's a Mouse Hiding in This Book",
            book2: "This Book Is Not a Piece of Cheese!",
        },
        Hindi: "Available in hindi",
        French: "",
    },

    channel: "cartoon network",
    NoOfEpisode: 2736, // random number
    reviews: {
        tv_review: {
            rating: 8.2,
            NoOfRatings: 564345, // random number
            NoOfFeedback: 0, // random number
        },
        IMDb: {
            rating: 8.4,
            NoOfRatings: 657678, // random number
            NoOfFeedback: 35465, // random number
        },
    },
};

// What is mutating variables in isolation?
let a = 45;
let b = 32;

const obj = {a: 11, b: 17};
// Till now we have seen whenever we want to destructure the object in curly braces
// We have to give the same variables name i.e. same property names whatever is
// present inside the object

// Now I want to destructure this one

// const {a,b} = obj; // Error : cannot redeclare block-scoped variable
// let {a,b} = obj; 

// {a,b} = obj; 
// Error : Declaration or statement expected. This follows a block of statemnets,
// so if you intended to write a destructuring assignment, you might need to wrap
// the whole assignment in paranthesis
// So, whenever is JS will be seeing this curly braces, it will expect code block

// If the variables are already defined and same variables are used as properties
// then we cannot destructure object and when we do this one => {a,b} = obj; 
// we cannot write let or const. But when we wrap them inside curly braces then JS
// will be expecting block of statement, then how we can do?
// {a,b} = obj; <= This entire thing including our object, just wrap inside a
// paranthesis -
// ({a,b} = obj);

// While destructuring if we want to change the variable value then how we can do that?
({a,b} = obj);
console.log(a, b);  // 11 17


// Reallife example :
// (1) title (outside object)
// (2) title (inside object)

// ({ title }=cartoonData) // If we comment it out then title will change
console.log(title);