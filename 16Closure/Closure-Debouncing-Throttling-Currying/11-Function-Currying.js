// At the last function it is returning the value.

// Ordinary function for addition using 3 arguments
const add = (a,b,c) => {
    return (a + b + c);
}

add(1,2,3); // 6

// Currying function for addition
const curryAdd = (sum) => {
    return (a) => {
        return (b) => {
            return (c) => {
                return sum(a,b,c);
            }
        }
    }
}

const addition = curryAdd(add);
console.log(addition(1)(2)(3)); // 6

/*
-> Let me explain more simpler, If you want to buy a chocolate cake in shop.
-> What is the process go out of the home 
    -> take a bus 
    -> find the shop 
    -> check whether the chocolate cake is available or not 
    -> if available then buy.
-> In the above scenario, let us assume this as a task and we can split 
   each and every in single function calling every function if every 
   thing is good we will be getting the cake but any one of the task is 
   failed we won’t get cake and get proper reason and it is easy to find.
-> Instead of that if we put all task in a single function and passing 
   multiple argument that is hard to manage, that’s why currying comes 
   into picture*/ 