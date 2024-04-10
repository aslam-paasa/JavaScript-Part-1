// Custom getHours() method polyfill in JavaScript :
// The "getHours()" method in JavaScript is used to retrieve the hour 
// component (0 to 23) from a "Date" object. However, there may be situations
// where you need to create a custom "getHours()" - like function or polyfill
// to handle time-related operations more flexibly. In this article, we'll 
// explore how to implement a custom "getHours()" - like function, understand
// its utility, and learn how to use it effectively.


// Why create a Custom getHours() like function?
// There are several reasons why you might want to create a custom getHours()
// like function or polyfill :

// 1. Custom Time Formatting :
// => You may need to format time in a specific way that the standard "Date"
//    object does not support.

// 2. Timezone Handling :
// => Dealing with timezones can be challenging. A custom function allows you
//    to handle timezones more precisely.

// 3. Browser Compatibility :
// Ensuring consistent time handling across different browsers can be tricky.
// A custom function cna help bridge compatibility gaps.



// Understanding the Standard getHours() method?
// Before we dive into creating a custom getHours() method, let's briefly
// review how the standard getHours() method works the "Date" object. 
// When called on a "Date" instance, it returns the hour component as an 
// integer, ranging from 0 to 23.

const currentDate = new Date();
const hours = currentDate.getHours();
console.log(hours); // Output: Current hour (0 to 23)

// The standard getHours() method is useful for basic time-related operations
// but may not cover all use cases.



// Implementing a Custom getHours() like function?
// To create a custom getHours() function, let's define a function called
// customGetHours() that accepts a "Date" object or a time string as input.
// This function will return the hour component as an integer, ranging from
// 0 to 23.

function customGetHours(timeInput) {
    // If the input is a time string, extract the hour component
    if (typeof timeInput === 'string') {
        const timeParts = timeInput.split(':');
        if (timeParts.length >= 2) {
            const hours = parseInt(timeParts[0], 10);
            if (!isNaN(hours) && hours >= 0 && hours <= 23) {
                return hours;
            }
        }
    }
    // If the input is a Date object, use the built-in getHours() method
    if (timeInput instanceof Date) {
        return timeInput.getHours();
    }
    throw new Error('Invalid time input');
}

// In this implementation, the "customGetHours()" function first checks if
// the input is a time string. If it is, the function splits the string to
// extract the hour component and validates it. If the input is a valid time
// string, the function returns the extracted hour as an integer. 

// If teh input is "Date" object, the function uses the built-in getHours()
// method to retrieve the hours component.

// Here's how you can use the "customGetHours()" function:
const currentTime = new Date();
const customHour1 = customGetHours(currentTime);
console.log(customHour1); // Output: Current hour (0 to 23)
const customHour2 = customGetHours('14:30');
console.log(customHour2); // Output: 14 (hour extracted from the time string)



// Enhancing the Custom "getHours()" like function :
// You can enhance the "customGetHours()" function further according to your
// specific needs. For example, you can modify it to return the hour in a 
// different format, handle timezones, or add more advanced error handling.


// Conclusion :
// Creating a custom getHours()-like function or polyfill in JavaScript 
// provides you with greater flexibility when working with time-related 
// operations. While the standard Date object is suitable for many use cases,
// custom time-handling functions allow you to tailor time operations to your
// requirements, handle compatibility issues, and perform complex time-related
// tasks with ease. By implementing your version, you gain control over time 
// processing and ensure that your applications work seamlessly across various
// scenarios.

