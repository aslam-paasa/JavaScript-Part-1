// Spread Operator with Objects

console.log('Spread Operator in object');

const emp = {
    name: 'John',
    job: 'developer'
};

const personalDetail = {
    age: 20,
}

const clonedEmployee = {...emp};

console.log(emp);
console.log(clonedEmployee);

const employeeDetails = {...emp, ...personalDetail};
console.log(employeeDetails); // { name: 'John', job: 'developer', age: 20 }
