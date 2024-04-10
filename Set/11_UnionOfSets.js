// Union of sets
// To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
// Set(6) {1, 2, 3, 4, 5,6}