let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
]

let res = arr.map(function (v, i, oarr) {
    console.log(v);
    let nameParts = v.split(" ");
    console.log(nameParts);
    let fname = nameParts[0];
    let lname = nameParts[1];
    //isse pta chlega ki fname aur lname alag ho chuke h
    console.log(fname + "-" + lname);

    //ab firstname ka first character lenge
    let fnfc = fname[0];
    //last name ka last character nikaalnge
    let lnlc = lname[0];
    let initials = fnfc + "." + lnlc + ".";
    console.log(initials);
    //console naa kra k return krwate h jisse humein array m return milega
    return initials;
})

console.log(res);

//Use the map function to produce the below output -
// Output : ["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."]