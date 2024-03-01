// Now I want to add this "newTeamMember" to "team1" array

console.log('.....spread with Array.....');
const team1 = ['user1', 'user2'];
const team2 = ['user3'];

const newTeamMember = "newTeamMember";
// good
console.log(team1.concat(newTeamMember)); // [ 'user1', 'user2', 'newTeamMember' ]
// bad
console.log(...team1, ...newTeamMember); // user1 user2 n e w T e a m M e m b e r
// It will take each character as a individual value