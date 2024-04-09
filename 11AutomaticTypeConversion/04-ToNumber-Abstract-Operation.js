// There are a lot of abstract operation that exist inside JS, we are going
// to learn these abstract one by one :
// 1. ToPrimitive
// 2. ToBoolean
// 3. ToNumber
// 4. ToInteger
// 5. ToInt32
// 6. ToUint32
// 7. ToInt16
// 8. ToUint16
// 9. ToInt8
// 10. ToUint8
// 11. ToUint8Clamp
// 12. ToString
// 13. ToObject
// 14. ToPropertyKey
// 15. ToLength
// 16. CanonicalNumericalIndexString
// 17. ToIndex


// 1. ToNumber(argument) : 
// => ToNumber converts argument to a value of type Number.

// Note : These are set of rules :
// Input Argument     Output Argument
// => Undefined       => NaN
// => Null            => +0
// => Boolean         => argument is true, return 1, or false, return +0
// => Number          => (no conversion)
// => String          => Have to check grammar and conversion algo
// => Symbol          => TypeError
// => Object

// Q) 