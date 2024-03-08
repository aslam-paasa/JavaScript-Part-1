// Note : 'fill' is used for bulk update

let arr = [10, 20, 30, 40, 50, 60];

// index - '1' to '4-1' tk 5 fill kr do
arr.fill(5, 1, 4); //[ 10, 5, 5, 5, 50, 60 ]
console.log(arr);

// index - '2' se '7' fill kr do lekin end ni btaenge to end tk kr dega
arr.fill(7, 2); //[ 10, 5, 7, 7, 7, 7 ]
console.log(arr);