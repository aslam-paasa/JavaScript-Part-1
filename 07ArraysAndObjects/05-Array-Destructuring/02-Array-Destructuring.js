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
    }
];


// To deal with api data

// Old way before ES6
console.log(cartoonData[0]);
console.log(cartoonData[0].famousCharacters[0]);

// ES6 Array Destructuring
const [data] = cartoonData;
console.log(data);  // Now our data is object

// Object Destructuring
const {famousCharacters} = data;
console.log(famousCharacters);  
// Just accessed object outside the array

// Access first 2 variables inside this famousCharacters
// const [primaryCharacter, secondaryCharacter] = famousCharacters;
// console.log(primaryCharacter);
// console.log(secondaryCharacter);

// Will this change our original array?
// No! It is not going to mutate or change our original array
// We are just destructuring some parts and displaying in a result
// console.log(famousCharacters);

// Whatever variable we will give, based on the "order" these variable will be 
// assigned to "primaryCharacter" & "secondaryCharacter" and when we display
// according to that we will be getting the result. So, everything will be done 
// in order in array destructuring. But it was not the case in object destructuring,
// In object destructuring we can destructure the elements in random order as well.

// Now if we remember the case of practical exam, 3rd student absent then we move
// to the 4th student. Similarly, in this example, we want to skip the "Jerry-Mouse"
// and display "Spike" but in array everything will be happening in order

// Creating hole
const [primaryCharacter, ,secondaryCharacter, , , , test] = famousCharacters;

console.log(primaryCharacter); // Tom-Cat
console.log(secondaryCharacter); // Spike
console.log(test); // Jeannie


// Why this is important?
// Whenever we are dealing with larger API data, sometimes we don't want to access
// all the variables, we don't want to destructure it and we don't want to use it
// inside our project, so simple skip the data or creating hole and whichever data
// we want to value we want to use in our project we can use and display it.

