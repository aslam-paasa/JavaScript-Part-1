// MDN Definition : A polyfill is a piece of code (usually JS on the Web)
// used to provide modern functionality on older browsers that do not
// natively support it.

// So what does it means actually?

// Let's consider JavaScript.

// The ES6 version of JS which came out in June 2015 introduced many new
// interesting features in it like arrow functions, classes, generators, 
// promises, and much more.

// Now the problem lies here, since these features were introduced in the
// newer version, any browser which is running on older version of JavaScript
// if they encounter these particular features, they won't be able to
// understand them and this mught lead to an unexpected error in the code.


// Generator functions (for example) :
// The function* defines a generator function and it returns a generator
// object

function* gen(i) {
    yield i + 10;
    yield i + 20;
    yield i + 30;
}


// A generator function when called, does not execute the function entirely
// from the first statement to the last, it returns an iterator object. When
// the iterator's "next()" method is called the generator function starts
// executing until it encounters the first "yield" statement. Now when we
// again call the "next()" method it executes the second "yield" statement.
// Now when we again call the "next()" method it executes the second "yield"
// statement. And this can continue till there is no "yield" statement left.

const a = gen(5);

// Here, gen(5) returns the iterator object which has the "next()" method.

console.log(a.next());  // { value: 15, done: false }
console.log(a.next());  // { value: 25, done: false }
console.log(a.next());  // { value: 35, done: false }
console.log(a.next());  // { value: undefined, done: true }

// The first "a.next()" returns an object whose value is 15 and done is false.
// This done denotes whether the execution of the generator function is
// complete or not. Since there are three yield statements in the function
// "gen()" therefore for the first three calls of the "next()" method it 
// yielded that the done is false which means my function expression isn't
// complete. But for the fourth time, it said that the done is true which
// means that my function execution is complete.

// Now, 

// This piece of code, when encountered by an older version of JavaScript,
// will lead to an error as it won't understand what "function*" denotes and
// what the "yield" statement means. So we need an alternative for this code
// which does the same work and is also understood by the older versions.


// The alternative :
// So the alternative function will also return an object with the "next()"
// method and the "next()" method will also return an object with different
// values when it is called.

// This similar type of functionality can be achieved using a switch case
// scenario.

function gen(i) {

    let state = 1;
    return {
        next: function () {
            switch (state) {
                case 1: state = 2;
                    return {
                        value: i + 10,
                        done: false
                    }
                case 2: state = 3;
                    return {
                        value: i + 20,
                        done: false
                    }
                case 3: state = 4;
                    return {
                        value: i + 30,
                        done: false
                    }
                case 4: 
                    return {
                        value: undefined,
                        done: false
                    }
            }
        }
    }
}


// Now, when we execute this peice of code in the same way as the previous
// generator function it will yield the same results. This peice of code
// can be easily be understood by the older version.

// This piece of code is a "Polyfill". This code is basically bridging the
// gap between an older version and a newer version. So, this is what a 
// polyfill does, it fills the gaps.



// The Broader Perspective :
// The development of a web platform goes through a number of stages :
// (a) Idea Discussion
// (b) Incubation
// (c) First native implementation
// (c) Specification
// (d) Multiple interoperable implementations
// (e) Universal support

// Now the time lag between Multiple interoperable implementations and 
// Universal support can be quite a lot (like a decade). Polyfills are used
// to bridge this gap between the aging technologies to achieve universal
// support.

// Advanced developers generally publish their polyfills in a module registry
// like npm or host the polyfill on a service from which it can be directly
// loaded in the browser, such as cdnjs.com or polyfill.io.

// The problem with polyfills is that browsers which don't essentially need
// them also load them which causes an unnecessary memory consumption. It
// is better to load them when they are required and not always.

// According to Philip, the "polyfilling-loading solution" must pass the
// following conditions :
// (a) The solution must not require supporting browsers to download any
//     unneeded polyfill code.
// (b) The solution must not require supporting browsers to make any extra,
//      blocking HTTP requests.
// (c) The solution must not use any technique (like document.write()) that
//     negatively affects rendering, parsing, or the browser's preload scanner.
// (d) The solution must work the first time a user visits a site (not just 
//     for repeat visits).
// (e) The solution must be easy to maintain and not require a lot of boilerplate.
// (f) The solution must have a tiny code footprint (ideally less than 1K).

// One thing while working on polyfills you should keep in mind that it 
// should always be up to date.


// Conclusion :
// A polyfill, or polyfiller, is a piece of code(or plugin) that provides the
// technology that you, the developer, expect the browser to provide natively.
// Flatenning the API landscape if you will.  - Remy Sharp

// The above piece of code for the generator function was just a simple
// example to show what is the concept behind the working of a polyfill and 
// when we use it. The most popular library for JavaScript is the "core-js".
// It includes polyfills for ECMAScript upto 2020: promises, collections, 
// iterators and much more.