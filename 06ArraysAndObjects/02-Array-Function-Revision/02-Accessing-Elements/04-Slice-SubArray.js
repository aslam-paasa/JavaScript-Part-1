// Print all subarrays using slice -

let arr = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
        let subArray = arr.slice(i, j);
        displayArray(subArray);
    }
}

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}

/*
10 = 1
10,20 = 2
10,20,30 = 3
10,20,30,40 = 4
10,20,30,40,50 = 5
10,20,30,40,50,60 = 6
20 = 1
20,30 = 2
20,30,40 = 3
20,30,40,50 = 4
20,30,40,50,60 = 5
30 = 1
30,40 = 2
30,40,50 = 3
30,40,50,60 = 4
40 = 1
40,50 = 2
40,50,60 = 3
50 = 1
50,60 = 2
60 = 1
*/