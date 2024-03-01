// console.count()
// It prints the number of times the console.count() is called. It takes a string label parameter. It is very helpful to count the number of times a function is called. In the following example, the console.count() method will run three times

const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

/*
Function has been called: 1
Function has been called: 2
Function has been called: 3
*/ 