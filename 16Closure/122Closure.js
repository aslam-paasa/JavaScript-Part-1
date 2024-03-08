function outer(first) {
    console.log("Inside Outer");
    return function inner(second) {
        console.log("Inside Inner");
        return first*second;
    }
}
// Pehle humne 2 pass kiye fir usko rVal m store kiye then rVal m 4 pass kiye, to ye kn sa parameter lega?
let rVal = outer(2);
console.log("before calling rVal that contains inner")
let ans = rVal(4);
console.log(ans);   //8 

/*
Q) Pehle humne 2 pass kiye fir usko rVal m store kiye then rVal m 4 pass kiye, to ye kn sa parameter lega?

->  Closure :                                            Memory Allocation for inner @ 20k
Stack memory diagram:                                   +------------------------+
        +------------------------+                      |second = undefined      |
        |                        |                      |                        |
        |                        |                      |                        |
        |                        |          +|----------|                        |
        |                        |          |           |                        |
        |                        |          |           +------------------------+
        |first = undefined -> 2  |          |                Memory Allocation for outer @ 16k
Outer ->|inner = 20k             |          |                +------------------------+
        |------------------------|----------+                | first = undefined      |  
        |ans = undefined         |                           |                        |
GEC   ->|rval = undefined        |                           |                        |
        |outer = memory allocate |---------------------------|                        |
        +------------------------+                           |                        |
                                                             +------------------------+

1) Memory Allocation :
-> Sabse pehle outer() function aaega memory k andr to ye kahi memory bna lega aur usko point kr rha hoga
-> Iske alawa rVal & ans v pda hoga jo ki undefined ho jaega 

2) Code Execution : 
-> Ab code run hoga to outer() function call hoga jiske andr ek first naam ki variable/parameter h jo call hoga
-> Jb code chlega to first parameter undefined se 2 ho jaega
-> fir inner() function ki reference store ho jaegi i.e. 20k and ek alag se inner ki memory bn jaegi
-> Ab outer ka code chlega to sbse pehle "Inside outer" print hoga
-> Then hm inner ko return kr denge
Note : let rVal = outer(2); -> ab outer() ka kaam khtm ho outer() function stack se hat jaega aur iske variables 
       v stack se hat jaenge

                                                        Memory Allocation for inner @ 20k
Stack memory diagram:                                   +------------------------+
        +------------------------+                      |second = undefined      |
        |                        |                      |                        |
        |                        |                      |                        |
        |                        |          +|----------|                        |
        |                        |          |           |                        |
        |                        |          |           +------------------------+
        |                        |          |               
Inner ->|second = 4              |          |                
        |------------------------|----------+               
        |ans = undefined         |         
GEC   ->|rval = undefined        |                 
        |outer = memory allocate |
        +------------------------+                     
-> Ab print hoga console.log("before calling rVal that contains inner")
-> Iske baad ye line call hogi -> let ans = rVal(4); aur isme 20k inner() function pda h to ye call ho jaega
-> Ab second call hoga to usme 5 pass hoga* then "Inside Inner" print hoga
-> Ab humare paas return first*second; m second pda hua h lekin first ni pda h. To isi first ko enable krne k liye
   agar humare paas koi inner function h aur uske bahar koi variable declared h, ab chahe wo function stack pe
   aa k udd k chla jae tb v uske saare variables ka access andr wale function k pass rhega aur isi ko bolte h
   Closure. So, closure is nothing but a feature given by JavaScript
   
Note : Closure : Agar bahar wala function stack se udd v jae tb v andr wale function k bahar wale saare variables 
       ka access rhega. So, basically inner jbtk khtm ni ho jaata tb tk outer ki access rhta h

-> Finally, console.log(ans) -> 8 print krega       */
