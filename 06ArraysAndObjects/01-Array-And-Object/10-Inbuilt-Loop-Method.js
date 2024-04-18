const numbers =  [1, 2, 3, 4, 5];

// Inbuilt Loop Methods :
// (c) Reduce : It takes 4 things :
//     => previousValue
//     => item
//     => index
//     => array
//     So, reduce takes an array and it reduces it down to one value.

// previousValue is 1st index if we don't provide any intial value.
// But in this case our initialValue is "0".

const newNums01 = numbers.reduce((previousValue, item) => {
    return previousValue + item;
}, 0);

console.log(newNums01); // 15

// Iteration-1 : 0 + 1 => 1
// Iteration-2 : 1 + 2 => 3
// Iteration-3 : 3 + 3 => 6
// Iteration-4 : 6 + 4 => 10
// Iteration-4 : 10 + 5 => 15


// Setting previousValue as "2" :
const newNums02 = numbers.reduce((previousValue, item) => {
    return previousValue + item;
}, 2);

console.log(newNums02); // 17

// Iteration-1 : 2 + 1 => 3
// Iteration-2 : 3 + 2 => 5
// Iteration-3 : 5 + 3 => 8
// Iteration-4 : 8 + 4 => 12
// Iteration-4 : 12 + 5 => 17


