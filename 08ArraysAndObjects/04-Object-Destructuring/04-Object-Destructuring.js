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

// The data which we require is not present in the API data but while extracting 
// API data and when we are displaying that data, the data should not be displayed
// as undefined

// console.log(createdYear, heading, characters, num1);
// Error: num1 is not defined
// console.log(cartoonData.num1);
// Undefined

// We will get the result of undefined because this "num1" property is not present
// inside this data. But sometimes we require some data but that data is not present
// inside API data but for users we don't want to display this "undefined". So, that
// time we can give default values

// Setting default values :
// Inside our object, we have given "NoOfEpisode", inside this we have given
// reviews, ratings etc. Now we have "NoOfEpisode" but we don't know when it was
// completed (don't know the date)
// endEpisodeDate is undefined but whenever user extracting the data we want to
// display them a date, we can easily give default date for this one
// console.log(cartoonData.endEpisodeDate); // undefined

// This property is not available in my API but we want to display it to our user
// const {endEpisodeDate="1970-09-01"} = cartoonData;
// console.log(endEpisodeDate); // 1970-09-01

// Rename it to endDate 
const { endEpisodeDate: endYear="1970-09-01" } = cartoonData;
// console.log(endEpisodeDate); // Error: endEpisodeDate is not defined
console.log(endYear); // 1970-09-01

// Set default value of already existing object to "empty array"
// 1. no property = default value will be displayed
// if property and value is present and default values is assigned then object 
// property value will be displayed, default will be ignored.
const { famousCharacters:character = [] } = cartoonData;
console.log(character);


