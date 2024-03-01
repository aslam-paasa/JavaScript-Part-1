// Spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)


// [0, 2, 4, 6, 8, 10]
// [1, 3, 5, 7, 9]
// [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]