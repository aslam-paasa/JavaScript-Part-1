/*How to parse JSON Data?
-------------------------
-> A common use of JSON is to exchange data to/from a web server.
-> When receiving data from a web server, the data is always a string.
-> Parse the data with JSON.parse(), and the data becomes a JavaScript object.

Example :
var obj = JSON.parse('{"name":"Raj Singh","marks":30,"city":"NDLS"}');

Exceptions :
-> Date objects and functions are not allowed in JSON.
-> If you need to include a date or function, write it as string.
-> You can conver it back into a date object or function later:*/ 