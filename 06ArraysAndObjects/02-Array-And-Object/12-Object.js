// 3. Creating Objects using Constructor and "this" keyword -
// Laptop constructor
function Laptop(ram, processor, screenSize) {
    this.ram = ram;
    this.processor = processor;
    this.screenSize = screenSize;
}

// Creating the objects by calling the constructor
let myLaptop = new Laptop(16, "i7", 14);

console.log(myLaptop);
console.log(myLaptop.processor);
