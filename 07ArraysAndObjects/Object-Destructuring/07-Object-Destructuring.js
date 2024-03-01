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
    // Adding function/method inside Object
    // SeriesData: function(data) {
    //     console.log(data);
    // }

    // Object destructuring - Individual data we can get
    SeriesData: function(director, producer, musicBy) {
        console.log(director, musicBy, producer="Hanna and Barbera(Default value)");
        console.log(`Tom and Jerry was directed by ${director}`);
    }
};


// We can just pass one single object to the function as an argument and then that
// we will be having multiple options

// Inside this curly braces we are passing multiple options
// Basically we are passing one argument inside this object
// So, it will be treated as one single object

// While calling this SeriesData we have passed multiple options -
cartoonData.SeriesData({
    director: "William Hanna",
    // producer: "Hanna and Barbera",
    musicBy: "Scott Bradley"
})

// This entire thing is passed inside the "SeriesData" as an argument and entire
// object that we have passed is diplayed
// Output :
// {
//     director: 'William Hanna',
//     producer: 'Hanna and Barbera',
//     musicBy: 'Scott Bradley'
//   }

// And using this single object we can do the "object destructuring". How?
// SeriesData: function(director, producer, musicBy) {
//     console.log(director, musicBy, producer);
// }