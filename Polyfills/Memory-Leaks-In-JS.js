// Memory Leaks in JavaScript: Causes, Solutions and Best Practices

// Memory management is a crucial aspect of JavaScript development, especially
// when building web applications that run in the browser. In this comprehensive
// guide, we will explore the world of memory leaks in JavaScript, understanding
// what they are, why they matter, rela-world scenarios, types of implementation,
// practical code examples, and common pitfalls to avoid.


// Understanding Memory Leaks :

// Q) What are memory leaks?
// => In JavaScript, a memory leaks occurs when a program reserves memory for
//    objects or data that are no longer needed or referenced, preventing the
//    JavaScript Engine's garbage collector from freeing up the memory. Over
//    time, this can lead to performance issues, such as sluggishness and
//    unresponsiveness in web applications.


// Q) Why do memory leaks matter?
// => Memory leaks matter for several reasons :

// (a) Performance :
//  => Accumulated memory leaks can be slow down your application, making it
//     less responsive and efficient.

// (b) Stability :
//  => Prolonged memory leaks can crash your application or cause it to become
//     unresponsive, leading to a poor user experience.

// (c) Resource Consumption :
//  => Memory leaks increase the amount of system resources your application
//     consumes, affecting other processes running on the user's device.



// Real-World Scenarios :
// Memory leaks can occur in various real-world scenarios :

// 1. Forgotten Event Listeners :

const button = document.getElementById('myButton');
// Adding an event listener
button.addEventListener('click', () => {
    // Handle the click event
});
// Forgetting to remove the event listener when it's no longer needed
// This can happen in SPAs when components are unmounted

// (a) Failing to remove event listeners can lead to memory leaks, as the DOM
//     element retains references to the event handlers even after they are
//     no longer needed.
// (b) In the provided code, the event listener is attached to the "button"
//     element.
// (c) However, there's no code to remove this event listener when the button
//     is no longer needed or when the component unmounts.
// (d) To avoid this memory leak, it's essential to provide a mechanism to
//     remove event listeners, such as "removeEventListeners" function.

// Example usage
const button2 = document.getElementById('myButton2');
const clickHandler = () => {
    // Handle the click event
};

button2.addEventListener('click', clickHandler);

// Later, when the button2 is no longer needed or the component unmounts
button2.removeEventListener('click', clickHandler);

// (a) This removeEventListener removes the previously added event listener
//     from the button.
// (b) It specifies that the clickHandler function should no longer be executed
//     when the 'click' event occurs on the button.
// (c) This is important for preventing memory leaks or unwanted behavior
//     after the button is no longer needed.


// 2. Unintended Closures :

function createCounter() {
    let count = 0;
    // Returning a closure
    return () => {
        count++;
        console.log(`Count: ${count}`);
    };
}
const increment = createCounter();
// Calling the increment function repeatedly
setInterval(() => {
    increment();
}, 1000);
// The `increment` function captures the `count` variable, preventing it from being garbage collected

// (a) Closures can unintentionally capture variables, preventing them from
//     being grabage collected.
// (b) In this example, the "createCounter" function returns a closure that
//     increments and logs a "count" variable.
// (c) When "increment" is called repeatedly, it captures the "count" variable,
//     preventing it from being garbage collected.
// (d) To avoid this memory leak, you need to carefully manage closures and
//     control access to captured variables.
// (e) One solution is to modify the "createCounter" function to expose a
//     "reset" function that allows resetting the "count" variable.



// 3. Uncleared Timers and Intervals :

// Setting an interval that runs indefinitely
const intervalId = setInterval(() => {
    // Some repeated task
}, 1000);
// Forgetting to clear the interval when it's no longer needed
// This can lead to memory leaks as the interval continues to run

// (a) Timers and intervals should be cleared when they are no longer needed.
// (b) Failing to do so can lead to memory leaks, as the timer or interval
//     function continues to execute.
// (c) In the provided code, there's no code to clear the "intervalId" when
//     it's no longer needed.
// (d) To prevent this memory leak, you should use the "clearInterval" function
//     to stop the interval when it's no longer required.


// 4. Retained DOM Elements :

const element = document.createElement('div');
// Storing a reference to the element
const container = document.getElementById('container');
container.appendChild(element);
// Later, removing the element from the container
container.removeChild(element);
// Failing to remove the reference to the element

// (a) Event after removing a DOM element from the page, any reference to it
//     can prevent it from being garbage collected.
// (b) This can happen if you store the element in a variable or data structure.
// (c) In the provided code, the "element" variable retains a reference to the
//     created <div> element even after it's removed from teh "container".
// (d) To avoid this memory leak, you should nullify or remove references to
//     DOM elements once they are no longer needed.



// Common pitfalls to avoid :
// Avoid these common pitfalls when dealing with memory leaks :

// 1. Not cleaning up resources :
// => Always clean up resources like event listeners, timers, intervals and
//    DOM elements when they are no longer needed.

// 2. Global Variables :
// => Minimize the use of global variables, as they can unintentionally
//    retain references to objects.

// 3. Circular References :
// => Be cautious of circular references, when objects reference each other,
//    preventing garbage collection.

// 4. Memory Profiling :
// => Regularly use browser developer tools for memory profiling to identify
//    and address memory leaks.


// Summary :
// Memory leaks in JavaScript can be challenging to detect and resolve, but
// with a good understanding of their causes and the best practices for 
// prevention, you can build robust and effiecient web applications. Always
// remember to clean up resources, manage closures carefully, and use 
// memory profiling tools to ensure that your code runs smoothly and provides
// a superior user experience. By following these guidelines and avoiding
// common pitfalls, you'll become a master of memory management in JavaScript.
