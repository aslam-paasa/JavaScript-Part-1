/*JSON Stringify :
------------------
-> A common use of JSON is to exchange data to/from a web server.
-> When sending data to a web server, the data has to be a string.
-> Convert a JavaScript object into a string with JSON.stringify().

Example :
var obj = { name:"Raj Singh",marks:40,city:"NDLS" }
var myJSON = JSON.stringify(obj);

Exceptions :
1. In JSON, date objects and function are not allowed as Object Values.
2. The JSON.stringify() function will convert any dates into strings.
3. The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value*/ 