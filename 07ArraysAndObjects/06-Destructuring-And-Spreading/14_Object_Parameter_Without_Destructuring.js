// Object parameter without destructuring

// Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
  //with destructuring