// Let's try to write a function using the concept of closures which will help
// us to avoid any kind of imperative programming
// Whenever we try to call the function, this function will automatically give us
// some data from collection, we don't have to mention how to get it from there

// Custom Iterator
function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if(idx === array.length) {
            return undefined;
        }
        const nextElement = array[idx];
        idx++;
        return nextElement;
    }
    // We can even modify our code a bit to a next level
    // Instead of returning a function directly, we can return an object
    return {next};
    // return next;
}

// This function takes a variable "array"
// Then it has a local variable "idx" 
// Then it has a function declared inside it as "next()"
// And then we try to fetch the nextElement from "array[idx]" 
// const nextElement = array[idx];
// We increment the index : idx++
// And return the nextElement

// Now we will put a "if" condition, if idx == array.length then return undefined
// Means if "idx" goes beyond the valid index of the array we will return undefined

// Somewhere we consume
const automaticFetcher = fetchNextElement([99,11,12,13,0,1,2,3,4,]); // inside automatic fetcher we can store next function
// console.log(automaticFetcher()); // 99
// console.log(automaticFetcher()); // 11
// console.log(automaticFetcher()); // 12
// console.log(automaticFetcher()); // 13
// console.log(automaticFetcher()); // 0

// Calling the objects
console.log(automaticFetcher.next()); // 99
console.log(automaticFetcher.next()); // 11
console.log(automaticFetcher.next()); // 12
console.log(automaticFetcher.next()); // 13
console.log(automaticFetcher.next()); // 0


// This kind of syntax we have seen in bunch of other programming language as well
// So, if we see concept of iterators in java, we have a "next()" function -

// ArrayList<String> cityNames = new ArrayList<String>();
// cityNames.add("Delhi");
// cityNames.add("Mumbai");
// cityNames.add("Kolkata");
// cityNames.add("Chandigarh");
// cityNames.add("Noida");

// Iterator to iterate the cityNames
// Iterator iterator = cityNames.iterator();

// System.out.println("CityNames elements : ");

// while(iterator.hasNext())
//      System.out.println(iterator.next() + " ");

// System.out.println();

// Here, we are just saying I already have the previous element, give me the next
// element, then next element, then next element. This kind of style of programming
// exist in Java, C++, Python etc.


// Iterator actually helps us to treat the data like a stream/sequence of data.
// It's kind of like if we open the tap and get some water out of it. So we are
// opening the tap, getting the data, opening the tap, getting the data. We don't
// have to manually go and fetch the data out of it, we don't have ourself to 
// write a logic to get the data out of it without telling them what we want and
// how we want.