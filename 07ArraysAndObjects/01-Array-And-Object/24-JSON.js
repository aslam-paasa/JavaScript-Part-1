/* Difference between JSON Object and JavaScript Object :
1. JSON Key/Property name/key are always in double quotes "".
2. JS objects can have functions whereas JSON cannot have functions.
   (Because JSON is the information which is going to our webserver and
    only data is going to be in JSON)
2. In JS object, we cannot have space, underscore ( _ ) in key whereas 
   in JSON we can have keys containing -
   (a) space ( )
   (b) underscore (_)
   (c) hyphen (-)
3. JSON can be converted into JavaScript Objects & vice versa using -
   (a) JSON.parse() 
        - converts JSON data to JavaScript objects
        - Functions are not allowed in JSON. However, if you want to include
          then put it into double quotes as a String.
        - You can convert it back into the function later
   (b) JSON.stringify() 
        - converts JavaScript objects into string JSON Objects.*/ 

// Example of JSON.parse() - converting JSON data to JavaScript objects
const studentJSON = 
`{
    "name" : "abc",
    "rno" : 10,
    "phno" : 987,
    "marks" : "function() { return 90 }"
}`
// javascript object
const jsObject = JSON.parse(studentJSON);

// to convert string to a function use "eval" -> for evaluating the function
jsObject.marks = eval("(" + jsObject.marks + ")")
console.log(jsObject.marks());

// Example of JSON.stringify() - converting JS Object to string JSON data
const studentJS = 
{
    "name" : "abc",
    "rno" : 10,
    "phno" : 987,
    // to include functions in JSON object
    "marks" : "function() { return 90 }"
}

const jsonObject = JSON.stringify(studentJS);
console.log(jsonObject);

