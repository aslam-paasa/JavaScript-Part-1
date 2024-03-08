// splice can be used for removal
let arr = [10, 20, 30, 40, 50];

//2nd index se 1 item splice krna h aur 300, 400 wahi pr add kr do
let na = arr.splice(2, 1, 300, 400); 
displayArray(arr);  //10 20 300 400 40 50
displayArray(na);   //30 40

//remove 2 items and add 2 items
let na2 = arr.splice(2, 2, 300, 400, 500); 
displayArray(arr);  //10 20 300 400 500 40 50
displayArray(na);   //30 40

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}


/* -> '2' batata h ki activity yha hogi (30),
   -> '1' batata h ki yha se kitne no uda do
   -> 300, 400 means ye dono ko bich m daal do
   -> Last m ye return hoga : [10, 20, 300, 400, 40, 50]
*/