// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.

const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)
// 20 10 200 undefined