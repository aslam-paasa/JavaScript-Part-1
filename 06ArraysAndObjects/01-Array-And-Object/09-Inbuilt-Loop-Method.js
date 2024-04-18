const numbers =  [1, 2, 3, 4, 5];

// Inbuilt Loop Methods :
// (b) filter : It takes a condition inside of it and return only those
//              elements that satisfy that condition.

const newNums = numbers.filter((item, index, array) => {
    return item > 3; 
}) 

console.log(newNums); // [ 4, 5 ]