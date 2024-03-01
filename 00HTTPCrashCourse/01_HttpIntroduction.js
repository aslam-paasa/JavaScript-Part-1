/* HTTP - Hyper Text Transfer Protocol :
 - Jb humein kahi text bhejna hota h to uss text ko kaise transfer kiya jaega
   hm bss yhi pdhnge.
 - Bahut saare variables, options hai, optimized tarike se hum transfer krna
   chahte h, to hm koi aisa data structure ka use nhi krna chahte h jo ki
   bahut jyda expensive ho, to yha humari DSA ki knowledge aati h.
 - Ab transferring ka kaam ho rha h to computer m OS hi to ek dusre se baat
   kr rhe h network k upar, to yha networking ka v role aata h. 
 - OS uss data ko rkhega v process krega to OS ki v knowledge yha aati hai.
 
 - Humaare paas 2 chije rahegi - 
  +--------+                +--------+
  |        | -------------->|        |
  | Mobile |                | Server |
  |        |<---------------|        |
  +--------+                +--------+
   Client                     Server
 - Ek humara mobile rhega aur dusra server, aur dono ek dusre se baat krna
   chahta hai. Isi ko bolte h hm "Client" and "Server".
 - Yhi h "Client-Server" model, aur isme dkhnge ye kis tarah se baat krnge
   kaise kaise baat krnge, inhi sb k baare m hm charcha krnge. 
   
 - HTTP k baat kre to usme 2-3 words regular dekhnge ko milnge -
 (a) URL : Kaha pe location h uski 
 (b) URI : Uska identifier kya h
 (c) URN : Uska name kya h
 - In short iska mtlb ye h ki mai kaha pe baat kru, mujhe wo location to do.
   Ab location m jaruri nhi ki jo URL h wo HTTP aae, for example, mongo k case
   m humne dekha tha waha pe SRN, SRV protocols tha. To bahut saare protocols
   hote h communcation krne ka HTTP unme se ek h.

Q) What are HTTP headers?
 - Jaise hi hm HTTP request bhej rhe ho to saath m kuch information bhejni
   padti hai. Jaise hum koi file bhejte h to file k saath v information aati h
   like file ka naam kya h, size kya h, file create kb hui thi, file modify
   kb hui aur inke saath m kuch "META DATA" aata h (data k baare m data) aur
   yhi sb h humaare HTTP headers (metadata).
 - Ye metadata key-value pair m hota h.
   For example, name: Hitesh -> name(key):Hitesh(value). 
 - Yr key-value HTTP k andr bahut jyda open rkhi gyi h. Kuch headers h jo ki
   already defined h ki ye aaega to mai ye expect krta hu lekin hum chahe to khud
   k headers v bna skte h. Aur headers humein request m v milnge aur response m
   v. Jb hm request bhejte h depend krta h kaha se kaise request jaa rhi h to uske
   baare m v kaafi information jaati h ki humne programmatically request bheji h
   ya koi tool use kra h jaise POSTMAN, THUNDER CLIENT aur agar humaare browser
   se bheji h to v ek alag request header jaati h. Aisa h response v hota h, server
   kaise response humaare liye kr rha h, ho skta h server ne humein OK bheja ho,
   ya ho skta h server ne bola ho 404-Not Found, to depend krta h kya values aai h.

 - meta data -> key-value sent along with request & response
 
Q) Headers krti kya hai?
 - Headers k bahut saare kaam hote h like -
 (a) Caching - Ye dekhne k liye ki ye request avi to aai thi to iska koi cache
               database m se koi value utha le agar mil jae to 
 (b) authentication - Authentication bahut jagha use hota h. Iske headers hote h
                      bearer token h kya, session cookie h kya, session value h
                      kya, refresh token h kya. To authentication k liye v kaafi
                      mechanism liye jaate h.
 (c) Manage Start - State Management se mtlb h user ki state kya hai? Kya wo ek
                    guest user hai, kya wo logged in user hai, kya usne already
                    kuch cart m rakh rkha hai, user ki state kis position pe h
                    wo v hum dekhte hai. 
Note : 2012 se pehle se jitne headers hote the sbme "X-prefix" rkhna jaruri hota 
tha. Suppose humne koi name bheja h to "X-Name" rkhna jaruri tha lekin ye "x"
almost "deprecated" ho gya h. Use nhi krne pe koi error nhi aati hai but puraane
codebase m dekhne ko milega.

* Headers ki koi category nhi h but humne khud k liye bna k rkhhi h, aur isme
* dekhnge ki headers kis tarah k hote h -
    1. Request Headers        -> From Client
    2. Response Headers       -> From Server
    3. Representation Headers -> Encoding/compression 
    4. Payload Headers        -> data

1. Request Headers 
 - Inn sb m wo category aati h jo ki Client se jo v data aa rha hai usko hum
   request header bol lete h.

2. Response Headers ""
 - Inn sb m wo category aati h jo ki Server se jo v data aa rha hai usko hum
   response header bol lete h.  
 - Suppose ek server h wo OK k liye 200 code bhej rha h, ek server h wo OK k liye
   code bhej rha h 400, to obvisouly ye standard practice nhi hui aur standard
   code v nhi hua to kuch convention h jo hum lete hai. 

3. Representation Headers : Ye humein btata h ki data humara kis encoding m hai
   ya kis compression m hai. Aage jaa k kuch aise applications handle krnge
   khas kr k mobile applications m jaha pe data humaara compressed format m 
   aata h like "gzip" m aata h to extract krna pdta h fir usko representation
   krna pdta h. Graph Chart agar hm use krnge kvi, aage jaa k kuch applications
   banaenge like Zerodha, RazorPay, waha pe graph chart ka bahut kaam hota h to
   uss tarah m data jydatar hum "Compressed" format m bhejte h qki network ki ek
   limit h ki itna h data bhej skte h wrna lag aane lagega to uss case m hum
   representation header ka use kr k uski "encoding" kya h ye "compression" kya
   hai ye sb dekh lete hai.

4. Payload Headers : Payload fancy naam h data k liye. Jo v humein data bhejna h
   jaise  "_id" ya fir normally kisi ki "id" bhejni h ya fir kisi ka "email"
   bhejna h to colon lga k data bss bhar dena h aur bass wahi payload hota h
   like this "email: aslampaasa420@gmail.com". 

Q) Itne hi type k headers hote h kya?
 - No! Sbke alag alag categorization h. Depend krta h hum kn si book padh rhe h,
   kn se youtuber se pdh rhe h. Iss tarike k kaafi aur header milnge like -
    5. Security

Note : Most Common Headers -
    (a) Accept: application/json
    (b) User-Agent
    (c) Authorization
    (d) Content-Type
    (e) Cookie
    (f) Cache-Control

1. Accept: application/json 
 - Ye sirf ye btata h ki mai kis type ka data accept krne wala hu, mostly
   servers pe hota hai.
 - Aaj k date m "application/json" sbse common dikhega, it means ki mai json
   ka data accept krta hu but sirf aisa nhi h, aur v format h jo accept hota h
   like "text/html" but aaj k date m most common APIs hi banti h to "application/
   json" sbse jyda dikhega.

2. User-Agent :
 - Ye header sirf ye btata h ki kon si application se request aai hai like
   POSTMAN se aai h ye browser ne bheji hai to browser kn sa tha, kn sa engine
   support kr rha tha etc. To "User-Agent" k andr kaafi information mil jaati h
   User ki, aur tabhi tk hum dekhte h ki kuch websites/application hum visit krte
   hai to automatically ek popup de deti h ki aap ne humaari app use kri h aur ye
   sb user agent se nikaala jaata h ki. Agar aap ne humaari browser se humaari
   website visit ki h aur mobile browser se data aa rha h to user ko popup suggest
   kr dete h humaari app download kr lo.
   
3. Authorization :
 - Ye sbse commonly used hai. Agar hum frontend pe kaam kr rhe h to humein
   authorization headers bhejne hote hai.
 - Sbse common hm yha dekhnge to "authorization: beader_______", bearer k saath
   ek long line hoti h code ki. Ye kuch nhi, jb hum bearer token bhejte h JWT
   style mai to isi tarah se bhejte h ki pehle keyword lagaya jaata h "bearer"
   fir uske baad ek space fir "JWT Token".

4. Content-Type :
 - Images, pdf etc kya bhej rhe h wo sb isi m dekha jaata h

5. Cookies :
 - {...} isi tarah se object h waha pe aur values h ki ye wala unique code hai,
   itne time tk ye wala cookie rhegi, itne time tk hum user ko login rkhnge to
   ye sb information cookies m bheji jaati hai.

6. Cache-Control :
 - Data kb expire kr du, data agar network m rehna chah rha h to kitne time baad
   usse expire kr du etc. to ye sb hm cache control m server se kr lete hai.

-> Ye sb the basics, iske baad kuch headers h jo "Production" grade apps m dikhnge
   standard companies m aur kai baar nai v dikhnge -
   (a) CORS
   (b) Security
 - Ye headers apne aap m kuch nhi krti, Companies ki internal policies hoti h
   ki hum kya kya origins allow krne wale h mtlb kaha kaha se request aa skti h
   apni application pe. Hum humaari website allow kr rhe h, app allow kr rhe h,
   aise directly allow ni kr rhe hai. Jaise twitter pe hum dekhnge ki scrapping
   allow nhi hai to wo sb control humne CORS se kr rkha hai ki kn kn se 
   credentials allows h, methods allow hai, hm GET allow krte h but POST allow
   nhi krte hai.
 - Security Policies v hoti h.

CORS :
    (a) Access-Control-Allow-Origin
    (b) Access-Control-Allow-Credentials
    (c) Access-Control-Allow-Methods

Security :
    (a) Cross-Origin-Embedder-Policy
    (b) Cross-Origin-Opener-Policy
    (c) Content-Security-Policy
    (d) X-XSS-Protection

Note : Ye sb header information h, isse automatic kuch nhi hota hai. Humein 
define/code likhna pdta hai ki ye allow kr rkha h apni application mai, ye
meta-data hai isliye mai ye kaam kr du, automatic kuch nhi hota hai.



HTTP Methods :
 - Basic set of operations that can be used to interact with server 
1. GET : Retrieve a resource
2. HEAD : No message body (response headers only) 
3. OPTIONS : What operations are available
4. TRACE : loopback test (get same data)
5. DELETE : remove a resource
6. PUT : replace a resource
7. POST : interact with resource (mostly add)
8. PATCH : change part of a resource

 - Humne agar POSTMAN, THUNDERCLIENT galti se khol liya hoga dropdown k andr
   jaga pe GET likha hota h to waha bahut long list open ho jaati hai, to HTTP
   k andr kaafi methods available ho jaati hai jo hum kaam m le skte hai. Kuch
   common methods h jinke baare m hum baat krnge.
 - Ye methods kuch ni h bss humein btate h ki kya kya performance hm perform kr
   rhe hai. For example, agar mujhe ek data send krna h aur mai chahta hu ki
   database m new entry ho jae to obvious ki baat h ek method h uss kaam k liye.
   Agar mai request kr rha hu server se aur keh rha hu ki mujhe ye data wapas bhej
   do to v ek specific operation h "READ", agar mai chahta h data ka kuch part 
   update krna hai to alg ek operation h aur mai chahta hu ki poora data ek baar
   m update ho jae to uska alag operation hai. To har tarike ka operations humaare
   paas available hote hai, kuch most commonly use hote hai aur kuch nhi v use
   hote hai, kuch v baare m kvi discuss hi nhi hota hai.
 - Most commonly used methods are :
 (a) GET : Retrieve a resource
 (b) POST
 (c) PUT
 (d) DELETE

1. GET : Retrieve a resource
2. HEAD : No message body (response headers only) 
 - Isme body message nhi hota h, sirf headers wapas aate hai.
 - Kaafi baar humein dekhna hota hai User-Agent kya hai ya fir cache-control
   kitna h, to uss cases mai kai baar aise end points banae jaate hai ki sirf
   head hi bhejo.
3. OPTIONS : What operations are available
 - Agar humne end point bna rkha h to Options k andr server se puch skte h ki
   kn kn se Operations available h iss endpoint pe.
 - For example, agar /user h to /user pe humaare POST available h kya, get available
   hai kya, aur kya kya chije h wo mujhe bta do.
 - Bahut kam dekhne ko milega aur automatic kuch nhi hota, humein end points
   banaane hote hai. To GET, PUT, POST, DELETE, ye sb hm apne Controller m bna k
   dekhnge, automatic kuch nhi hota hai. 
4. TRACE : loopback test (get same data)
 - Generally, Debugging k case m use aata hai. Ye loopback deta h means humne jo v
   request bheji h waha se wo response bhej deta hai.
 - Isme kai baar humari resources proxies k piche hota hai, to kn kn si proxies se
   request jaa rhi hai, kn kn se proxies se hote hue request aa rhi hai unke baare
   m humein debugging krni hai ki mujhe response timely nhi mil rha hai, ya jyda
   time lg rha hai to uss case m hum TRACE ko use kr lete hai.
5. DELETE : remove a resource
6. PUT : replace a resource
 - Editing nhi bolnge, actually m poora hi object replace ho jaata hai
7. POST : interact with resource (mostly add)
 - Add value/data
8. PATCH : change part of a resource
 - PATCH k andr sirf uss resource ka particular part hum edit krte hai


HTTP Status Code :
+------------------------------------+
|   1XX ->  Informational            |
|   2XX ->  Success                  |
|   3XX ->  Redirection              |
|   4XX ->  Client Error             |
|   5XX ->  Server Error             |
+------------------------------------+

1.  100 -> Continue
2.  102 -> Processing
3.  200 -> OK
4.  201 -> Created
5.  202 -> Accepted
6.  307 -> Temporary Redirect
7.  308 -> Permanent Redirect
8.  400 -> Bad Request
9.  401 -> Unauthorized
10. 402 -> Payment Required
11. 404 -> Not Found
12. 500 -> Internal Server Error
13. 504 -> Gateway Time Out


 - 1XX wali range generally information pass krne k liye use hoti hai
 - 2XX wali range success k liye use hoti h ki aapne jo data bheja h wo successfully
   humein receive ho gya hai + aap jo operation krna chahte the wo successfully
   complete ho gya hai
 - 3XX wali range direction k liye use hota h means jo v hum resources dekhna
   chah rhe the wo ab remove ho gya hai, ya kahi aur move ho gya hai, temporary
   hua h ya permanent hua h wo depend krta hai alag situation pe. Basically it
   means hm to method/url dekh rhe h ya access kr rhe h wo yha se remove ya kahi
   aur move ho gya hai.
 - 4XX wala jydatar Client Error k liye use hota hai, jaise suppose kariya Client
   ne login krne k koshish kari ya fir koi Operation karne k koshish kar rha h aur
   apna token nahi bheja ya password sahi nahi bheja, so basically means Client
   se information sahi se nahi aayi hai. To agar Client ka koi Error hai to hum
   4XX k saath hm bhjte hai
 - 5XX jydatar server errors m use ki jaati hai, suppose kariya Client ne sahi se
   image bhj di, humne api call kiya, image upload krne k koshish ki, network
   break ho gya, network m traffic jyda hai, congestion jyda hai aur image upload
   nahi ho payi kisi karan se to humari galti h qki Client se nhi hui, usne to
   file bhj di to uss case m hm 5XX use krte hai.


1.  100 -> Continue
2.  102 -> Processing
  - Ho skta hai jyda data bheja ho humne aur time lg rha ho, to mai chahta hu ki
    3 sec baad apne aap user ko ek response to bhj du ki data processing ho rha h.
3.  200 -> OK
4.  201 -> Created
  - Agar resource successfully create ho gya hai jo v hm add krna chahte the DB m
5.  202 -> Accepted
  - Jo data bhej wo maine accept kr liya
6.  307 -> Temporary Redirect
7.  308 -> Permanent Redirect
8.  400 -> Bad Request
9.  401 -> Unauthorized
  - Login to h lekin uss kaam ko krne k liye authorized nhi hai
10. 402 -> Payment Required
  - Payment related request k liye use ki jaati hai
11. 404 -> Not Found
  - Client ne kuch aisi resources access krne ki koshish ki jo h hi nhi
12. 500 -> Internal Server Error
13. 504 -> Gateway Time Out

Note : Ab iska backend se kaha relation h kaha nhi ye baad m dekhnge.
    */ 