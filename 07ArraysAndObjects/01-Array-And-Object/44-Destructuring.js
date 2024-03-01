/* Destructuring in JS :
 - Destructuring in JavaScript is an expression that makes it possible
   to unpack values from arrays, or properties from objects. We can 
   extract data from arrays and objects and assign them to distinct 
   variables. The value that should be unpacked from the sourced variable
   is defined on the left-hand side.
   
  Destructuring assignment using Functions :
  function getGame() {
    let games = ["Cricket", "Football", "Hockey", "Golf"];
    return games;
  }
  
  let [game_1, game_2] = getGame();
  
  console.log(game_1);  //"Cricket"
  console.log(game_2);  //"Football"
  
  Using Default Values :
  let [game_1 = "Basketball", game_2 = "Gold"] = ["Cricket"];
  console.log(game_1); // "Cricket"
  console.log(game_2); // "Golf"
  */

  const colors = ["black", "blue", "red"];
  console.log(colors);    // [ 'black', 'blue', 'red' ]
  const [color1, color2] = colors;
  console.log(color1);    // black
  console.log(color2);    // blue
  
  const [c1, c2, c3] = colors;
  console.log(c1);    // black
  console.log(c2);    // blue
  console.log(c3);    // red
  
  // Another ways of destructuring (not practically use)
  const [color3 = "red", color4 = "green"] = ["blue"];
  console.log(color3);
  console.log(color4);
  