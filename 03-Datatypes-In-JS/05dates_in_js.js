/*Dates : Dates define hota h January 1, 1970, UTC se. 
JavaScript ne ek arbitrary date li aur waha se hi jitni v date declare hoti h wo calculate hoti h
-> Dates usually milliseconds m calculate hoti h, to jb v hm date declare krte h to ek bahut lambi si date string aati h 
means wo 1 January, 1970 se milliseconds m calculate krti h which is confusing.
-> Javascript ne Temporal naam se ek API suggest ki h jisko use krte h aur future m kuch aisa hoga ki date jo time h wo 
long-standing pain point in ECMAScript ka, to Temporal API ko ek global object banane ka proposal h like Math.
-> Jaise hm Math.random( ) use krte h usi tarah se in future Date ko v use kr paenge.
-> In future jb ye fully implement kr diya jaega to methods kuch aisa hoga -
1) Temporal.Now.instant() - get the current system exact time
2) Temporal.Now.timeZone() - get the current system time zone
3) Temporal.Now.zonedDateTime(calender) - get the current date and wall-clock time in the system time zone and specified calender
4) Temporal.Now..zonedDateTimeISO() - get the current date and wall-clock in the system time zone and ISO-8601 calender 
5) Temporal.Now.plainDate(calender) - get the current date in the system time zone and specified calender
6) Temporal.Now.plainDateISO() - get the current date in the system time zone and ISO-8601 calender
7) Temporal.Now.plainTimeISO() - get the current wall-clock in the system time zone and ISO-8601 calender
8) Temporal.Now.plainDateTime(calender) - get the current system date/time in the system time zone, but return an object that doesn't remember
its time zone so should NOT be used to derive other values (e.g. 12 hours later) in time zones that use Daylight Saving Time (DST)
9) Temporal.Now.plainDateTimeISO() - same as above but return the DateTime in ISO-8601 calender
NOte : But ye future proposal h.
*/ 

// Dates
let myDate = new Date();
// See instance of Date
console.log(myDate);    //2023-10-24T17:24:20.528Z -> Isko conversion m le k aana h
// try to convert the date to a string
console.log(myDate.toString()); //Tue Oct 24 2023 22:55:27 GMT+0530 (India Standard Time) -> Better h pehle se
// Note : toString() k tarah humare paas bahut saare methods h
console.log(myDate.toDateString()); //Tue Oct 24 2023
console.log(myDate.toLocaleString()); //24/10/2023, 10:57:58 pm
// Bahut saare methods h, to depend krta h humein kis jagha kis tarah ka date chaiye

// Some more date object methods --------------------------------
console.log(typeof myDate); //object date

console.log(myDate.getFullYear()); //2023
console.log(myDate.getMonth()); //9 -> Ye '0' se start hote h isliye hm +1 krnge exact date k liye
console.log(myDate.getMonth() + 1); //10

console.log(myDate.getDate()); //24
console.log(myDate.getHours()); //23
console.log(myDate.getMinutes()); //55

console.log(myDate.getSeconds()); //25
console.log(myDate.getMilliseconds()); //528

console.log(myDate.getTime()); //1634236127528

console.log(myDate.getTimezoneOffset()); //-330

// Isme pta krte h ki kya print hua h aur kn si date aaegi
let myCreatedDate = new Date(2023, 0, 23);  //note : Month 0 se start hota h JS m
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 11, 23, 5, 3);  
console.log(myCreatedDate2.toLocaleString());  //23/12/2023, 5:03:00 am

let myCreatedDate3 = new Date("2023-01-14");  // Jb hm dd-mm-yyyy krte h to month 01 se start hota h
console.log(myCreatedDate3.toDateString());  //Wed Dec 23 2023

let myCreatedDate4 = new Date("01-14-2023");  // Hm mm-yy-dd ko follow krte h
console.log(myCreatedDate4.toLocaleString());  //14/1/2023, 12:00:00 am

// Timestamps - Agr humein kuch pta krna n ki exact timestamps ki value kya h for especially jb hum quizzes design krnge JS m, poll design krnge ki kisne fastest diya h to inn situation m hm timestamp use krte h
let myTimestamps = Date.now();
console.log(myTimestamps); //1698169070927 -> milliseconds since 1,January, 1970
// createdDate se milliseconds nikaalna is difficult
// We use jb hm rooms book krte h, hotels, fir koi poll bna rhe h to unn case m humein date ko compare krna pdta h
console.log(myCreatedDate.getTime()); 
//Ye date object h to isko bol skte h getTime()
// Ye getTime() ye krega ki jo v humnein date declare kra tha but humein to 1st jan se wo value chaiye
// 1698169308365
// 1674412200000
// Ab humare paas 2 values in milliseconds m, to inko hm aapas m easily compare kr skte h

console.log(myCreatedDate.getTime === myCreatedDate.getTime()); //false


// convert in milliseconds to seconds (Interview Question)
console.log(Date.now()/1000); //1698169594.077
// But problem ye h ki ye decimal value m aa jaati h
// Solution :
console.log(Math.floor(Date.now()/1000)); //1698169594
// chota value easily compare ho jaata h


// Ab humein apne website m live date show krna rehta h to hm string interpolation use krte h - `${newDate.getDate()}` -> Date print ho jaega
let newDate = new Date();
console.log(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`); //24/10/2023

// newDate.toLocaleDateString(); -> most important
let customizeDate = newDate.toLocaleDateString('default', {
    weekday: "long",    //Tuesday
    year: "numeric",    // 2023
    month: "long",      // October
    day: "numeric"      // 24
}) //Humein kya chaiye wo isme hm define kr skte h (Means khud se customize kr skte h)
console.log(customizeDate); //Tuesday, 24 October, 2023