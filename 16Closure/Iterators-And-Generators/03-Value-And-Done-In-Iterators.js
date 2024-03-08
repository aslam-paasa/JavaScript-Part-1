// Generally in JS wherever we will see an iterator object going on in place. 
// It will be having two properties :
//(a) Value
//(b) Done

// Iterator : next() -> calling this will fetch data for us
// {
//     value: It stores the next value we get in the sequence
//     done: It will turn true if we consume all of the data from our collection
//     next(): Which helps to access this "value"
// }

// Why we have kept something like "done"? Wby not make this "value" undefined?
// If we try to have an array [] and if we try to access the index which doesn't
// even exist in the array, we get undefined. 
// If we make the "value" undefined that can give us a notion that the element
// doesn't exist in the corresponding collection, but that can be problematic
// because in javascript we have heterogenous arrays. So, in the same array we can
// have 1,2,3 and in the same array we can have "undefined" and then 5,6. So, if
// the iterator is fetching a value get something like "undefined" -
// [1,2,3,undefined,5,6], we won't be able to realize that whether this values is
// really undefined stored in the array or the array has been exhausted. 
// So, in order to understand whether the array has been exhausted or not, there is
// a "done" property that we can use.

// With every array, prototype is linked and that prototype has a property
// symbol.iterator linked to the array. We can say -
// iterator = arr[Symbol.iterator](); // Array Iterator {}

// And now on the Array Iterator{} if we call the next() property, this next()
// property is actually returning us a value.
// iterator.next();    // { value: 1, done: false}
// iterator.next();    // { value: 2, done: false}
// iterator.next();    // { value: 3, done: false}
// iterator.next();    // { value: 4, done: false}
// iterator.next();    // { value: 5, done: false}
// iterator.next();    // { value: 6, done: false}
// iterator.next();    // { value: 7, done: false}
// iterator.next();    // { value: undefined, done: true}

// So, if we want to mimic the same functionality here, instead of just directly
// returning the element we can do value as "nextElement" and done as "false"
// and we can return "value" as undefined and done as "true"

// Custom Iterator
function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if(idx === array.length) {
            return {value: undefined, done: true};
        }
        const nextElement = array[idx];
        idx++;
        return {value: nextElement, done: false};
    }
    return {next};
}

// Somewhere we consume
const automaticFetcher = fetchNextElement([99,11,12,13,0,1,2,3,4,]); // inside automatic fetcher we can store next function

// Calling the objects
console.log(automaticFetcher.next()); // { value: 99, done: false }
console.log(automaticFetcher.next()); // { value: 11, done: false }
console.log(automaticFetcher.next()); // { value: 12, done: false }
console.log(automaticFetcher.next()); // { value: 13, done: false }
console.log(automaticFetcher.next()); // { value: 0, done: false }


// Let's move one level ahead of iterators
// The functionality we want to achieve is get the data from somewhere
// We don't have a way storage where we actually go and get the data from
// Here actually internally it is still going and getting the data from a storage
// What if we can go one step ahead and set ourselves out of this pseudo declarative
// thing and make a piece of code that is actually going to give us a stream of
// data whenever we ask. 
// Give me data, it gives you data
// GIve me data, it gives you data
// We storing the data into the collection or an array or set or anything. If we
// can achieve that then that is going to be one level up in terms of advanced JS
// programming and there is a concept called as "generator" using which we can 
// achieve that. 
// It exist in other programming languages also such as Python etc.