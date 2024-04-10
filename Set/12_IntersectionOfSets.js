// Intersection of sets
// To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)
// Set(3) {3, 4, 5}