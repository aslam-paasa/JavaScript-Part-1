// Immutability with Spread Operator
const todos = [
    {task: 'reading', completed: true},
    {task: 'painting', completed: false}
];

// Pushing to todos array using Spread Operator
// function addToDo(newToDo) {
    // todos.push(newToDo);
// }

// Mutable/Changing the array
// const newList = addToDo(
//     { task: 'recording', completed: false}
// );

// console.log(todos);

// This is not recommended in React
// In framework like react where we do UI render when state changes so 
// So in this case it is very important how we are updating the array or objects
// so that our UI should re-render and it is not returning a new state, it is just
//updating my existing state and adding a new element into that. So, this is not
// correct.

// In this case we should be very carful how we are adding a new element in the array
// It should not be mutable. So, Spread Operator is quite useful

// Let's convert this code from mutable to immutable
// Now we are not going to use "push()" method this way

// Whenever we talk about immutability, instead of adding new element directly into
// our Original Array, we will return a newTodos from this without modifying our
// Original Array "return[]" which will first take all the values from "todos" and
// add new value into them.

function addToDo(newToDo) {
    return [
        // Spread out all the values using Spread Operator
        ...todos,
        // Then add objects coming from newList
        {...newToDo}
    ];
}


const newList = addToDo(
    { task: 'recording', completed: false}
);

console.log(todos);
// [
//     { task: 'reading', completed: true },
//     { task: 'painting', completed: false }
//   ]
console.log(newList);
// [
//     { task: 'reading', completed: true },
//     { task: 'painting', completed: false },
//     { task: 'recording', completed: false }
//   ]

// Created newList without mutating the Original Array (Used in React)