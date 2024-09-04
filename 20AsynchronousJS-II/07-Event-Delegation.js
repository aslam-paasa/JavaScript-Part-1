/**
 * Event Delegation:
 * => Jb aap ek event listener se kai saare different elements k events
 *    ko handle kr sake.
 * => Event Listener ko parent pe jagao and unki id, class ya fir tag
 *    k basis par differentiate karao.
 * */ 


/**
 * <div id="parent">
 *       <button id="play">play</button>
 *       <button id="pause">pause</button> 
 * </div>
 * 
 * Pehle addEventLstener play & pause pe dhunda jaega, agar listener 
 * inpe nhi mila to parent pe dhunda jaega.
*/

// document.querySelector("#parent");
// parent.addEventListener("click", function(details) {
//     console.log(works);
// });

/**
 * Maine play & pause, dono button pe listener nhi lagaya hai but agar
 * mai kisi pe v click karunga to "works" print hote hue dikhega.
 * And that's a clear sign ki agar play & pause pe listener nhi rha to
 * event listener ko check uske parent pe kiya jaega. Aur agar parent
 * pe v nhi hua to event listener body pe check krega, aur usse hi
 * "Event Bubbling" kehte hai.
*/

/**
 * Event Delegation means ek event listener se kai saare kaam kr lena.
 * Ab play & pause me se kisi pe v click ho, event listener chalega,
 * aur uski saare details yha receive ho jaati hai, jiska naam hm
 * kuch v rkh skte hai, but generally log "event" rakhte hai, but hm
 * "details" rakhnge:
 * 
 * document.querySelector("#parent");
 * parent.addEventListener("click", function(details) {
 *     console.log(works);
 * });
 * 
 * => Mai jispe v click karunga uski details aa jaegi mere browser pe
 * => Jb v click event listener chala "#parent" pe, to kiske wajah se
 *    click hua tha wo hai "details", aur uski saare details aa jaegi.
 * 
 * PointerEvent {......}   
 * 
 * => Saari details isme hai, aur isko expand krnge to "target" milega
 *    aur "target" pe agar hover krnge to dikh jaega kispe click hua
 *    tha. So, "target" wo banda hai jispe click hua tha.
 * 
 * document.querySelector("#parent");
 * parent.addEventListener("click", function(details) {
 *     console.log(details.target);
 * });
 * 
 * Console:
 * => <button id="play"> play </button>
*/


/**
 * Handling multiple elements with single listener:
*/
document.querySelector("#parent");
parent.addEventListener("click", function(details) {
    if(details.target.id === "play") {
        console.log("play song");
    } else if(details.target.id === "pause"){
        console.log("pause song");
    } 
});