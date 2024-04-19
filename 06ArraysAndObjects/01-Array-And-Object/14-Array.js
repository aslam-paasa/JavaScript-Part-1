/*Arrays - 
 - We have 2 ways to print collection of data -
    (a) For-loop [Already done]
    (b) For-each loop

Example of foreach loop -
    nums = [1,2,3,4]

    nums.foreach(item, index)
        |
        V
  - Means For each value in nums array. 
  - First one is going to take value from the array
  - Second is the index for the values
    
colors.forEach((color, i)
                  |    |-> Second one should be the index part
                  V    
            First one should be the value*/ 

            const colors = ["red","blue","green"];

            console.log("using for loop");
            
            for(let i = 0; i < colors.length; i++)
            {
                console.log(`value at index ${i} is ${colors[i]}`);
            }
            
            console.log("using for each loop");
            
            // Single line
            colors.forEach((color, i) => console.log(`value of index ${i} is ${color}`));
            // Multiple line
            console.log("for multiple lines");
            colors.forEach((color, i) => {
                console.log(`index ${i}`)
                console.log(`value is ${color}`);
            });
            