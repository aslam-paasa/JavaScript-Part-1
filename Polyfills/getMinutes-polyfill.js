// Custom getMinutes() method in Polyfill in JavaScript :
// => The getMinutes() method in JavaScript is used to retrieve the minute
//    component (0 to 59) from a "Date" object. However, in some scenarios,
//    you may need a sustom "getMinutes()" - like function to handle 
//    time-related operations more flexibly or to address specific use cases.
//    In this article, we'll explore how to implement a custom getMinutes() like
//    method, understand its utility, and learn how to use it effectively.


// Why create a Custom getMinutes() - like function?
// There are several reasons why you might want to create a custom getMinutes() - 
// like function or polyfill :

// 1. Custom Time Formatting :
// => You may need to format time in a specific way that the standard "Date"
//    object does not support.

// 2. Timezone Handling :
// => Dealing with timezones can be challenging. A custom function allows you
//    to handle timezones more precisely.

// 3. Browser Compatibility :
// => Ensuring consistent time handling across different browsers can be tricky.
//    A custom function can help bridge compatability gaps.



// Understanding the Standard "getMinutes()" method?
// Before we dive into creating a custom "getMinutes()" - like function, 
// let's briefly review how the standard "getMinutes()" metho works with
// the "Date" object. When called on a "Date" instance, it returns the minute
// component as an integer, ranging from 0 to 59.

const currentDate = new Date();
const minutes = currentDate.getMinutes();
console.log(minutes); // Output: Current minute (0 to 59)

// The standard "getMinutes()" method is useful for basic time-related operations
// but may not cover all use cases.



// Implementing a custom "getMinutes()" - like function :
// To create a custom "getMinutes()" - like function, let's define a function
// called "customGetMinutes()" that accepts a "Date" object or a time string
// as input. This function will return the minute component as an integer,
// ranging from 0 to 59.

function customGetMinutes(timeInput) {
    // If the input is a time string, extract the minute component
    if (typeof timeInput === 'string') {
        const timeParts = timeInput.split(':');
        if (timeParts.length >= 2) {
            const minutes = parseInt(timeParts[1], 10);
            if (!isNaN(minutes) && minutes >= 0 && minutes <= 59) {
                return minutes;
            }
        }
    }
    // If the input is a Date object, use the built-in getMinutes() method
    if (timeInput instanceof Date) {
        return timeInput.getMinutes();
    }
    throw new Error('Invalid time input');
}

// In this implementation, the "customGetMinutes()" function first checks if
// the input is a time string. If it is, the function splits the string to
// extract the minute component and validates. If the input is a valid time
// string, the function returns the extracted minute as an integer.

// If the input is a "Date" object, the function uses the built-in 
// "getMinutes()" method to retrieve the minute component.

// Here's how you can use the "customGetMinutes()" function:
const currentTime = new Date();
const customMinutes1 = customGetMinutes(currentTime);
console.log(customMinutes1); // Output: (0 to 59) [Current minute]
const customMinutes2 = customGetMinutes('14:30');
console.log(customMinutes2); // Output: 30 (minute extracted from the time string)



// Enhancing the Custom "getMinutes()" - like function :
// You can enhance the "customGetMinutes()" function further according to
// your specific needs. For example, you can modify it to return the minute
// in a different format, handle timezones, or add more advanced error handling.


// Conclusion :
// Creating a custom "getMinutes()" - like function or polyfill in JavaScript
// provides you with greater flexibility when working with time-related
// operations. While the standard "Date" object is suitable for many use
// cases, custom time-handling functions allow you to tailor time operations
// to your requirements, handle compatibility issues, and perform complex
// time-related tasks with ease. By implementing your version, you gain 
// control over time processing and ensure that your applications work
// seamlessely across various scenarios.