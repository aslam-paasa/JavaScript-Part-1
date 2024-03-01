// If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width, height, area, perimeter = 60 } = rectangle
  
//   console.log(width, height, area, perimeter) //20 10 200 60
  //Let us modify the object:width to 30 and perimeter to 80


  const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  }
  let { width, height, area, perimeter = 60 } = rectangle
  console.log(width, height, area, perimeter) //30 10 200 80

// Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.
