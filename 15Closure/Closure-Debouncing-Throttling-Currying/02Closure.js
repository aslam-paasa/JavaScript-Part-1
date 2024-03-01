/*
   Closure has two main applications:
   (a) Encapsulation
   (b) Data Privacy

   Now, let's explore how we can achieve data privacy using closure.
   We'll create an object and add a key to it:

   const obj = { name: 'JS' };
   
   Now, let's access the 'name' key:

   const obj = { name: 'JS' };
   console.log(obj.name);
   
   The issue here is that we can easily change the value of the 'name' key:

   const obj = { name: 'JS' };
   obj.name = 'sd';
   console.log(obj.name);

   Closure can help us achieve data privacy. Let's create a function inside the object:

   const obj = {
       name: 'JS',
       getName: function() {

       }
   };
   
   Now, to achieve data privacy, we'll modify the 'getName' function. Instead of directly accessing the 'name' key, we'll return it:

   const obj = {
       name: 'JS',
       getName: function() {
           return this.name;
       }
   };
   
   Even if we update the 'name' key, the 'getName' function will create a closure for this key, and we'll return the defined value:

   const obj = {
       name: 'JS',
       getName: function() {

       }
   };
   console.log(obj.getName());

   Now, we have a private function 'getName' that returns the value of the 'name' key. Users need to call this function to access the value.

   Note: Data privacy is now achieved, and understanding encapsulation is essential for a comprehensive understanding.
*/

const obj = {
    name: 'JS',
    getName: function() {
        return this.name;
    }
};

console.log(obj.getName());
