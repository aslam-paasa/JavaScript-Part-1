// Mutating or Swapping 

let m = 8, n = 9, temp;
console.log(m, n);  // 8 9

temp = m; // temp is 8
m = n; // m = 9
n = temp; // n = 8
console.log(m, n);  // 9 8

// How can we do similar swapping in array
let array1 = [4,5];
// Destructure
let[a, b] = array1;
console.log(a, b);  // 4 5
// console.log(b, a);  // 5 4
[a, b] = [b, a];
console.log(a, b);  // 5 4

// Similar way we just have to swap "Tom-Cat" and "Jerry-Mouse".
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


// This is cartoonData, maybe in some episode "Tom-Cat" is not there yet so that
// time "Jerry-Mouse" should be treated as "primaryCharacter" and if "Jerry-Mouse"
// is not there and "Tom-Cat" is there then "Tom-Cat" should be treated as 
// "primaryCharacter". 

// In Array, whatever first value we have that is only treated as primary or
// secondary. Now in place of "Tom-Cat" we just want "Jerry-Mouse" and in place
// of "Jerry-Mouse" I just want "Tom-Cat". Let'see how to change/swap this one :

// ES6 Array Destructuring
const [data] = cartoonData;
console.log(data);  // Now our data is object

// Object Destructuring
const {famousCharacters} = data;
console.log(famousCharacters);  

// Swapping/Mutating Elements of an Array
let [primaryCharacter, secondaryCharacter] = famousCharacters;
[primaryCharacter, secondaryCharacter] = [secondaryCharacter, primaryCharacter];

console.log(primaryCharacter); // Jerry-Mouse
console.log(secondaryCharacter); // Tom-Cat

// Adding methods
// famousCharacter => 0 : "Tom-Cat"
// famousCharacter => 1 : "Jerry-Mouse"
// data.charName(0, 1);

// console.log(data.charName(0, 1));   // [ 'Tom-Cat', 'Jerry-Mouse' ]

// Destructure
const [char1, char2] = data.charName(0, 1);
console.log(char1); // Tom-Cat
console.log(char2); // Jerry-Mouse