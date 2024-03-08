// Two ways to do currying in JS :
// (a) Bind Method
// (b) Closure Method

let multiply = function (x, y) {
    console.log(x*y);
}

// This bind method will essentially create a copy of this multiply method
// and in this we pass some arguments - (this, 2) means this 2 will be set as x
// like let x = 2; So this multiplyTwo will behave exactly like this -
// let multiplyByTwo = function (y) {
//     let x = 2;
//     console.log(x*y);
// }

let multiplyByTwo = multiply.bind(this, 2);
// The argument which we pass inside it will refer to the y over this multiply.
multiplyByTwo(5);

// Similarly, we can create multiplyByThree -
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// We can use multiply method to create multiplyByTwo and multiplyByThree.


// What if we pass one extra argument in multiplyByFour 
let multiplyByFour = multiply.bind(this, 4, 6);
multiplyByFour(5);
// This 4 become x and 6 become y over here -> 24
// So it will ignore 5 which we pass in to the multiplyByFour method.

// What if we don't pass anything and pass 2 and 3 over here -
let multiplyByFive = multiply.bind(this, );
multiplyByFive(2, 3);