function fn() {
    console.log("Before declaration", a);
    var a;
    console.log("After declaration", a);
    a = 20;
    console.log("After initialization", a);
}
fn();