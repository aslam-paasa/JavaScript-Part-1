// Write a method to rearrange an array such that even positioned elements
// are greater than odd positioned elements.

// [1 2 3 4 5 6]
//  0 1 2 3 4 5

// What all are even positions ?
// Even indexes : 0, 2, 4

// i = Even number
// A[i] => A[i-1] --> Relation
// If i = even, that means i-1 & i+1 will be odd.

// E.g : i = 4
// i-1 = 3 (Odd)
// i+1 = 5 (Odd)

// E.g. arr = [1, 2, 2, 1]
//             0  1  2  3

// Even indexes = 0, 2
// Even indexes should be greater than odd one