// Either returns : true/false
// Some returns true if someone in the array fulfilla the criteria

let arr = [3, 9, 15, 16, 17, 21, 22];
let isThereAnyEvenElement = arr.some(function(v, i){
    console.log(v + "-" + i);
    if(v % 2 == 0){
        return true;
    } else {
        return false;
    }
});

console.log(isThereAnyEvenElement);

/*Ek v element even hota to ye true return karta. For example, -
let arr = [3, 9, 15, 16, 17, 21, 22];

Output : 
3-0
9-1
15-2
16-3
true

Isse 3rd index m true mil gya to isne true de k call krna band kr diya. 
Isne 16 tk call kiya aur 17, 21, 22 ko call nhi kiya.

*/