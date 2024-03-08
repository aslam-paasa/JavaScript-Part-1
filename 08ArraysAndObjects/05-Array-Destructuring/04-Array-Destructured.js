// Nested Array
const cartoonData = [
    {
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
        charName: function(character1, character2) {
            // console.log(`${this} Most lovable characters are ${this.famousCharacters[character1]}${this.famousCharacters[character2]}`);
            return [this.famousCharacters[character1], this.famousCharacters[character2]];
        }
    }
];


// ES6 Array Destructuring
const [data] = cartoonData;

// Object Destructuring
const {famousCharacters} = data;

// Nested Array
const[a,b,[c,d, ,f,g,h = "apple", i = "main characters"]] = famousCharacters;
console.log(a,b,c,d,f,g,h,i); // Tom-Cat Jerry-Mouse S p i k e