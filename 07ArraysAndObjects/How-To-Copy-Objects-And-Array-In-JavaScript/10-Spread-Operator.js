// Where we can use this and where we shouldn't use this?

// 1) Spread operator with arrays
console.log('.....spread with Array.....');
const team1 = ['user1', 'user2'];
const team2 = ['user3'];

// In array we perform some performance like :
// (a) concatenate
// (b) copy one array into another

// If we don't use spread operator then we use concat() method 
// concat() method is used to combine two arrays together
const newTeam = team1.concat(team2);
console.log(newTeam); // [ 'user1', 'user2', 'user3' ]

// Same thing we can do with the help of ES6 Spread operator
const myTeam = [...team1, ...team2];
console.log(myTeam);    // [ 'user1', 'user2', 'user3' ]

// Note : We need to identify where we need to use concat() method & where we 
// should use Spread Operator.

// If we have simple 2 arrays which we want to concat then we can do it with concat().
// But if we have more than 2 method then we will use Spread Operator. (Easy)
