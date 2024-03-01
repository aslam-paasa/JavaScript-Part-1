/*Problem 6 -
Q) JS Code to create a login mechanism using object.
 - Consider any website like Gmail.com, we can see a textbox which asks
   us for "username" then we have another textbox which ask for "password"
   then we have "login" button. 
 - We know if we enter correct credentials, start the page but if we enter
   the wring creadentials - "incorrect username or password". 
 - So, here we are going to create one object, after creating the object
   we will provide two things -
   (a) username
   (b) password
 - We will create a function which is going to check if the username and
   password is correct or not. So, we create a "login()" function and
   inside this function we will take two parameters, one is going to be
   there for username and another one is for password.
 - Now inside the function we will compare the provided username and
   password is matching or not by using "if(){}"*/

   const user = new Object();
   user.name = "Mohammad Aslam";
   user.username = "mohammad@gmail.com";
   user.password = "password@123";
   user.login = function(uname, pwd)
   {
       // checking both username and password
       if(uname == this.username && pwd == this.password)
       {
           console.log(`Welcome ${user.name}, login successful !!`);
       } 
       // if username is correct but not password
       else if(uname == this.username)
       {
           console.log(`Password does not match`);
       } 
       // if password is correct but not username
       else if(pwd == this.password)
       {
           console.log(`Username does not match`);
       }
       // if none of the two are correct
       else
       {
           console.log("Authentication failed !!");
       }
   }
   
   user.login("mohammad@gmail.com", "password@123");
   user.login("aslam", "password@123");
   user.login("mohammad@gmail.com", "paasa");
   user.login("aslam", "paasa");
   