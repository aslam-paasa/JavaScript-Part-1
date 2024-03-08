/*
In JSON, value must be one of the following data types :
1. String
2. Number
3. Object (JSON object)
4. Array
5. Boolean
6. Null

JSON values cannot be one of the following data types :
1. function
2. date
3. undefined

JSON Object with numbers :
-> JSON supports numbers in double precision floating-point format. 
-> The number can be digits (0-9), fractions (.33, .532 etc) and exponents (e, e+, e-, E, E+, E-).

{
    "integer":34,
    "fraction":.2145,
    "exponent":6.61789e+0
}

JSON Object with Object :
-> Values in JSON can be objects :

{
    "employee":{"name":"John","age":"30","city":"New York"}
}

JSON Nested Object Example :
-> A JSON object can have another object also. 
-> Let's see a simple example of JSON having another object.

{
    "firstName":"Raj",
    "lastName":"Singh",
    "age":"27",

    "address":{
        "stateAddress":"38/10, Civil Lines",
        "city":"Kanpur",
        "state":"UP",
        "postalCode":"208007"
    }
}

JSON Object with Array :
-> Values in JSON can be arrays :

{
    "courses":["DART","KOTLIN","FLUTTER"]
}

JSON Array of Objects :
-> Let's see a simple JSON array example having 4 objects :

{
    "employees":[
        {"name":"Raj","email":raj@gmail.com","age":33},
        {"name":"Vinay","email":vinay@gmail.com","age":22},
        {"name":"Amit","email":amit@gmail.com","age":23},
        {"name":"Atul","email":autl@gmail.com","age":34}
    ]
}

JSON Object with Booleans :
-> JSON also supports boolean values true or false :

{
    "first":"true",
    "second":"false"
}

JSON Object with Null :
-> Values in JSON can be null 

{"middlename":null,"first":null,"second":null}


JSON Comments :
-> JSON doesn't support comments. It is not a standard.
-> But you can do some tricks such as adding extra attribute for comment in JSON object, for example :

{
    "employee":{
        "name":"John",
        "age":"30",
        "city":"New York",
        "comments":"This is a comment"
    }
}

-> Note : Here, "comments" attribute can be treated as comment.
*/ 