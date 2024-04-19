// Replacing Elements with Splice :
// The syntax: array.splice(startIndex, numberOfItemsToRemove, newItem1, newItem2, ...);

// How it works?
// (a) startIndex: The index at which to start replacing elements.
// (b) numberOfItemsToRemove: The number of elements to remove from the array.
// (c) newItem1, newItem2, ...: The elements to insert as replacements.

const myFriends= ['Goodness', 'Chiamaka', 'Gideon', 'Chris'];
myFriends.splice(3, 2, 'Philemon'); // Replace the element at index 3 with 'Philemon'
console.log(myFriends); // ['Goodness', 'Chiamaka', 'Philemon', 'Chris']
