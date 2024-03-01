/*
Ravi having a set of data and Raju having a set of data and they want to
compare both are same or not. Write a program to compare two objects
without functions.

-> Let's define two obejcts here -*/  
let raviObj = {
    name : "Ravi",
    age : 25,
    rno : 11,
    city : "mumbai"
};

let rajuObj = {
    name : "Raju",
    age : 20,
    rno : 1,
    city : "delhi"
};

/* The best way to compare is, iterate over all the values in both of the
   objects one after the another.
-> First we are going to check on the basis of key then we are going to
   check on the basis of value*/ 

let compareObjectsKeys = (raviObj, rajuObj) => 
{
    for(const [key] in rajuObj)
    {
        if(raviObj[key] !== rajuObj[key])
        {
            // if both key are not same then we can break
            return false;
        }
    }
    return true;
}

if(compareObjectsKeys(raviObj, rajuObj) == true)
{
    console.log("Objects are same in terms of key");
}
else 
{
    console.log("Objects are not same in terms of key");
}

