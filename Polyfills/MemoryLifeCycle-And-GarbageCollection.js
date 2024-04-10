// Understanding Memory Lifecycle and Garbage Collection :

// JavaScript, being a high-level programming language, utilizes automatic 
// memory management through a process known as garbage collection. Memory 
// allocation, deallocation, and management play crucial roles in the efficient
//  execution of JavaScript programs. In this article, we will explore the 
// memory life cycle in JavaScript, delve into the concept of garbage collection, 
// and provide examples to enhance your understanding.



// Memory Allocation :
// => In JavaScript, memory allocation can occur in two primary areas :
//    1. Stack
//    2. Heap

// Stack Allocation :
// The stack is responsible for storing "function calls, local variables, and
// function parameters". Each time a function is called, a new frame is
// created on the stack to hold its variables and function calls. Primitive
// data types like numbers and booleans, as well as function references, are
// stored in the stack. When a function call is completed, its frame is popped
// off the stack, and the memory is automatically deallocated. This automatic
// deallocation ensures that memory is efficiently managed without requiring
// explicit memory management by the developer. Let's consider the following
// example :

function foo() {
    const x = 10; // x is stored in the stack
    console.log(x);
}
foo(); // Output: 10

// In the above code, the variable "x" is allocated on the stack within the
// function "foo()". When "foo()" is called, a new frame is created in the 
// stack to hold the variable "x". Once the function completes its execution
// the framw is popped off the stack, and the memory allocated for "x" is
// deallocated.



// Heap Allocation :
// => The heap is responsible for storing more complex data structures like
//    "objects and arrays". When an object is created using the "{}" syntax 
//    or through constructor functions, memory is allocated on the heap, and
//    a reference to the object is stored in the stack or another object.
//    The heap is managed differently from the stack and require garbage
//    collection to free up memory for objects that are no longer in use.
//    Let's examine an example :

function createObject() {
    const obj = {}; // obj is stored in the heap
    obj.name = 'John';
    obj.age = 30;
    return obj;
}
const myObject = createObject();
console.log(myObject); // Output: { name: 'John', age: 30 }

// In this code snippet, the "createObject()" function creates an object "obj"
// on the heap and assigns properties "name" and "age" to it. The function
// then returns the object, and the reference to it is stored in the variable
// "myObject". The object exists on the heap until it is no longer referenced
// by any part of the program. Once it becomes unreachable, the memory occupied
// by the object is eligible for garbage collection.




// Garbage Collection :
// Garbage Collection is the process of automatically reclaiming memory 
// that is no longer in use. JavaScript engines employ garbage collectos
// to identify and collect objects that are no longer accessible by the program,
// freeing up memory for future allocations. One common approach used by
// garbage collectors is the "mark and sweep" algorithm. Let's illustrate
// garbage collection with an example code snippet that stimulates a chat
// application :

// Chat message object
function Message(content) {
    this.content = content;
}

// Chat room
function ChatRoom() {
    this.messages = [];

    this.addMessage = function (content) {
        const message = new Message(content);
        this.messages.push(message);
    };

    this.clearMessages = function () {
        this.messages = [];
    };
}

// Simulating a chat session
function simulateChat() {
    const room = new ChatRoom();

    // Add messages to the chat room
    room.addMessage("Hello!");
    room.addMessage("How are you?");
    room.addMessage("I'm good, thanks!");

    // Clear messages after a while
    setTimeout(() => {
        room.clearMessages();
        console.log("Chat messages cleared.");
    }, 5000);
}

simulateChat();


// In this example, we have a "Message" object that represents a chat message,
// and a "ChatRoom" object that store the messages in the array. The
// "simulateChat" function simulates a chat session by adding messages to the
//  chat room and them clearing them after 5 seconds using the "clearMessages"
//  method.

// During the execution of "simulateChat", multiple "Message" objects are
// created and added to the "messages" array. However, after the "clearMessages"
// method is called, there are no more references to the previously created
// "Message" obejcts. As a result, they become unreachable and eligible for
// garbage collection.

// The JavaScript garbage collector will automatically detect these reachable
// objects and free up the memory they were occupying. In the example, you can
// observe the message "Chat messages cleared." being logged to the console
// after 5 seconds, indicating that the garbage collector has collected and
// released the memory previously occupied by the cleared messages.


// Memory Life Cycle Best Practices :
// To optimize memory usage and avoid memory leaks, it is essential to follow
// certain best practices:

// 1. Minimize Global Variables :
// => Reducing the use of global variables helps prevent unintentional 
//    long-term memory retention. Global variables remain in memory throughout
//    the entire program execution, even if they are no longer needed. Instead,
//    limit variable scope by declaring variables within appropriate functions
//    or modules.

// 2. Remove Unnecessary References:
// => Explicitly removing references to objects that are no longer needed 
//    allows the garbage collector to identify them as unreachable. Setting a 
//    variable or property to null or undefined removes the reference to the 
//    object, indicating that it can be garbage collected.


// 3. Object Pooling:
// => Object pooling involves reusing existing objects instead of creating 
//    new ones, reducing memory allocations and deallocations. By maintaining 
//    a pool of pre-allocated objects, you can reuse them when needed, 
//    minimizing the overhead of memory allocation. Here’s an example:

const objectPool = [];
function createObject() {
    if (objectPool.length > 0) {
        return objectPool.pop(); // Reuse existing object from the pool
    }
    return {};
}
function releaseObject(obj) {
    // Reset object state
    // ...
    objectPool.push(obj); // Add object back to the pool
}


// In this code, the "createObject()" function checks if there are objects
// available in the "objectPool". If an object exists, it is reused; otherwise,
// a new object is created. The "releaseObject()" function resets the object's state
// and returns it to the pool for reuse.


// 4. Lazy Loading :
// => Loading resources, such as images, only when necessary can optimize
//    memory usage. By postponing the loading process until required, we 
//    minimize unnecessary memory consumption. Consider the following example :

function loadResources() {
    const image = document.createElement('img');
    image.src = 'image.jpg'; // Resource is loaded only when necessary
    document.body.appendChild(image);
}

// In this code, the image resource is loaded only when the "loadResource()"
// function is called. By postponing the loading process until required,
// we minimize unnecessary memory consumption.



// Summary :
// Understanding the memory life cycle and garbage collection in JavaScript is
// crucial for developing efficient and scalable applications. By mastering 
// memory allocation, garbage collection, and memory management best practices,
// you can optimize your JavaScript code and ensure optimal memory usage. 
// Remember to be mindful of memory allocation, remove unnecessary references,
// and adopt best practices to prevent memory leaks and improve overall 
// performance.

