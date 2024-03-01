/*What is JSON?
-> JSON is an open standard for exchanging data on the web. 
-> It supports data structures like object and array.
-> So, it is easy to write and read data from JSON.

1. JSON stands for JavaScript Object Notation
2. JSON is a syntax for storing and exchanging data.
3. JSON is text, written with JavaScript Object Notation.
4. JSON is lightweight and self describing
5. JSON is originated from JavaScript
6. JSON is easy to read and write.
7. JSON is language independent.
8. JSON supports data structures such as array and objects.

Why use JSON?
-> Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.
-> JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript Objects :
    JSON.parse()
-> So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object.

JSON Vs XML :
No.     JSON        XML
1) JSON stands for JavaScript Object Notation.  XML stands for eXtensible Markup Language.
2) JSON is simple to read and write.    XML is less simple than JSON.
3) JSON is easy to learn.  XML is less easy than JSON.
4) JSON is data-oriented.   XML is document-oriented.
5) JSON doesn't provide display capabilities.   XML provides the capability to display data because it is a markup language.
6) JSON supports array.     XML doesn't support array.
7) JSON is less secured than XML.   XML is more secured.
8) JSON files are more human readable than XML. XML files are less human readable.
9) JSON supports only text and number data type.    XML support data types such as text, number, images, charts, graphs etc. Moreover, XML offers options for transferring the format or structure of the data with actual data. 

Here's the information presented in a tabular structure for easier comparison between JSON and XML:
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
| Feature                                   | JSON                                    | XML                                                                     |
|-------------------------------------------+-----------------------------------------|-------------------------------------------------------------------------+
| 1) Full Form                              | JavaScript Object Notation              | eXtensible Markup Language                                              |
| 2) Readability                            | Simple to read and write                | Less simple than JSON                                                   |
| 3) Learnability                           | Easy to learn                           | Less easy than JSON                                                     |
| 4) Data Orientation                       | Data-oriented                           | Document-oriented                                                       |
| 5) Display Capabilities                   | Doesn't provide display capabilities    | Provides display capabilities (markup language)                         |
| 6) Array Support                          | Supports arrays                         | Doesn't support arrays                                                  |
| 7) Security                               | Less secure than XML                    | More secure than JSON                                                   |
| 8) Human Readability                      | More human-readable                     | Less human-readable                                                     |
| 9) Data Types Supported                   | Supports text and number data types     | Supports various data types, including text, number, images, charts,    |
|                                           |                                         |  graphs, etc. It offers options for transferring data structure along   |
|                                           |                                         |  with actual data.                                                      |
+-------------------------------------------+--------------------------------------------------------------------------------------------------------------------

JSON style :
{"students":[
    {"name": "Raj", "age":"23", "city": "CNB"},
    {"name": "Vinay", "age":"28", "city": "LKO"}
]}

XML Style :
<students>
  <student>
    <name>Raj</name> <age>23</age> <city>CNB</city>
  </student>
  <student>
    <name>Vinay</name> <age>28</age> <city>LKO</city>
  </student>
</students>

Similarities between JSON and XML :
1. Both are simple and open
2. Both supports Unicode. So, internationalization is supported by JSON and XML both.
3. Both represents self describing data.
4. Both are interoperable or language-independent.


How to create JSON :
--------------------

Generic Rules to be followed while creating a JSON :
----------------------------------------------------
1. JSON Objects should start and end with braces "{}".
2. Key fields are included in the double quotes.
3. Values are represented by putting ":" colon between them and the keys.
4. JSON key-value pairs are separated by a comma ",".
5. Values can be of any data type like String, Integer, Boolean etc.*/ 