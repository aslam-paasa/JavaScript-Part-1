/*
   In JavaScript, each function has access to the 'this' keyword. The 'this' keyword
   refers to the object to which the function belongs. In the 'printFullName' function
   inside the 'name' object, 'this' refers to the 'name' object itself.

   To invoke the 'printFullName' function, we can simply call it using the following:
   name.printFullName();

   Now, let's consider another scenario. Suppose we have another object, 'name2', with
   similar properties ('firstName' and 'lastName'). Instead of creating a separate
   'printFullName' method inside 'name2', we can use the 'call' method for function
   borrowing.

   Using 'call', we can borrow the 'printFullName' function from 'name' and use it with
   the data of the 'name2' object. Here's how we do it:

   Step 1: Take the function that needs to be called - name.printFullName
   Step 2: Use the 'call' method. The first argument of 'call' will be the reference or
           the object to which 'this' should point. In this case, we want 'this' to
           point to the 'name2' object. So, we pass "name2" as the first argument.

   Example:
   name.printFullName.call(name2);

   This way, 'printFullName' is invoked for the 'name2' object, and 'this' inside the
   function points to 'name2'. This technique is known as "function borrowing."

   Result:
   The output of name.printFullName.call(name2); will be "Sachin Tendulkar".
*/

let name = {
    firstName: "Akshay",
    lastName: "Saini",
    printFullName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

// Invoking the printFullName function for the 'name' object
name.printFullName(); // Output: "Akshay Saini"

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

// Function borrowing using 'call' method
name.printFullName.call(name2); // Output: "Sachin Tendulkar"
