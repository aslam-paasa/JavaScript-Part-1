/*In typical scenarios, we don't keep methods directly inside objects if we want to
   reuse them. Instead, we define the method separately and use it with different
   objects based on our needs.

   Initially, we had a 'name' object with a 'printFullName' method:
   let name = {
       firstName: "Akshay",
       lastName: "Saini",
       printFullName: function() {
           console.log(this.firstName + ' ' + this.lastName);
       }
   }

   Now, we've separated the 'printFullName' method from the 'name' object:
   let printFullName = function() {
       console.log(this.firstName + ' ' + this.lastName);
   }

   We can now use this method with different objects as needed.

   Example 1:
   let name = {
       firstName: "Akshay",
       lastName: "Saini",
   }

   // Using the 'call' method to invoke the 'printFullName' method for the 'name' object
   printFullName.call(name); // Output: "Akshay Saini"

   Example 2:
   let name2 = {
       firstName: "Mohammad",
       lastName: "Aslam",
   }

   // Using the 'call' method to invoke the 'printFullName' method for the 'name2' object
   printFullName.call(name2); // Output: "Mohammad Aslam"

   By defining the method separately, we can easily reuse it with different objects
   using the 'call' method, providing flexibility and reusability.
*/

let name = {
    firstName: "Akshay",
    lastName: "Saini",
}

// Separately defined method
let printFullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}

// Using the 'call' method to invoke the 'printFullName' method for the 'name' object
printFullName.call(name); // Output: "Akshay Saini"

let name2 = {
    firstName: "Mohammad",
    lastName: "Aslam",
}

// Using the 'call' method to invoke the 'printFullName' method for the 'name2' object
printFullName.call(name2); // Output: "Mohammad Aslam"
