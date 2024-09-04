/**
 * Prototypal Inheritance:
 * 
 * Human -----> 1. Walk     Teacher -----> 1. Walk
 *              2. Drink                   2. Drink
 *              3. Sleep                   3. Sleep
 *                                         4. Teach (specific to teacher)
 * => Hum objects create krte hai and kisi ek parent constructor fn ke
 *    prototype main kuch add kr dete hai aur jb v add hota hai to wo
 *    parent se banne wale sabhi children instances ko wo properties jo
 *    parent ko prototype m di gyi thi wo milta hai saugaat main. 
 * */ 

/**
 * Constructor Fn:
 * Ek function jo ki "this" ka upyog kr rha ho and new k dwara naye
 * naye objects bna kar deta ho, aise functions ko constructor fn
 * kehte hai.
 * 
 * Ex: function abcd() {
 *        your code
 *     }
 *     new abcd();   ====> blank object created
 *                   ====> Iske andr "this" ka meaning hai wo blank
 *                         object ko point kr rha hai.
 * 
 * Q. How to add data inside the blank object?  
*/

function makeHuman(name, age) {
    var cal = 25*4; // not stored in human1 object
    this.name = name;
    this.age = age;
}

/**
 * Creating multiple humans from blueprint:
*/
const human1 = new makeHuman("Harsh", 25);
const human2 = new makeHuman("Mohammad", 28);
console.log(human1); 
console.log(human2);

/**
 * Aisa koi v function jisme aap "this" ka upyog kr rhe ho aur uss
 * function ko call krte waqt aap "new" ka upyog karein, to new ka
 * matlab waha par ek blank object ho jaata hai.
 * 
 * => new makeHuman() => Blank object
 *            |
 *            V
 *    Function Call => this.name => {}.name  
 * 
 * => blank object k andr name var bn jaegi. Aur jo v value hum apne
 *    argument m paas krnge wo waha se jaa k mere variable m store ho 
 *    jagei.
 *         (5)                          (4)        (3)
 *         +-------------------------------+     +------+
 *         V                               |     V      |
 *    let ans = new makeHuman("Harsh") => this.name = name;
 *         |                     |(1)                   |(2)                               V                      |
 *         |(6)                  +----------------------+
 *         V
 * console.log(ans); ==> makeHuman { name: 'Harsh' }
 *                                            (7)
 *    
*/



/**
 * What is prototypal inheritance? 
 * => Jb v printMyName() call krnge uss blank object ka jo v name, age
 *    hoga wo print ho jaega.
*/
function makeHumanBluePrint(name, age) {
    this.name = name;
    this.age = age;
    // this.printMyName = function() {
    //     console.log(this.name);
    // }
}

makeHumanBluePrint.prototype.printMyName = function() {
    console.log(this.name);
}

const humanPrototype01 = new makeHumanBluePrint("Mohammad", 27);
const humanPrototype02 = new makeHumanBluePrint("Abdul", 32);
console.log(humanPrototype01);
console.log(humanPrototype02);

/**
 * Issue:
 * 1. name: Iski argument value alag ho skti hai
 * 2. age : Iski argument value alag ho skti hai
 * 3. printMyName: Dono object m same function pass ho rhi
 * 
 * Q. Agar printMyName yha likhte hai to pehle humanPrototype01 m v gya
 *    aur humanPrototype02 m v gya, issue ye hua ki dono human same
 *    fn rakh rhe hai, aur jb dono same fn apni apni rkh rhe hai to
 *    extra memory v le rhe honge apne apne liye, aur hm iss memory
 *    ko bacha skte hai aur isi ko Prototypal Inheritance kehta hai. 
 *    But how can we save memory?
 * => printMyName fn se hata denge, aur isse de denge in common. Aur
 *    human1 & human2, dono yhi se fn uthaenge.
 * 
 * +--------+                          +--------+
 * | human1 |                          | human2 |
 * +--------+                          +--------+
 *      |         +-------------+           |
 *      +---------| printMyName |-----------+
 *                +-------------+
 *                   Common fn 
 * 
 * Q. Hum aisa kya krnge ki wo waha se hatt jae but saare humans m
 *    available rhe?
 * => Agar hum apne constructor fn k prototype pe kuch add kr de
 *    i.e. makeHuman.prototype, to jitne v makeHuman se "new" kr k
 *    banenge unn sab k paas wo value available rahega.
 * => Aur ye fn shared way m use ho rha hai jo memory save krta hai,
 *    and this is known as Prototypal Inheritance.
*/