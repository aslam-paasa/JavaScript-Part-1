// ++++++++++++++++++++++++++++++Numbers++++++++++++++++++++++++++++++++++++
/* Numbers jb v hm define krte h like Score kisi game ka ya fir koi bank account balance to hm sidhe jaate h aise number ko define kr dete h -
const score = 400;
-> Ab iss score ko jaise hi likhte h to humare paas aa jaata h 400
-> Yha pe JS ne detect kiya h ki score ka type hona chaiye tha number lekin kaafi baar hm explicitly define kr skte h ki humein number datatype chaiye*/
const score = 400;
console.log(score);
// Sometimes agar hum bank application bna rhe h to 'new' keyword ka v use kr skte h -
const balance = new Number(100);  //Yha humne define kr diya ki humein to number hi chaiye
console.log(balance); //[Number: 100] yha specifically define kiya h ki ye number h


console.log(balance.toString()); // datatype -> string - 100
// string banane se kuch additional property aa jaati h -
console.log(balance.toString().length); // 3 characters
// toFixed(2) k andr ek number property deni pdti h
// Ecommerce company m kai baar calculation, multiplication hota h like GST calculation to Precision value kuch jyda h bdi ho jaati h
// Client ko utna Precision value dekhne ka aadat nai hota h to uss case m always use toFixed(2).
console.log(balance.toFixed(2)); //100.00 (Recommended)
console.log(balance.toFixed(1)); //100.0

const otherNumber = 23.8966;
// Precision Values should be between 1 and 21 
// Contains number and returns string
console.log(otherNumber.toPrecision(3));  //23.9  
// 23.9 aaya but agar ye hota 123.8966 to value kuch aur aata -
const otherNumber2 = 23.8966;
console.log(otherNumber2.toPrecision(3)); //124
//So, Precision means mujhe precise value chaiye lekin mujhe kitni value pe focus krna h
// To humne bola 3 to ye inn 123 pe hi precision dega aur uske decimal k baad 8 tha to round off kr diya 

// But agar value 4 h precision 3 h to isne convert kr diya 3 precision value and baaki exponential m - 1.12e+3
const otherNumber3 = 1123.8966; //
console.log(otherNumber3.toPrecision(3)); //1.12e+3
// Note : Presicion bahut dhyan se use krna pdega

// Ye zeros kaafi baar calculate krna ye dekhna difficult hota h 
// Javascript k andr kuch methods milte h jo jisse atleast unka representation easy kr skte h
// Like we can convert this in toLocaleString()
const otherNumber4 = 1000000;
console.log(otherNumber4.toLocaleString('en-IN'));  //10,00,000 (Indian Values)
console.log(otherNumber4.toLocaleString('en-US')); //1,000,000 (US Values)


// DSA m concept hota h MAX Value and MIN Value ka ki kitni big maximum value hm numbers m le skte h
// We know that Number is a datatype and iske saath attached kuch properties v milti h

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 -> Ye maximum safe integer value, itna hi max mai safely store kr skta hu
console.log(Number.MAX_VALUE); //1.7976931348623157e+308 -> yhi maximum value ho skti h JS k andr
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991 -> Ye minimum safe integer value, itna hi min mai safely store kr skta h
console.log(Number.MIN_VALUE); //5e-324 -> Yahi minimum value ho skti h JS k andr
// Note : Bahut saare or v methods h but generally itna ka hi kaam hota h




// +++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++
// Maths library JavaScript k saath aati h by default
// Ye apne aap m ek object h jiski bahut saari properties h
console.log(Math);  //Object [Math] {}

// abs -> absolute value (Bahut saari negative values h aur bss unki sign change kr k positive m krna h to ye absolute hota h)
console.log(Math.abs(4));   //4
console.log(Math.abs(-4));  //4

// round -> Decimal m kaam ni krna h to iska round off kr dete h
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5

// Agar hmein khud se choose krna h ki value upper wali choose hogi ya lower wali to uske 2 methods hote h -
// 1) Ceil -> means 'top'
console.log(Math.ceil(4.3)); //5
console.log(Math.ceil(4.6)); //5

// 2) Floor -> means 'bottom'
console.log(Math.floor(4.3)); //4
console.log(Math.floor(4.6)); //4

// sqrt -> means square root
console.log(Math.sqrt(5)); //2.23606797749979

//min -> means minimum (agar check krna ho ki array k andr sbse lowest value kn hi h to usme pass kr skte h)
console.log(Math.min(4, 3, 6, 8));  //3

// max -> means maximum (agar check krna ho ki array k andr sbse highest value kn hi h to usme pass kr skte h)
console.log(Math.max(4, 3, 6, 8));  //8
// Note : 'max' library sbse jyda Math.random() pe use krne wale h

// random -> Math.random ki value humesa between 0 and 1 rhegi
console.log(Math.random()); //0.9241982981417884

// But kuch problem aise aaegi like dice game bna rhe h to values 1 to 6 k bich m hi rhegi
// Ab Math.random ki value 0 to 1 k bich m aati h to kya hoga agar mai usse 10 se multiply kr du
// 10 se multiply krte h to humein pta h ek digit shift ho jaati h left m
console.log(Math.random()*10); //6.0592978092959875
// But value 0.04... v ho skti h to uss case ko avoid krna k liye hm ek +1 kr dete h
// Ab jo value aaegi uski guarantee h ki minimum value 1 aaegi, 0 ni aaegi
console.log(Math.random()*10 + 1); //8.116011931170743
// But iss tarah se value add krnge ya BODMAS ko kaafi problem ho jaega to iss chij ko avoid krna k liye -
// Step-1 : Math.random()ko multiply kr dete h 10 se aur usko wrap kr dete h bracket k andr 
// Step-2 : Ab jo result aaya usko kr dete h +1
console.log((Math.random()*10) + 1); //10.773856256214497
// But ye values kaafi jyada jaa rhi h 0 aur 9 k bich m, to humein kaha se kaha tk value chaiye uspe depend krega ki hm kisse kisko multiply kr rhe h

// Note : Kai baar aisa hota h ki values sabse choti aae to Math.floor() k saath wrap up kr dete h -
console.log((Math.floor(Math.random()*10) + 1));    // 8 (Ek number dega)

// Trick (Ye stack overflow pe kai jagha dikhai dega)
const min = 10;
const max = 20;
// To define ho gya h ki mujhe value chaiye 10 aur 20 k bich m
// Upar wala concept hi yha use hota h lekin iska ek generic syntax formula ban jaata h

// Ab Math.random() ko multiply krnge ki itna to chaiye hi chaiiye to iske liye ek formula sikhnge -
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // min : 9, max : 17