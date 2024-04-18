const numbers =  [1, 2, 3, 4, 5];

// (f) Find Method : If it satisifes the condition, then it going to return
//     that first element/item to us that satisfies the condition.

// If element is greater than 3 then it will return the first element/item
const res = numbers.find((item, index, array) => {
    return item > 3;
});

console.log(res); // 4


// If element is greater than 6 then it will return then it will return undefined.
const res02 = numbers.find((item, index, array) => {
    return item > 6;
});

console.log(res02); // undefined