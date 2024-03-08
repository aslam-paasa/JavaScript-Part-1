let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [20, 54, 12, 33, 98, 76, 100, 11, 292, 34];

// sort and reverse

//1) Sort & Reverse String
sarr.sort();                    
console.log(sarr);

sarr.reverse();                 
console.log(sarr);



//2) Sort & Reverse Number 

// narr.sort() //does an alphabetical sort
// console.log(narr);

narr.sort((a, b) => a - b);     // numerical sort
console.log(narr);

narr.reverse();                
console.log(narr);