/*
Problem : Given an array of objects with the city name its corresponding
population, create an array with objects from the first array of the 
population of that particular city is >= 5 lakh.
*/ 

// array of object (popln greater than 500)
let data = [
    {cityname : 'city1', population : 123},
    {cityname : 'city2', population : 456},
    {cityname : 'city3', population : 567},
    {cityname : 'city4', population : 678},

];

const resultData = data.filter(item => item.population >= 500);
console.log(resultData);
