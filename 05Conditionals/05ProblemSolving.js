// Consider three integer values, find the minimum value among the given input
// values.

// Ex : x = 10, y = 20, z = 6
// Output : 6

// Note : Don't use any internal function

// We have 3 numbers : "x", "y", "z"
// Somehow we have to consider all 3 no. in the comparison.

// Q) In which case "x" will be the smallest?
// "x < y && x < z"
// If these 2 conditions are true together then "x" will be the smallest
// In no other case, "x" will the answer

// Ex : x = 2, y = 5, z = 9
// 2 < 5 && 2 < 9
// True     True  --> true


// Q) In what case "y" will be the smallest number?
// "y < x && y < z"
// If these 2 conditions are true together then "y" will be the smallest

// Ex : x = 10, y = 3, z = 15
// 3 < 10 && 3 < 15
// True      True  --> true


// Q) In what case "z" will be the smallest?
// There is one simpler way to do it
// If "x" is not the answer and "y" is also not the answer. that means "z" is the
// answer

// (1) x < y && x < y
//     (a) Yes (x is the smallest) : (b) No
//                                       y < x && y < z
//                                       (i) Yes (y is smallest)
//                                       (ii) No!, "z" is the smallest

let x = 10, y = 30, z = 9;

if(x < y && x < z) {
    console.log(x);
} else if(y < x && y < z) {
    console.log(y); 
} else {
    console.log(z);
}