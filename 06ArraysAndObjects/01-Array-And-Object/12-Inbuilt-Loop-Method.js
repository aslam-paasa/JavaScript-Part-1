const numbers =  [1, 2, 3, 4, 5];

// (e) Every Method :
// => Every checks for every single element if that condition is satisfied
//    with it.
// => So, if every single element is more than 3, it will return true.

const res = numbers.every((item, index, array) => {
    return item > 3;
})

console.log(res);