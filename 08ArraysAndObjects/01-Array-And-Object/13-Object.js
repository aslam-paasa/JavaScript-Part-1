/* Looping through the objects :- 
   ------------------------------
 - Objects will have set of "key : value" pair
 - If we want to print it out, we are going to use for-loop 
 
Q) How does for-loop work on a collection?
 - for(const key{variables which we are taking} in objectName{whatever obejctName we have})
 - From this collection objectName, pick values one by one and store it
   in variable key.
        key : value
 - When we will iterate, we will do it on the basis of kye.
 - Now if you want to access its corresponsing value -
        objectName [key]

Example -

    for(const key in laptopDetails) {...}

 - Meaning of this is : 
 - Find "key = ram" in laptopDetails, and once found, do the printing
 - console.log(key, laptopDetails[key]);
                |           |
                V           V
               Key        Value
    */

               function Laptop(ram, processor, screenSize) {
                this.ram = ram;
                this.processor = processor;
                this.screenSize = screenSize;
            }
            // using "new" keyword because that is how we call a constructor
            let laptopDetails = new Laptop(16, "i7", 14)
            
            // way to print key : value pair of collection of data
            for(const key in laptopDetails) 
            {
                console.log(`${key} has a value : ${laptopDetails[key]}`);
            }
            