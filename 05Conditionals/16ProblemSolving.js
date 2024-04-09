// Given 3 no. "a, b, c", which represent coefficient of a quadratic equation.
// ax^2 + bx + c (assume real roots)
// Find the roots of the quadratic equations
// 2x^2 + 5x + c

// Hint : Math.sqrt(x) => root of x

// Formula : -b + Math.sqrt(b*b - 4*a*c)/ (2*a)

function solve(a, b, c) {
    // ax^2 + bx + c
    let sqrtValue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqrtValue) / (2*a);
    let root2 = (-b - sqrtValue) / (2*a);
    console.log(root1, root2);
}

solve(2, 5, 3);