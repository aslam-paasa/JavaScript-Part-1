/* JSON -> JavaScript Object Notation
 - It is a format for storing and transporting data.
 - If we want to send data from server to webpage.
   +------------------------------------+
   |                                    |
   |  [Input]   [Input]     [Input]     |
   |  [Input]   [Input]     [Input]     | (WebPage)
   |  [Input]   [Input]     [Input]     |
   |                                    |
   +------------------------------------+
 - We are going to create file "a.json".
   +---------+
   |         |
   |         | (server - a.json)
   +---------+ 
   And this file we are going to send to a webpage from our server.
   It is going to break it down and substitute in all these Input fields.
 - Online we have seen lots of static and dynamic pages where data changes
   repeatedly. Let's say we are talking about some stocks website, prices
   of stocks changes rapidly in seconds. We are sending all those data
   from server to webpage and whatever data we have to send we put it in
   form of JSON because it is easy to put our data and secondly it is easy
   ready from it (because JSON format is text only & size will be less.)
   
      const studentJSON = {
        "name" : "abc",
        "rno" : 10,
        "phno" : 987
    }

    console.log(studentJSON);*/

