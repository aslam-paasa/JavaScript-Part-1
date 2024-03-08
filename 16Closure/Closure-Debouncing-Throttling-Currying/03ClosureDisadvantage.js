// Disadvantage of Closure:

// Sometimes, we encounter issues with scale values, where the captured value doesn't update as expected.
// We have a show() function with two variables: count and message.
// Inside show(), there are two functions: print and increase.
// Both functions are returned, and when we call show(), we assign the returned functions to log and increase.

// Let's observe the issue:
// Initially, log() outputs "score: 0."
// After calling increase() twice, the count is incremented, but log() still shows "score: 0."

// Let's investigate using console.dir(log) to inspect the closure scope.
// We find that count is correctly updated inside the closure, but the message remains at 0.

// There are two ways to solve this issue:

// Solution 1:
// Change the declaration of message from const to let.
// This means updating: const message = `score: ${count}`; to let message = `score: ${count}`;
// This way, message can be modified, and each time increase() is called, it updates the message correctly.

// Solution 2:
// Remove the outer declaration of message and include it inside the print() function.
// This way, every time print() is called, it captures the updated count value.

// Implementing Solution 1:
function show() {
    let count = 0;
    let message = `score: ${count}`; // Way-1

    function print() {
        // let message = `score: ${count}`; //Way-2
        console.log(message);
    }

    function increase() {
        count++;
        message = `score ${count}`; // Way-1 
    }

    return [print, increase];
}

const [log, increase] = show();

log();      // Output: score 0
increase(); // Output: score 1
increase(); // Output: score 2
log();      // Output: score 2

// Implementing Solution 2:
// Uncomment the code inside show() and comment out Solution 1.
// Run the program again, and you should get the same correct output.
