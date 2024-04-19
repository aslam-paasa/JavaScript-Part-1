// Removing Elements with Splice :
// The syntax: array.splice(startIndex, numberOfItemsToRemove);

// How it works? 
// (a) startIndex: The index at which to start removing elements.
// (b) numberOfItemsToRemove: The number of items (elements) to remove from the array.

const myFriends= ['Goodness', 'Chiamaka', 'Gideon', 'Chris'];
myFriends.splice(1, 2); // Remove 2 elements starting at index 1
console.log(myFriends); // ['Goodness', 'Chris']