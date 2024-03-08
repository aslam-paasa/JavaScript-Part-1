// Scope means ek variable kaha tk available h (kis range tk usko access kr skte h)
// var is function scoped (means variable ko access krne ki range poore function tk rhegi)
var a;
function fn() {
    console.log("Before declaration 8", a);
    var a;
    console.log("After declaration 10", a);
    a = 20;
    if(true) {
        var a = 30;
        console.log("35", a);
    }
    console.log("After initialization 12", a);
}
a = 10;
console.log("This is last line", a);
fn();