// Just imagine we have group of people and inside this
// group every person is having different characteristics,
// behavior, planning, and thoughts. They all are working
// in a group, but when it comes to individual person everything
// will be different.

// When we define them as individual person, they can easily -
// separate their thought, ideas, planning & behavior etc.
// So, sometimes it is also important to segregate the person based on the work
// they have done so that we can give proper credit to that person who has done
// the work.

// Similarly in JS we have objects and inside objects we are having lots of data
// And for every property we will be having different data and also data can be of
// different types - integer, string, array, object etc. But they always belong
// to one object

// Sometimes it is very important to separate all of the data. So, we can separate them
// by their property names :
// (a) title
// (b) createdIn
// (c) createdBy
// (d) isAired
// (e) famousCharacter
// (f) books

// Object Destructuring :
// In JS, Object Destructuring allows us to extract data from arrays, objects and
// set them into new distinct variables


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

// 1) Before ES6 how we are used to destructure objects?
// const createdIn = cartoonData.createdIn;
// console.log(createdIn); // 1940

// const createdBy = cartoonData.createdBy;
// console.log(createdBy); // 1940

// 2) After ES6, object destructuring becomes very easy
// Using Object destructuring, inside curly braces we can pass property names
// And we have to assign the object from where we are taking the property
// Why Curly braces? This is how we are creating the objects
const {createdIn, createdBy, title} = cartoonData;
console.log(createdBy, createdIn, title);

// Previous code is giving the same result then why should we even use object destructuring
// When we are working in real-world project we cannnot write this manual data
// So, for those projects, data will come from APIs or third party libraries
// For example, if we work with Menu API/Movies API/Weather API, we are getting the
// data from API. So most of the time the data we are getting from APIs are in the
// form of Objects. So that time Object destructuring will save lots of time because
// we don't have to define separate variables, we can easily wrap inside the curly
// braces and whatever data we want, only that data we can get using object destructuring
// in less line of code. That is the reason Object Destructuring is introduced in ES6.

// Why Object Destructuring?
// To deal with API data.

