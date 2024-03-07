// Now a days when we are getting data from 3rd party libraries or if we want to
// display data from API, for safer side we will be using this operator so that
// we will not be getting any error

// Introduction : 
// The Optional Chaining Operator (?.) is a feature introduced in ECMAScript 2020
// (ES11/ES2020) that simplifies the process of accessing properties or calling
// methods on potentially null or undefined values.

// Before the introduction of optional chaining, attempting to access a property
// or call a method on a null or undefined value would result in a TypeError.

const cartoonData = {
    id: 3,
    title: "Doraemon",
    createdIn: "1969",
    createdBy: "Fujiko F. Fujio",
    isAired: "true",
    famousCharacters: [
        "Doraemon",
        "Nobita Nobi",
        "Shizuka Minamoto",
        "Takeshi Gian",
        "Suneo Hokekawa",
        "Dekisugi",
    ],
    languages: {
        English: "English Cartoon",
        Hindi: "Hindi Cartoon",
    },
    translation: {
        Eng: "",
        Hindi: "Not translated",
    },
    channel: "disney",
    NoOfEpisode: 5678, // random number
    cartoonReview: {
        reviews: {
            tv_review: {
                rating: 8.8,
            },
        },
        movie_ratings: {
            NoOfRatings: 0, // random number
            NoOfFeedback: 341,
        },
        ott_ratings: {
            NoOfRatings: 2000,
            NoOfFeedback: 46547, // random number
        },
    },
};
const { cartoonReview } = cartoonData;
console.log(cartoonReview);

// let person = {
//     name: "Mohammad",
//     address: null
// }

// console.log(person);
// console.log(person.name);
// console.log(person.address);

// I am not aware that this API object "name" or "address" is undefined or null
// Now from this "address" we are trying to access this "city" property.
// console.log(person.address.city); // TypeError: Cannot read properties of null (reading 'city')

// It is trying to access city from null
// person.null.city
// As address is null then the entire thing inside it is null

// In this kind of situation we will be using "optional chaining" operator
// console.log(person.address?.city);  // undefined because we are not having city inside this person object

// Let's create city and then access 
let person = {
    name: "Mohammad",
    // address: {
    //     city: "Mumbai",
    // }
    address: null,
    getAddress:function() {
        return null;
    }
}

// Instead of directly displaying the error, we can display undefined
console.log(person.address?.city); // undefined
console.log(person.getAddress()?.city);  // undefined



function feedbackcount(cartoonReview) {
    const movie_feedback = cartoonReview.movie_ratings.NoOfFeedback;
    console.log(movie_feedback);

    // Default Value = 0
    const ott_feedback = cartoonReview?.ott_ratings?.NoOfFeedback ?? 0; // way-1 : Nullish Operator // 341
    // ott_feedback?.NoOfFeedback || 0; // way-1 : OR Operator // 341
    console.log(ott_feedback);
    return movie_feedback + ott_feedback;
}

const totalFeedback = feedbackcount(cartoonReview);
// feedbackcount(cartoonReview1); // ReferenceError
console.log(totalFeedback);

// Imagine we have accessed this entire data from API and we are performing all
// this operation but in that we are not having the entire "Ott_feedback" present
// inside the object but still inside the function we have written this logic
// So we are getting the TypeError as soon as we saved.
// "TypeError: Cannot read properties of undefined (reading 'NoOfFeedback)"

// How we can prevent this "TypeError"?
// Using "Optional Chaining"

// const ott_feedback = cartoonReview?.
// ott_feedback?.NoOfFeedback;

// This property telling the JS to check that this property is available or not
// If it is not existing we will get undefined. So, once we get undefined using
// this optional chaining we will no longer read another properties from that 
// property

// But we will face one issue, as soon as we save we will be getting "NaN"
// This is definitely making a sense because 
// For this "movie_feedback" we are having some number i.e. 341 but for
// "ott_feedback" we got the result as "undefined".
// So, "movie_feedback + ott_feedback" is not able to add so we are getting "NaN".

// Solution : If "ott_feedback" is undefined then we have to set default value
// We can use "short circuiting" and "nullish colinsing operator".
// Only for null and undefined we can set default values, if we use OR Opertor 
// then also we will be getting the result.
// ott_feedback?.NoOfFeedback ?? 0; // way-1 : Nullish Operator // 341
// ott_feedback?.NoOfFeedback || 0; // way-1 : OR Operator // 341