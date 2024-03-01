// Whenever we destructure we have to give the same names
// But the data which we are getting from API, we may be having the properties which
// are not matching our project. So that time we need different variable names
// How we can do that?

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

// Assigning another names
const {
    createdIn: createdYear,
    title: heading,
    famousCharacters: characters
} = cartoonData;

// console.log(createdIn); 
// Error: createdIn is not defined because name is changed to createdYear

console.log(createdYear, heading, characters);

