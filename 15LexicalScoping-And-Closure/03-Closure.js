// Closure gives you access to an outer function's scope from an inner function.
// Scope means uske andr jo v humne variables, functions etc ka access humein
// milta hai

// Humne dikha ki inner function k paas outer function k scope ka access hota hai
// makeFunc() k andr se hm return kr rhe h displayName() aur sochne ki baat ye h ki
// function ka scope tbtk rehta hai jbtk wo execute hota hai
function makeFunc() {
    let name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName();
}

// Aur agar humne yha makeFunc() ko execute kr diya h to poore function ka scope 
// to khtm, aur agar function ka scope hi poora gyb ho gya h to lexical scoping
// kaise chlegi? Qki jbtk outer function tha tabhi to inner function ko sb mil
// rha tha
const myFunc = makeFunc();
myFunc();

// Yha pe ek interesting concept h JS ka i.e. Closure.
// Althoug waha se uska scope humne Execution Context hata diya hai lekin Memory
// ka role aa jaata hai
// "myFunc" m jaise hi humne "makeFunc()" ko execute kra aur return kr diya
// displayName(), to sirf displayName() return nhi hoga, uska jo outer function
// v exist krta hai to uska v poora scope jaega (lexical scoping k wjh se) qki
// inka apna kuch wire juda hua hai

// To iss lexical scope se hm "name" ko print kra skte hai - "Mozilla"  


// Interview :
// Note : Closure means jb tk poora function hi return kr dete hai to sirf function
// return nhi hota, uska poora scope return hota hai aur sirf scope nhi h wo
// uska poora "lexical scope" return hota hai.

