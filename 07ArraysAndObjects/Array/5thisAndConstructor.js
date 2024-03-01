function Laptop(ram, processor, screensize){ //function constructor
    this.ram = ram;
    this.processor = processor;
    this.screensize = screensize;
}

//using "new" keyword because that is how we call a constructor
let laptopDetails = new Laptop(16, "i7", 14); 
console.log(laptopDetails);
console.log(laptopDetails.ram);


//To print values of an objects using for-loop
for(const key in laptopDetails)
{
    console.log(`${key} has a value : ${laptopDetails[key]}`)
}