/* Async Vs Defer : JS Performance 
 - Suppose the browser is loading your webpage, At that time, your browser is parsing the HTML document line by line and 
   suddenly it encounters a script tag. Then the browser stops parsing at that time as it sees the script tag which fetches 
   the script from the network, gets into your browser then runs that script. Now, the browser starts parsing after that 
   script tag again. This situation creates a blocking nature which results in slow loading.
 - To overcome this situation, the script tag has introduced two boolean attributes :
    (a) Async
    (b) Defer
    
1. Normal :

 <script src = "" />

+--------------------+                                         +---------------------+
    HTML Parsing     +--------------------+--------------------+ HTML Parsing started
                                  Parsing Paused           
                        Script fetching & execution started 

2. Async :
 - This attribute is preferred when the scripts included in the page are not dependent on each other. It is also very useful 
   for loading scripts in the middle of the DOM which are already there.

 - <script src="" async></script>

+-----------------------------------------+                    +-----------------------+
    HTML Parsing     +--------------------+--------------------+ Resume parsing the HTML 
                        Parsing Continues   Parsing paused        
                      & Script fetching     & execution started

 - Async doesn’t guarantee the order. Suppose there are six scripts, any script can be executed at any time.

+---------------------------------------------------+   
| <body>                                            |                        
|     <script src="./script.js" async></script>     |
|     <script src="./script1.js" async></script>    |
|     <script src="./script2.js" async></script>    |
| </body>                                           |
+---------------------------------------------------+

 - In the above code, I have created three javascript files (script 0, script 1, script 2). Each file has some functions. 
   I add the async attribute in all the javascript files. Now, let’s see the output of this code.

Output :
    -> the script 1 - Mon Mar 07 2022 10:29:04 GMT+0530 (India Standard Time)
    -> the script 2 - Mon Mar 07 2022 10:29:04 GMT+0530 (India Standard Time)
    -> the script 0 - Mon Mar 07 2022 10:29:04 GMT+0530 (India Standard Time)

 - In the above image of the console, the scripts are executing asynchronously and they have executed the above information.

 3. Defer :
 - This attribute makes sure that all the scripts are downloaded but it will not be executed until the DOM is ready.

  <script src="" defer></script>

 +----------------------------------------------------------+
  HTML Parsing Started + JS Script fetched together         +--------------------------------------------------+
                                                            Once Parsing done, then JS Script execution started

 - Defer attribute will load scripts in the order specified. It allows you to structure which script comes first.

+---------------------------------------------------+   
| <body>                                            |                        
|     <script src="./script.js" defer></script>     |
|     <script src="./script1.js"></script>          |
|     <script src="./script2.js"></script>          |
| </body>                                           |
+---------------------------------------------------+

- In the above code, we have created three javascript files (script 0, script 1, script 2). Each file has some functions. 
  I add defer attribute in the ‘script.js’ file. Now, let’s see the output of this code.

Output :
    -> the script 1 - Mon Mar 07 2022 10:29:04 GMT+0530 (India Standard Time)
    -> the script 2 - Mon Mar 07 2022 10:29:04 GMT+0530 (India Standard Time)
    -> the script 0 - Mon Mar 07 2022 10:29:04 GMT+0530 (India Standard Time)

 - In the above output, script 0 (contains defer attribute) is processed at the last which is good if you want to change the
   order of the processing and improve it.

Order of Execution :
1) Async Script : No order (unpredictable) maintained -> Indenpendent
2) Defer Script : Order maintained -> Dependent on DOM Nodes

*/ 