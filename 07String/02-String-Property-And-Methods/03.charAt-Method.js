// charAt() : Accessing characters
// => String k andr agar kisi v index pe koi character humein findout kr k
//    return krwana hai to uske liye hm likhe hai.

// Syntax : str.charAt(idx)


// Accessing characters
let str = "ILoveJS";
console.log(str.charAt(0)); // Humein janna hai string index 0 pe kn sa character hai
console.log(str.charAt(3));


// Modifying characters : (Can't change)
str[0] = "S";
console.log(str); // SLoveJS X => ILoveJS (Can't do this)

// Note : Original String m changes nhi aaega because of String Immutability.
// Always generate a new String. Aur ye kaam humein krna hai to hm replace
// method ka use krnge.


str = str.replace("I", "S"); // ILoveJS 
console.log(str);
console.log();

// Looping : We will get all of the characters separately
for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

