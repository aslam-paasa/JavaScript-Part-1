function fn(param1, param2){
    console.log("Inside fn", param1, param2);
}
fn("Hello", "Hi");
// if there is something missing -> default -> "undefined"
fn("Hello");
fn();
fn("Hello", "Hi", "Bye");