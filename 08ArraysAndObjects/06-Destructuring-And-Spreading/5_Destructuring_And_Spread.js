// If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers //2 is omitted

console.log(numOne, numThree)
// 1 3