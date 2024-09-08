/**
 * Q. How to fetch data(object) from an API?
 * => Kyuki ye internet pe jaega aur data le kr aaega, to isme time
 *    lagta hai, to by-default hi JS m fetch ko async bnaya gya hai
 *    qki fetch ka kaam hai data laana wo v kisi URL se. Ab aisa ho
 *    skta hai ki uss URL ki website slow ho, to data laane m time 
 *    lage. Aur agar fetch synchronous hota, to uske baad ka code
 *    tbtk nhi chlta jbtk uska data nhi aa jaata, which is a big 
 *    problem, poora code atak sakta tha.
 * */ 

/**
 * Synchronous Example:
 * 1. Jao panchi letter lekar aao
 * 2. Jb panchi aae tbhi agli line chalao
 * 
 * Asynchronous Example: 
 * 1. Jao panchi letter lekar aao
 * 2. Jb aa jaana to bta dena, tbtk mai aage ka code chala deta hu.
 * 
 * fetch(`letter laane wala URL`)
 * console.log("Hey")
 * 
 * => fetch ko data laana m time lgega isliye wo chla jaega side stack pe.
 * => console code free hai, isliye wo aa jaega main stack pe.
 * 
 * But jb letter aa jae tbhi next line chalana hai. Iske liye ek jugaad
 * hai. fetch() humein ek in-built fn deta hai ".then()", ye tabhi
 * chlta hai jb 'letter' aa jaega. Humein humaara data milega ".then()"
 * k andr 'raw' format mai.
 * 
 * fetch(`https://randomuser.me/api/`)
 * .then(raw);
 * 
 * Q. Ye raw data kaise dikhta hai?
 * => Response
 *       a. body: ReadableStream
 *       b. bodyUsed: false
 *       c. headers: Headers {}
 *       d. ok: true
 *       e. redirected: false
 *       f. status: 200
 *       g. statusText: ""
 *       h. type: "cors"
 *       i. url: "https://randomuser.me/api/"
 *       j. [[Prototype]]: Response
 * 
 * Q. Isme data kaha hai?
 * => body: ReadableStream
 * => Hum iss data ko avi read nhi kr skte directly qki blob hai jo
 *    humare readable format m nhi hai, computer k readable format m
 *    hai. So, humein iss data ko convert krna pdega humaare readable
 *    format mai.
 * Note: 'raw' object data is in computer readable stream.
 * 
 * Q. How to convert the computer readable format data to user readable
 *    format data?
 * => Convert the computer readable format data to user readable i.e.
 *    JSON.
 * 
 *    fetch(`https://randomuser.me/api/`)
 *    .then(raw => raw.json());
 * 
 * Q. Ye data humein kaha milega?
 * => Next ".then()" fn mai.
 * => 1. fetch: fetches data and give the raw data to ".then()" fn.
 *    2. .then(): It converts the blob data to json data and pass it
 *                to the next ".then()" fn.
 *    3. .then(): json data received.
 * 
 *    fetch(`https://randomuser.me/api/`)
 *    .then(raw => raw.json())
 *    .then(readable => console.log(readable));
 * 
 * Console:
 * => a. info: {seed: '04d7756ce7057dee', results:1, page:1, version:'1.4'}
 *    b. results: [{...}]
 *    c. [[Prototype]]: Object
 * 
 * Q. Isme data kaha hai?
 * => Yhi to data hai. Data m 2 chije aai hai:
 *    (a) results
 *    (b) info
 * => Humein jo data chaiye wo results k andr hai:
 *    results: Array(1)
 *       a. 0: {gender: 'female', name: {...}, email: xyz@gmail.com}
 *       b. length: 1
 *       c. [[Prototype]]: Array(0)
 * => Array(1) means sirf ek value hai, at idx-0 pe.
 * 
 *    fetch(`https://randomuser.me/api/`)
 *    .then(raw => raw.json())
 *    .then(readable => console.log(readable.results[0]));
 *    
*/

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(readable => console.log(readable.results[0].email));


fetch('https://jsonplaceholder.typicode.com/posts')
.then(raw => raw.json())
.then(res => console.log(res))