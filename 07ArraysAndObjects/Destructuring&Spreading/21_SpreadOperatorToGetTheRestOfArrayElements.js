const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]
  
  let [gem, fra, , ...nordicCountries] = countries
  
  console.log(gem)
  console.log(fra)
  console.log(nordicCountries)

//   Germany
//   France
//   ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]