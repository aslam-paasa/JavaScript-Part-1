function fn(param1, param2){
    console.log(arguments);
    console.log(param1, param2);
}
fn("Hello", "Hi");
fn("Hello");
fn();
fn("Hello", "Hi", "Bye");