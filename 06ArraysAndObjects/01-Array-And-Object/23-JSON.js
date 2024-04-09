/* Acceessing properties of JSON object :
 - The Object.keys() method makes it easier to loop over objects.
 - Object.keys() method takes the object that we want to loop over as
    an argument and returns the elements in an array that contains all
    properties names (or keys)*/ 

    const data = {
        "car": "Audi",
        "models": ["Q7","Q5"],
        "launchYear": 2021,
        "price": [5000000, 3500000]
     }; 
     console.log(data);
     console.log(data.car);
     console.log(data.models[0]);
