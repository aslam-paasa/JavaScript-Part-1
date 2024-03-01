// Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.


const sumAllNums = (...args) => {
    console.log(args)
  }
  
  sumAllNums(1, 2, 3, 4, 5)

// [1, 2, 3, 4, 5]
