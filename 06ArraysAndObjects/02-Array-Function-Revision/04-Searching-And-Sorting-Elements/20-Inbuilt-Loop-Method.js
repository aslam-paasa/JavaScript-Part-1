const numbers =  [1, 2, 3, 4, 5];

// (d) Sum Method :
// => Quite similar to filter, but when have applied the condition in filter
//    it's going to return every single item that satisfies that condition.
//    But in the case of Sum(), it's going to return either true or false.


// If element is more than 3 than it will return true :
const res = numbers.some((item, index, array) => {
    return item > 3;
})

console.log(res);