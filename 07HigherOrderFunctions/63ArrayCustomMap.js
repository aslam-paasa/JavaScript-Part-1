// run code using custom map : myMap() function
Array.prototype.myMap = function(callback){
    let res = [];
    for(let i = 0; i < this.length; i++){
        let val = this[i];
        let rv = callback(val, i, this);
        res.push(rv);
    }
    return res;
}


let narr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

let res = narr.myMap(function(v, i, oarr){
    console.log(v);
    let nameParts = v.split(" ");
    console.log(nameParts);
    let fname = nameParts[0];
    let lname = nameParts[1];
    console.log(fname + "-" + lname);
    let fnfc = fname[0];
    let lnlc = lname[0];
    let initials = fnfc + "." + lnlc + ".";
    console.log(initials);
    return initials; 
})

console.log(res);
