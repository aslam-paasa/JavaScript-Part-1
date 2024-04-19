/*
// node 31ArraysMap.js
Is bahut saare string daalnge like "Mohammad Aslam" to initials aa jaega. 

-> split() function se Sumeet aur Malik alag alag ho jaega.
*/

let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
]

let iarr = arr.map(function(name, index){

    let names = name.split(" ");
    console.log(names);

    //Sumeet ka 'S' and Malik ka 'M'
    // let ans = names[0][0] + ". " + names[1][0] + ".";
    // return ans;

    let firstName = names[0];
    let lastName = names[1];

    let firstNameFirstCharacter = firstName[0];
    let lastNameFirstCharacter = lastName[0];

    return firstNameFirstCharacter + ". " + lastNameFirstCharacter + ".";
    
});

console.log(iarr);

/*
arr.map() ek function hota h aur function wo input m leta h means callback leta h. Aur value k saath 
uss function ko chalata h, aur wo v values jama hoti h unke ikkatah kr k ek new array bana deta h
-> arr array m jo value h split() krne se wo array ban jaega
 */