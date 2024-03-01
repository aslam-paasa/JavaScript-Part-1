// Spread Operator :
// Spread Operator is introduced in ES6 and its syntax is quiet simple,
// 3 dots followed by Iterable/Array

// Syntax : ...Iterable 

// Spread Operator can be used basically with 3 categories -
// (a) Array
// (b) Objects
// (c) Functions

// What is Spread Operator?
const users = ['user1', 'user2'];
console.log('without spread operators');
console.log(users); // [ 'user1', 'user2' ]
// Instead of displaying it like an array, if we want to spread this value into
// single element like variable. Each variable will hold single value, then we
// can use it with the help of spread operator.

console.log(...users); // user1 user2
// Now it is displaying like a individual value
// So, we have spread out the value into individual elements

// It is similar like this :
console.log('team1', 'team2');


