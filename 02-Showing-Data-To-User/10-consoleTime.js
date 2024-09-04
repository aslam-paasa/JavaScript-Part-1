/**
 * console.time():
 * => Starts a timer you can use to track how long an operation takes.
 * => You give each timer a unique name, and may have up to 10,000 timers
 *    running on a given page.
 * => When you call console.timeEnd() with the same name, the browser will 
 *    output the time, in milliseconds, that elapsed since the timer was started. 
 * */ 

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')


/**
 * Finland Helsinki
 * Sweden Stockholm
 * Norway Oslo
 * Regular for loop: 0.34716796875ms
 * Finland Helsinki
 * Sweden Stockholm
 * Norway Oslo
 * for of loop: 0.26806640625ms
 * Finland Helsinki
 * Sweden Stockholm
 * Norway Oslo
 * forEach loop: 0.358154296875ms
 * 
 * => According the above output the regular for loop is slower than for of or forEach loop.
*/   