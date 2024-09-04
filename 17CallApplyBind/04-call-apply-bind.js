/**
 * Call Apply Bind:
 * => Ye teen tarike hai function ko call krne k kisi object ko "this"
 *    maan kar.
 * */ 


const obj = {name: "Mohammad"};

function abcd() {
    console.log(this); // window
}
// abcd();

/**
 * Avi humaari "this" ki value "window" hai. But hum chahte hai ki jb 
 * humari function chale to "this" ki value "obj" wali object ho.
 * 
 * Solution: 
 * => abcd.call(obj)
 * => Aur iss call() k andr jo v pass kr denge, "this" ki value wo
 *    ban jaegi.
 * 
 * Note: Agar fn ko sirf call krnge aur iske andr kuch pass nhi krnge
 * to "this" ki value "window" hi rahegi. 
*/

abcd.call(obj); 



/**
 * 2. apply: 
 * => Pehli value "this" aur fir array ki value pass krnge.   
*/

function abcd(a, b, c) {
    console.log(this, a, b, c);
} 
abcd.apply(obj,[1,2,3]);


/**
 * 3. bind:
 * => Similar to call, but bind fn ko chalata nhi hai, humein ek aur
 *    fn deta hai return kr k jisse hum baad m chala skte hai.
 * => Result is stored in a variable jisse hum baad m chala skte hai.
*/

const baadMaiChalaneKLiyeFn = abcd.bind(obj);
baadMaiChalaneKLiyeFn();