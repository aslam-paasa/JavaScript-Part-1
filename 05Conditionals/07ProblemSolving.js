// Given the side length of a triangle in the form of 3 integers. Check if the
// given triangle is equilateral or scalene or isoscelene.

// (a) Equilateral => All the sides are equal to each other
//  => Condition : (a==b && b==c && a==c)

// (b) Scalene => None of the sides are equal to each other
// => Condition : (a!=b && b!=c && a!=c)

// (c) Isosceles => Any two sides are equal to each other but the third one
//                  is different.
// => (i)   Condition : (a!=b && b==c && a==c)
// => (ii)  Condition : (a==b && b!=c && a==c)
// => (iii) Condition : (a==b && b==c && a!=c)

// Example : a = 7, b = 7, c = 7
// Answer => Equilateral

// Example : a = 8, b = 9, c = 5
// Answer => Scalene

// Example : a = 8, b = 14, c = 8
// Answer => Isosceles

// Note : Given input will always form a triangle.




// if(a==b && b==c && a==c)
// else if(a==b || b==c || a==c)
// else scalene