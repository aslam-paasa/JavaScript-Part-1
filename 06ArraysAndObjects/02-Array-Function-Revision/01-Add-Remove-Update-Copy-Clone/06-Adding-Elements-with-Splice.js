// Adding Elements with Splice :
// The syntax: array.splice(startIndex, 0, element1, element2, ...);

// Here, how it works :
// (a) startIndex: The index at which to start adding elements to the array
// (b) 0: Specifies that none of the elements should be removed.
// (c) element1, element2, ... : The elements you want to add to the array

const testScores = [65, 72, 54, 85];
testScores.splice(2, 0, 93); // Insert 93 at index 2
console.log(testScores); // [65, 72, 93, 54, 85]