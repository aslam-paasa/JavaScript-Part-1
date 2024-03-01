// Nested Objects

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


// const { books } = cartoonData;
// console.log(books);

// Output :
// {
//     English: {
//       book1: "There's a Mouse Hiding in This Book",
//       book2: 'This Book Is Not a Piece of Cheese!'
//     },
//     Hindi: 'Available in hindi',
//     French: ''
//   }


// Nested Object - Destructuring Books
// const{ 
//     books: { English, Hindi, French },
// } =  cartoonData;
// console.log(English, Hindi, French);

// Output :
// {
//     book1: "There's a Mouse Hiding in This Book",
//     book2: 'This Book Is Not a Piece of Cheese!'
//   } Available in hindi 


const{ 
    books: { English: {book1, book2}, Hindi, French },
} =  cartoonData;
console.log(book1, book2, Hindi, French);

// Output :
// There's a Mouse Hiding in This Book This Book Is Not a Piece of Cheese! Available in hindi