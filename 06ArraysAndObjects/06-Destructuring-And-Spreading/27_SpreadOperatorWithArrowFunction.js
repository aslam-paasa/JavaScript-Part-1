
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
  }
  
  console.log(sumAllNums(1, 2, 3, 4, 5))

// 15
