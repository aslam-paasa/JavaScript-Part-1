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

// Now inside the object we have an array and also we are having another object.
// If we want to get this data -
// console.log(famousCharacters);
// Error : famousCharacters is not defined 

// We will get one error because this "famousCharacters" is present inside object.
// So, normal way to get this data is -
// Step-1 : Write objectName : "cartoonData"
// Step-2 : Write the objectName inside "cartoonData" i.e. "famousCharacters"
// console.log(cartoonData.famousCharacters); 

// As we learned, while dealing with API, writing this "cartoonData.famousCharacters"
// is frustrating as well as irritating.

const { createdIn, createdBy, title, famousCharacters, isAired } = cartoonData;

// Extracting arrays from object
console.log( famousCharacters);

