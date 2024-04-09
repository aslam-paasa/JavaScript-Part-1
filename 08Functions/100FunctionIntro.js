// Way-1 to create function without return value

//1) function definition -> code
function sayHello(name){    //-->Parameter
    console.log("Hello", name);
}

// function invokation/call -> This line actually runs above code
sayHello("Aslam");

// I haven't call the function -> function name print ho jaata h
console.log("12",sayHello);

// If we print the function after calling it -> returned value
let rVal = sayHello("Aslam");
console.log("11", rVal); //Jb javascript m kuch ni hota h tb undefined hota h
console.log("11", sayHello("Mohammad")); 

// if you don't pass anything to the function -> parameter undefined
sayHello();