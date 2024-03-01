// Call by Reference           Call by Value
//       |                           |
//       |                           |
//       V                           V
// Shallow Copy                Deep Copy
//       |                           |
//       |                           |
//       V                           V
// Multable object             Immutable Object

// Shallow Copy is also identify by "Pass by reference" in other programming language.
// Deep Copy means "Pass by value".

// Shallow Copy :

// Original Object             Cloned Object
//       |                           |
//       |                           |
//       +---------------------------+
//                      |
//                      V
//                  Referenced Object

// When you make a copy of a variable from Original Source and copy it into another
// variable by using a simple assignment operator, at that time only the reference
// address or the memory address of the original variable is copied into another
// variable, not the actual value. So, at last both the variable (original and
// the source) refer to the same value.

// So, when we make any change in the new variable then it also mutate or change
// our original variable.

// JavaScript does a shallow copy by default in "Non-Primitive Types" -
// (a) Array
// (b) Objects
// (c) Functions
// NOte : They are mutable


// Deep Copy :

// Original Object             Cloned Object
//       |                           |
//       |                           |
//       |                           |
//       V                           V
// Referenced Object           Referenced Object

// Deep Copy is also identify by "Pass by value" in other programming languages.
// So, when we make a copy of variable into another variable by using assignment
// operator, at that time all the values of our object or array along with the 
// reference address of the original variable is copied into another variable.
// At last, our orginal variable and copied variable referred to different
// referenced variable. So, when we make any change in the copied variable, it won't
// mutate original variable.

// Whereas Javascript does a deep copy by default in "Primitive DataType" -
// (a) number
// (b) boolean
// (c) string
// (d) null
// (e) undefined
// They are immutable

