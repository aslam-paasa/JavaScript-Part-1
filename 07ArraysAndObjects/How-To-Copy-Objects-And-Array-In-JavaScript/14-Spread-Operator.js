// Spread Operator in function calls

// Give me the minimum value
console.log(Math.min(10,5,30,3,90)); // 3

// We can count the minimum and maximum score
const scoreList = [100, 40, 200, 89];
console.log(Math.min(scoreList));   // NaN
console.log(Math.min(...scoreList)); // 40
console.log(Math.max(...scoreList)); // 200

// Before ES6 we use "apply" method if we want to achieve the same
console.log(Math.min.apply(null, scoreList)); // 40
