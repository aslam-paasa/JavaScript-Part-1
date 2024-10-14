/**
 * Promises:
 * => Kuch code socho man mein, jo ki async code ho, mtlb ki ye side
 *    stack m jaega aur baad m chalega main stack mai. Ab ye socho
 *    ki humne iss code ko likha hai to iska answer kabhi aaega aur
 *    aisa bhi ho skta hai ki answer naa aaye, promises kya hai aisa
 *    samjho ki aap promise k andr koi v async code likh do jo mann m
 *    aae aur promise aapko ek parchi de deta hai aur wo parchi par
 *    by default likha hota hai waiting, parchi par 2 events hote hai
 *    mainly, ek event ka naam hai "then" and ek event ka naam hai
 *    "catch". Agar aapka data aa gya to parchi pe completed likh jaega
 *    waiting ki jagha and then chalega, lekin agar data mein dikkat
 *    aayi to catch chalega and waiting ki jagha rejected likha jaega.
 * 
 * => Aman raghav k paas gya aur bola ki khana lene bhej do kisi ko
 *    Raghav ne kisi ko bhej diya and aman ko bola ye parchi le lo
 *    jb v wo banda aa jaeha to parchi se pta chl jaega. By default
 *    parchi pe waiting likha hai qki avi tk khana aaya nhi hai.
 * Note: Aman : Developer
 *       Raghav : Promise
 * 
 * Pattern:
 * new Pattern(function(resolve, reject) {...})
*/

const parchi = new Promise(function(resolve, reject) {
    /**
     * Jaa kar ek user lao, agar wo male hai to green button nahi to
     * red button
    */
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json)
    .then(result => {
        if(result.results[0].gender === 'male') {
            resolve();
        } else {
            reject();
        }
    }) 
})