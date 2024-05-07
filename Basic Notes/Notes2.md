Dev Philosophy = Courage and Patience :
---------------------------------------
1) Demos class (Introduction to new words via small demos)
2) Project class (Practice is going to make you experienced with using recently discovered still-new words and you are going to get a project)
3) Hackathon class = Job drives and learning
4) Interview class (Understanding recently discovered words so that we can answer question around our projects). We have a project and we can answer satisfactorily to questions around the project.
-------------------
Features to learn -
-------------------
1) Output
2) Input
3) Variables
4) if-else
5) loops
6) First look at functions
7) First look at arrays
8) First look at modules
9) First look at file and folder manipulation = read, write
10) First look at callbacks
11) First look at JSON
12) First look at timers
13) First look at promises
14) Arrays = push, pop
15) Arrays = shift, unshift
16) Arrays = slice, splice
17) Arrays = foreach
18) Arrays = map, filter, some
19) Arrays = find, findIndex
20) Arrays = reduce
21) Higher order functions
22) Functions as variables
23) Functions as return values
24) Functions as parameters
25) Arrow functions
26) Functions as objects
27) Closure
28) Event loop and queue
29) Promise = then, catch
30) Promise = new, resolve, reject
31) Promise = all
32) Promise = serial, parallel
33) async, await
34) Objects = {}, new
35) Objects = keys, values, entries, hasOwnProperty
36) Functions as constructors
37) this
38) arguments
39) call, apply, bind
40) string
41) Symbols
42) Iterables
43) Map
44) Set
45) Rest programs and spread
46) let vs var vs const
47) Modules = export, import
48) Currying
49) Proxy and Reflect
50) eval
51) ES6 Features
52) Prototype, constructor, typeOf
------------
Philosophy -
------------
1) Demo class (Introduction to new words via small demos)
2) Activity class (Practice is going to make you experienced with using recently discovered still-new words and you are)
3) Activity Class (understanding recently discovered words so that we can answer questions aroung our projects)
-----------------------------------------------------------------------
Activity-1 : (Scrapping) Video = done (vid1, vid2, project description)
-----------------------------------------------------------------------
-> Features of JS
-> Demos
(Make videos of project and show like salesman-marketing who is selling himself for hiring in a tech role jisme batana h ki -
    (a) maine ye project banayi 
    (b) isko banane m knkn si library use krni pdi, 
    (c) edit the video, 
    (d) show dry run.
Note : Video should be less than or equal to 1 minute and upload this in LinkedIn to show)
Things to remember :
1) Purpose is to appeal to recruiters (Introduce ourself)
2) Less than 1 min
3) Video is nothing but saled pitch
4) Upload in LinkedIn Profile
------------------------------------------------------------------------------------------------------
Introduce : (Video must be in English)
Hi, I am Mohammad Aslam. In this project, (Agenda - This is the project that we have created a project using JS and have to explain what the Project does. 
-> Tell about yourself
-> Tell about project
-> Show it running
-> Have them glimpse of your code (scroll once whole code)
-> Share them the link where it is hosted
-> Call to action
Note : Jb video upload karnge to saath m text is mandatory. Jo humne video m bataya h usi k summary text form m honi chaiye.

    -> Show it running that it is able to do this this ...
    -> Fast Forward some part
    -> Cut some part
    -> let them have glimpse of the code (scroll once whole code)
            => Pehle btao ye kya karti h
            => Fir btao ye ye krni wali h
            => Fir run kr k dikhao ki ye hua (usko output se jyda wasta h)-
                        ---> Pehle btao ye hone wala h
                        ---> Fir chala k dikhao ye ho gya 
                        ---> Fir se code ka glimpse dikhao
                        ---> Last m usko dikhao maine usko yha pe host kr diya (GitHub pe kahi daal do)
                        ---> Apni details dikhana chahte ho to id wagerah share kro. If you want to learn more projects like this then follow me etc...
                        ---> Call to Action (Ye call to action potential recruiters ko de rhe h ki if any recruiters see's this and like this, if you want to contact me for more such work or some relevant work in your firm or company, you can contact me on this XXXXX email id)
Note : First 5 sec should be interesting so that they will watch our whole video and at the last talk about call to action.
-----------------------------------------------------------------------
Activity-2 : (Automation) = Add moderator to all contests in hackerrank
-----------------------------------------------------------------------
-> Install Puppeteer
-> Launch browser and page
-> Type
-> Click
Example : Like every post in facebook, instagram etc. (Create a bot)

Iske andr 3 concepts pdhnge -
1) async
2) await
3) promises


1.Name of the Project --> Hackerrank Automation 
2.Purpose --> This tool can be used to add moderators in the hackerrank contests 
          --> The real purpose of the project is to learn Web Automation 
3.Reason --> A very good reason for me to make this project is I enjoyed while making it , It was a great learning experience for me. 
4.Programming Language --> JavaSript 
5.The dependencies used by me while making this project are :- 
        1.minimist //we are using minimist to read the arguments from cli 
        2.puppeteer // for web automation 
        3.fs -> this library is pre installed in node 
        6.Activity --> The tasks performed while making the project are --> 
            1.Open the browser 
            2.Get a tab 
            3.Go to the url 
            4.Click on the login on first page of Hackerrank.
            5.Click on the login on second page of Hackerrank. 
            6.Type the Username on third page 
            7.Type the Password on third page 
            8.Click on the login on third page of Hackerrank. 
            9.Click on compete after successful logging in 
            10.Click on all the manage contests 
            11.Find the number of pages by clicking and inspecting on (Double RightAngledTriangles) Button 
            12.Now traverse on all the contest by clicking on RightPage Button(Single RightAngledTriangles Button). 
            13.Write function for handling loop for moving on all the page 
            14.Write function for handling loop for all contest on one page 
            15.While handling 1 contest , put loop for adding all the moderators in thw contest 
            16.While adding moderator , select the input tag for adding moderator , then type the moderator id and then press Enter. 
            17.Then after adding all moderator , close the current contest , to traverse on all the contests of all pages.
-----------------------------------------------------------------------
// IIFE - Immediately invoked function execution (immediately fncn bn v jae or chl v ho jae)
    (async function(){

    })();
Note : Agar kisi function m hum 'await' use krne wale h to uss function m upar humesa 'async' likha jaata h

Way-1 :
-> Ye launch ka promise de rha h ki browser launch kr denge
    let browser = puppeteer.launch({headless:false});
-> To browserKaPromise jb poora hoga tb humko browser milega -
    browserKaPromise.then(function(browser){
        
    })
    let page = browser.newPage();

Way-2 :
-> Jb koi promise de rha hota h to pehle browserKaPromise milta h fir then krne pe browser milta h.
-> Jb v ye promise ye koi de aur humein usse chaiye ho ki promise chor, sidha maal de, to saamne await likh denge -
    let browser = await puppeteer.launch({headless:false}); 
Note : Agla promise de rha ho to aage await lga de to sidha maal mil jaega

Problem : await khulle m ni likha jaa skta, await sirf function m likha jaa skta h. Aur aise function m likha jaa skta h jiss function pe async laga ho

        let pageKaPromise = browser.newPage();
-> broswer ka andr page maang rhe to usme m pageKaPromise de rha

-> Jb pageKaPromise pura hoga tb apne ko page milega
        pageKaPromise = browser.newPage();{
            -> Ab page ko bolnge waha jao to ye v promise dega-
            -> Aur jb urlOpenKaPromise poora hoga tb wo page khul chuka hoga
            let urlOpenKaPromise = page.goto(args.url);
            urlOpenKaPromise.then(function(){
                let browserCloseKaPromise = browser.close();    //ye v promise de rha
                -> Aur jb ye browserCloseKaPromise poora hoga tb browser close hoga
                browserCloseKaPromise.then(function(){
                    console.log("Browser close");
                })
            })
        }

Code : Open browser -> Page -> close, using Promise
   let browserKaPromise = puppeteer.launch({headless:false});
    browserKaPromise.then(function(browser){
        let pageKaPromise = browser.newPage();
        pageKaPromise.then(function(page){
                let urlOpenKaPromise = page.goto(args.url);
                urlOpenKaPromise.then(function(){
                    let browserCloseKaPromise = browser.close();
                    browserCloseKaPromise.then(function(){
                        console.log("Browser close");
                    })
                })
        })
    })
--------------------------------------------
Good Resources for JavaScript Fundamentals :
--------------------------------------------
-> JavaScript.info 
-> Codecademy for Beginners
--------------------------------------------

Note : Callback > Promises > Async Await
-----------------------------------------------
Difference between callback, promises & await?
-----------------------------------------------
Sure thing! Let's compare callbacks, promises, and await in a simple and easy-to-understand way:

Callbacks:
----------
Imagine you're playing a game where you send a message to a friend and ask them to do something. You also give them your phone number so they can call you back when they're done. You continue playing the game while waiting for your friend to call back.

In programming, a callback is similar. It's like sending a message to your computer program, asking it to do something. You also give it a function (your phone number) that it will call back when the task is finished. While waiting for the callback, your program can keep doing other things.

Promises:
---------
Promises are like making a promise with your friend. You ask your friend to do something and give them a special promise card. The card has two sections: one for what to do when the task succeeds, and another for what to do when the task fails. You can go on playing the game while waiting for your friend to complete the task. When they're done, they let you know if they succeeded or if something went wrong.

In programming, a promise works similarly. You ask your program to do something and it gives you a promise. The promise has two parts: one for when the task succeeds (resolve) and one for when the task fails (reject). Your program can keep working on other things, and when the promise is fulfilled, it lets you know if everything worked out or if there was a problem.

await:
------
Now, imagine you're doing a puzzle with your friend. You give your friend a piece of the puzzle to work on, and you say, "I'll wait until you're done before I continue." You don't move on to the next piece until your friend finishes their part.

In programming, await works similarly. When you use await, you're telling your program to wait until a specific task (usually a promise) is finished before moving on to the next step. It's like making sure your program completes one task before starting another.

In summary:
-----------
1) Callbacks: Like sending a message and waiting for a call back.
2) Promises: Like making a promise with two possible outcomes (success or failure).
3) await: Like waiting for your friend to finish a puzzle piece before moving on.
All three help manage the flow of tasks in your program, making sure things happen in the right order and handling success or errors along the way.

Why we keep await inside async function?
----------------------------------------
Imagine you're putting together a puzzle, and the pieces need to fit perfectly. Sometimes, a piece 
might take a bit longer to find or put in place. You don't want to start working on the next piece 
until the first one is ready and in the right spot.

In the same way, when a computer program does different tasks, it needs to wait for each task to 
finish before moving on to the next one. That's where await and async come in!

Think of an async function as a person who's in charge of doing things in the right order, just like 
you with the puzzle pieces. When this person comes across something that might take time 
(like finding a puzzle piece), they say "I'll wait for this part to finish before doing anything else."
That's when they use await. It's like them taking a break and letting other things happen while they 
wait for the task to be done. So, an async function with await is like a puzzle master making sure 
each piece is put in place correctly before moving on. It helps keep things organized and prevents 
anything from getting mixed up!

What is $$eval() function? What does $$eval() function do?
----------------------------------------------------------
--> Ye document.querySelectorAll() chalata h, unka array bnata h aur usko ek function m pass kr deta h.

Imagine you have a magic box called a computer. This magic box can do all sorts of cool things, like solving math problems and giving you answers. Well, the $$eval() function is like a special spell that you can use to tell the magic box to do something with a bunch of things all at once!

You know how when you have a bunch of toys on the floor, and you want to count how many red ones there are? Instead of picking up each toy and counting one by one, you can use the $$eval() spell to make the magic box do the counting for you! You just tell it, "Hey magic box, look at all these toys on the floor, and tell me how many of them are red."

In computer talk, the $$eval() spell is used in a special place called a web page. It helps the computer look at a bunch of things on the web page, like pictures or text, and do something with them all at once. It's like giving the magic box a task to perform on a whole group of things, and it's really handy when you want to do the same thing to many items at the same time!

So, just remember that $$eval() is like a magical spell for the computer that helps it work with lots of things together without having to do them one by one. Cool, right? 


Why we use waitForSelector() function in puppeteer?
---------------------------------------------------
 Imagine you have a robot friend named Robo-Buddy who can look at web pages, just like you do on your computer. Sometimes, Robo-Buddy needs to find a specific thing on a web page, like a button to click or a picture to see. But, just like you, Robo-Buddy can't see everything on the web page all at once – it needs a bit of time to look around and find what it's looking for.

Now, think about a game of hide-and-seek. When you hide, your friend needs to look around to find you, right? They might count to ten before they start looking. Well, the waitForSelector() thing is a bit like that countdown. It's like telling Robo-Buddy, "Hey, take a moment and count to three before you start looking for the button."

So, Robo-Buddy uses waitForSelector() to wait patiently for a short time. During that time, it keeps looking at the web page to see if the special thing – the button or picture – appears. Once it sees that thing, it says, "Aha! I found it!" and tells you, so you can decide what to do next.

In computer speak, waitForSelector() is like giving Robo-Buddy a little break to find the thing it's looking for. It helps Robo-Buddy be patient and not rush, just like how you count to ten before searching for your friends in a game. So, when you use waitForSelector(), you're helping Robo-Buddy find things on web pages without missing them. Cool, huh? 🤖🕵️‍♂️
---------------------------------------------------------
Guidelines for recording Project Videos : (For recruiter)
---------------------------------------------------------
1) Time Limit : 1-2 min
Note : Purpose of this video is to selling ourself as potential candidate for a recruiter.
2) Upload in LinkedIn
3) Speak to the Recruiter : Hello Guys, this is Mohammad Aslam, and I as a fun project over this weekend made this thing and it is preety useful and while doing this I have learned all these also. I have used this learning and I am capable of this. If you want more project like this do let me know . If you want more projects like this feel free to contact me. This is my number, email, git and resume.
Note : Remember baat recruiter se krna h lekin recruiter bolna nhi h say like Dear World etc...
Note : Tell them we did it for fun, and ask them to contact us.
Note : Do not fear to be dramatic if it suit our style but be original.
4) They are not technical person. Show the output, don't worry about the code. Code ki ek glimpse dikhani h maine ye code likhi h aur isse ye ho rha h.
Note : Don't show too much code, show working demo and present it.
5) Differentiate : Same project nhi daalna h thode changes khud k hone chaiye.
6) Computer m apna face aana chaiye while showing the code.
7) Make it all good looking even our face while making video.
--------------------------------
Activity-3 : Dev (Data Analysis)
-------------------------------- 
1) Arrays = map, filter, some
2) Arrays = find, findIndex
3) Arrays = reduce
4) Arrays = foreach
5) Arrays = push, pop
6) Arrays = shift, unshift
7) Arrays = slice, splice
8) Arrays = custom functions (myMap, myFilter, myReduce, mySome)
--------------------------
Explain map in JavaScript?
--------------------------
Imagine you have a big box of colorful building blocks. Each block has a number written on it. Now, you want to do something fun with each block, like adding a sticker to it or making it twice as big.

Here's where the "map" in JavaScript comes in! It's like having a helper who goes through every block, does something cool to it, and gives you back a new box of blocks with the changes.

Let's pretend you have ten blocks with numbers: 1, 2, 3, and so on, up to 10. You want to make each block double its size. You tell your helper, "Hey, take each block, make it twice as big, and put the new blocks in a new box."

Your helper goes through each block, does the doubling magic, and gives you a new box with bigger numbers: 2, 4, 6, and so on, up to 20. That's the map at work!

In computer-speak, the map function is like a friend who helps you transform each item in a list (or an array) into something new. It's like a special recipe for change that you can use whenever you want to do something cool to a bunch of things all at once.

So, just remember that the map in JavaScript is like having a helper who takes care of each item in a list, makes it cooler, and gives you a brand new list with the awesome changes! 🧱🎨🚀
-----------------------------
Explain filter in JavaScript?
-----------------------------
Imagine you have a treasure chest full of shiny gems, but some of them are too small to keep. You want to pick out only the big, beautiful gems to show to your friends.

Well, in JavaScript, the "filter" is like a magic filter that helps you pick out only the gems you want from a bunch of different gems. It's like having a special tool that looks at each gem and decides if it's big and shiny enough to keep.

Here's how it works: You give the magic filter a bunch of gems (which are like pieces of information, numbers, or anything you want to check), and you tell it a rule, like "I only want gems that are bigger than 5." The magic filter goes through all the gems and only keeps the ones that follow your rule.

So, if you had gems with sizes 3, 8, 2, 10, and 4, and you told the magic filter to only keep the gems that are bigger than 5, it would show you the gems with sizes 8 and 10. The magic filter knows which gems to pick because you gave it a special rule.

In computer talk, the filter function is like a friendly helper that goes through a group of things and picks out only the things that match what you're looking for. It's like having a super smart treasure hunter who only gathers the best gems for you to show off!

So, remember, the filter in JavaScript is like a magic tool that helps you sort through a bunch of things and keeps only the ones that meet your special criteria. Pretty neat, huh? 💎🔍🪄
---------------------------
Explain some in JavaScript?
---------------------------
Imagine you're at a pizza party with your friends, and you're all deciding whether to play outside. Now, you know that if just one of your friends says, "Hey, let's play outside!" then you'll all go outside to play.

In JavaScript, the some is like asking your friends if anyone wants to play outside. You have a list of friends (which could be a bunch of things, like numbers or words), and you use the some to check if at least one of them meets a special condition.

For example, if you're checking if any of your friends are older than 10, you're using the some to see if "some" of them fit that rule. If just one friend is older than 10, the some will say, "Yes, at least one friend is older than 10!"

So, when you use the some in JavaScript, you're like the pizza party organizer asking your friends if anyone is interested in playing outside. If at least one friend says yes, you know you're going outside to have fun!

In computer-speak, the some function helps you figure out if there's at least one thing in a group of things that matches a certain condition. It's like being a detective asking if any suspects match a description, and if just one does, you know you've got a match!

Remember, the some in JavaScript is like asking if "some" of your friends want to do something special, and if even one friend is up for it, you're good to go! 🍕🕵️‍♂️🎉
---------------------------
Explain find in JavaScript?
---------------------------
Imagine you're in a big garden full of colorful flowers, and you're looking for a specific flower with a special pattern or color. You don't need all the flowers, just the one that matches what you're looking for.

In JavaScript, the find function is like having a helpful garden gnome who helps you look for that special flower. You give the gnome a job: "Hey, little gnome, please find me the flower with the red petals."

The gnome then goes around the garden, checking each flower one by one. As soon as it finds a flower with red petals, it happily tells you, "I found it!" and shows you the flower. If it doesn't find any flower with red petals, it might say, "Sorry, I couldn't find one."

So, in computer talk, the find function goes through a bunch of things (like a list of numbers or words) and helps you locate the very first thing that meets a certain condition. It's like having a tiny helper who searches for a specific item and points it out to you!

Just remember, when you use the find in JavaScript, you're like a treasure hunter looking for a special treasure in a garden of items. Once you find it, you can celebrate your discovery! 🌼🌟🎩
--------------------------------
Explain findIndex in JavaScript?
--------------------------------
Imagine you have a line of friends, each holding a balloon. You want to find out which friend has the balloon with your favorite color. You don't need to know the name of the friend, just the place in line where they are standing.

In JavaScript, the findIndex function is like a magical balloon detector that helps you figure out the position of the friend with the balloon you like. You tell the detector, "Hey, find the friend with the blue balloon!"

The detector starts at the beginning of the line and looks at each friend's balloon, one by one. As soon as it finds the friend with the blue balloon, it happily tells you the position (like saying, "The friend you're looking for is the third one in line!"). If it doesn't find a friend with a blue balloon, it might say, "Sorry, I couldn't find one with that color."

So, in computer terms, the findIndex function goes through a bunch of things (like a list of numbers or words) and helps you figure out the position of the first thing that meets a certain condition. It's like having a super detective who counts and points out the place where something special is located!

Remember, when you use findIndex in JavaScript, you're like an explorer looking for a particular thing in a lineup, and the function helps you pinpoint exactly where that thing is. It's like a map that shows you where your favorite balloon is in the line of friends! 🎈🕵️‍♂️🎉
-----------------------------
Explain reduce in JavaScript?
-----------------------------
Imagine you have a big jar of shiny marbles, and you want to know how many marbles you have in total. You could count them one by one, but that might take a while.

In JavaScript, the reduce function is like having a super helper who can add up all the marbles for you! You give your helper a special job: "Hey, can you add up all these marbles for me?"

Your helper starts looking at the marbles, one by one. As it looks at each marble, it adds up the numbers and keeps a running total. When it's done looking at all the marbles, it says, "Ta-da! You have 100 marbles in total!"

So, in computer terms, the reduce function helps you go through a bunch of things (like numbers or words) and combines them together to make a final result. It's like having a magical marble counter that adds everything up for you without you having to do it by hand!

Remember, when you use reduce in JavaScript, you're like a marble collector asking your helper to count and add up all the marbles for you. It's a great way to get a big answer by combining lots of little things together! 🌟🔢🤖
------------------------------
Explain forEach in JavaScript?
------------------------------
Imagine you have a basket full of your favorite toys, like teddy bears, cars, and building blocks. Now, let's say you want to play with each toy and do something fun with it, like giving each teddy bear a high-five or making the cars zoom around.

In JavaScript, the forEach is like a magical playtime organizer! You tell it, "Hey, let's play with each toy in the basket, one by one!"

So, the forEach helps you take out each toy from the basket, one at a time. You can do something cool with it, like making it dance, and then put it back in the basket when you're done. The forEach makes sure you play with every toy in the basket, without missing any.

In computer-speak, the forEach function helps you go through a bunch of things (like a list of numbers or words) and do the same action with each thing. It's like having a playful friend who helps you have fun with all your toys, step by step!

Remember, when you use forEach in JavaScript, you're like a toy adventurer playing with each toy in your basket, and the function makes sure you have a blast with all of them! 🧸🚗🎮
---------------------------
Explain push in JavaScript?
---------------------------
Imagine you have a toy box, and you want to add more toys to it. The push in JavaScript is like a magical hand that helps you put new toys into your toy box.

So, let's say you have a teddy bear, a toy car, and a shiny marble in your toy box already. Now, you find a cool robot toy and a bouncy ball, and you want to add them to your collection.

You tell the magical hand, "Hey, can you push these new toys into my toy box?"

The magical hand takes the robot toy and the bouncy ball and gently places them inside the toy box, right alongside your other toys. Now you have even more toys to play with!

In computer terms, the push function helps you add new things (like numbers, words, or objects) to the end of a list (also known as an array). It's like having a helpful friend who makes sure your toy box is never empty and always has new stuff to play with!

So, when you use push in JavaScript, you're like a toy organizer asking the magical hand to add new toys to your collection. And just like that, your toy box gets even more exciting! 🪄🧸📦
--------------------------
Explain pop in JavaScript?
--------------------------
Imagine you have a stack of pancakes on a plate, and you want to take one pancake off the top. The pop in JavaScript is like a pretend fork that helps you pick up the top pancake from the stack.

So, you have a yummy stack of pancakes, and they're all stacked up nice and high. Now, you're really hungry, and you want to eat the top pancake.

You tell your pretend fork, "Hey, can you pop the top pancake off the stack for me?"

The pretend fork reaches down and carefully lifts off the top pancake, so you can gobble it up and enjoy the deliciousness. Now, your stack of pancakes is a little bit smaller, but you're happy because you got to eat one!

In computer terms, the pop function helps you take off the last thing from a list (or an array) and gives it to you. It's like having a helpful imaginary tool that lets you grab the top thing from a stack of items.

So, when you use pop in JavaScript, you're like a pancake lover using a pretend fork to take the top pancake off your stack. And just like that, you're ready to enjoy what you've popped off! 🥞🍴🎉
----------------------------
Explain shift in JavaScript?
----------------------------
Imagine you have a bunch of toy cars lined up in a row, and you want to take the first car and play with it. The shift in JavaScript is like a little hand that helps you pick up the very first toy car from your lineup.

So, you've got your row of toy cars, all lined up and ready to go. You want to play with the car at the very front of the line.

You say, "Hey, little hand, can you shift the first toy car out for me?"

The little hand reaches over and gently lifts the first toy car from the lineup, so you can zoom it around and have a great time. Now, your lineup of toy cars is a bit shorter, but you're having fun with the one you've shifted out!

In computer terms, the shift function helps you take out the first thing from a list (or an array) and gives it to you. It's like having a helpful hand that lets you grab the front thing from a line of items.

So, when you use shift in JavaScript, you're like a toy enthusiast using a magical hand to pick out the first toy car from your lineup. And just like that, you're ready to play with what you've shifted out! 🚗🤚🎁
------------------------------
Explain unshift in JavaScript?
------------------------------
Imagine you have a row of colorful building blocks, and you want to add a new block right at the very beginning of the row. The unshift in JavaScript is like a magic wand that helps you place a new block right at the front of your row.

So, you've got your row of blocks, and they're all lined up nicely. Now, you find a shiny new block that you want to add to the very start of the row.

You say, "Hey, magic wand, can you unshift this new block for me?"

The magic wand waves, and poof! The new block appears at the front of the row, making your lineup even longer. Now you have more blocks to play with, and the new block is right there at the beginning!

In computer terms, the unshift function helps you add a new thing to the beginning of a list (or an array). It's like having a special wand that lets you insert a new thing right at the front of your lineup.

So, when you use unshift in JavaScript, you're like a block architect using a magical wand to add a new block to the very start of your row. And just like that, your lineup gets even cooler with the thing you've unshifted in! 🪄🧱✨
---------------------------
Explain find in JavaScript?
---------------------------
Imagine you have a big, yummy pizza, and you want to share a slice of it with your friend. The slice in JavaScript is like a special pizza cutter that helps you cut out a piece of the pizza to share.

So, you've got this delicious pizza with all your favorite toppings. Your friend wants a slice, and you're ready to share. You say, "Hey, pizza cutter, can you slice out a piece for my friend?"

The pizza cutter goes to work and neatly cuts out a slice, making sure it's just the right size. Now, you have a yummy slice of pizza to give to your friend, and the rest of the pizza is still there for you to enjoy!

In computer terms, the slice function helps you take out a portion of a list (or an array) and gives you a new piece to work with. It's like having a magical cutter that lets you grab a specific part of something.

So, when you use slice in JavaScript, you're like a pizza-sharing pro using a special cutter to take out a delicious slice to share with your friend. And just like that, you've got a piece of the action! 🍕🍽️🎉
-----------------------------
Explain splice in JavaScript?
-----------------------------
Imagine you have a colorful necklace made of beads, and you want to change the order of the beads or add new ones in the middle. The splice in JavaScript is like a super cool bead magician that helps you do just that!

So, you're looking at your necklace, and you decide you want to move some beads around or put new ones in. You say, "Hey, bead magician, can you splice the necklace for me?"

The bead magician starts working its magic! It takes out a few beads from where you want to make changes, and it can even put new beads in their place. Your necklace looks different now, with some beads moved or replaced.

In computer talk, the splice function helps you modify a list (or an array) by removing some items and maybe adding new ones in their place. It's like having a fantastic bead artist that lets you rearrange and transform your necklace of beads.

When you use splice in JavaScript, you're like a bead designer working with the help of a bead magician to change your necklace and make it look exactly the way you want. You're crafting your list of beads just the way you like it! 📿✨
---------------------------------------
Explain custom functions in JavaScript?
---------------------------------------
Imagine you have a big box of crayons, and you love creating colorful drawings. Sometimes, you want to use the same pattern or draw the same shape over and over again. Instead of redrawing it each time, you could use a special stencil to make things easier and faster.

In JavaScript, custom functions are like your very own stencils for code! You can create a custom function that follows a set of instructions you give it. Then, whenever you need to do that same task again, you can just use your custom function, like a magic stencil, to do the work for you.

For example, let's say you want to draw a smiley face on your paper. You can create a custom "drawSmileyFace" stencil that knows how to draw the eyes, nose, and mouth. Then, whenever you want to draw a smiley face, you just use your special "drawSmileyFace" stencil, and voilà! The smiley face appears without you having to draw each part every time.

In computer-speak, a custom function is like a set of instructions that you can give a name. Whenever you want the computer to do a specific task, you just say that name, and the computer follows the instructions you've set up.

So, when you create and use custom functions in JavaScript, you're like an artist using special stencils to quickly and easily create your favorite drawings without starting from scratch each time. It's a way to make your code neat, organized, and efficient – just like using stencils to make your artwork look amazing! 🎨🖌️🔧
---------------------------------------------------------------------------------------------------------
Note : Arrays are callback independent.
Note : More Array function -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
---------------------------------------------------------------------------------------------------------
What is map?
-> map is itself a function
-> map takes as input a callback function (with v and i)
-> map will call the callback multiple times (once for each value)
-> for each run of callback, map will pass v and i to callback
-> callback will process the value and index and return a single input value
-> values returned by each run of callback will be collected in a new array
-> map returns that new array

let arr = [2, 5, 9, 8, 15, 11, 6];
let sarr = arr.map(function(v, i){
    console.log(v + " " + i);
    return v*v; 
});

console.log(arr);
console.log(sarr);

arr.map() ko chaiye ek function, uss function k 2 parameter h
1) Value
2) Index
value contains -> 2, 5, 9, 8, 15, 11, 6
index contains -> 0, 1, 2, 3, 4,  5,  6

Output :
2 0
5 1
9 2
8 3
15 4
11 5
6 6

It means map ko input m chaiye ek function, us function k andr wo pehli value bhejta h uske index k 
saath, fir wo next value ko bhejta h uske index k saath etc... Fir humne value ka square kr diya aur
usko return kr diya. Jitne ko humne return kiya na unn sb ka ek new array ban k return krega aur
'sarr' wale array m dal jaega.

map function input m function leta h like promise, then, readFileSync etc... Means ye jo input 
function leta h wo ek callback h. (Jb apna function hm kisi function ko de dete h to wo callback 
function hota h. So, humara function map() function k liye callback h. To map array ki pehli index pass
krega then dusri, teesri etc.. Humne usse kaam diya ki value print kra do or index ko print kra do
and values ki square return kra do. To jo v hum yha se return krte h wo saari ek ek kr k sqaure hota
jaega aur sbka array bnta jaega aur jo return hoga wo 'new' array.
Note : callback m jitni value hogi utni baar wo return hogi)
Note : dhyan se smjhe to dkhnge ki map k internally for loop chal rha h, to jitne value rhegi utni baar
ye chlega. Aur saari values ko append kr k ek array banegi.
Note : map is working like $$eval().
----------------------------------
Difference between map & for loop?
----------------------------------
Let's talk about two ways to work with a bunch of things, like a group of toys, using JavaScript: the map() way and the for loop way. Imagine you have a bunch of toy cars, and you want to do something to each car.

Using the map() Way:

Okay, so you have all these cool toy cars, right? Imagine you have a magical friend named "Mapper." You tell Mapper, "Hey, Mapper, can you give each toy car a cool racing stripe?"

Mapper goes through all the toy cars, one by one, and adds a racing stripe to each of them. Then, Mapper gives you a brand new box with all the cars now having racing stripes. You didn't change the original cars – you just got a new set of cars with the stripes!

Using the for Loop Way:

Now, let's say you want to give racing numbers to each of your toy cars. You don't have a magical friend for this, so you decide to do it yourself. You count from 1 to the number of cars you have.

For each number you count, you look at a toy car, put a racing number on it, and then move on to the next car. You keep doing this until you've given all the cars their racing numbers.

So, Which Way to Choose?

If you want to do something to each item and get a new set of items with the changes, like adding stripes to toy cars, you can use the map() way. It's like having a magical friend that helps you make a new set of things with the changes you want.
If you want to do something to each item but don't need a new set of items, like giving numbers to cars, you can use the for loop way. It's like doing the task step by step all by yourself.
Both ways are useful in different situations. The map() way is like having a helper do the work and give you a fresh set of things. The for loop way is like you doing the task step by step without getting new things.

So, whether you have a magical friend or you're doing the task yourself, you have ways to work with your group of toys in JavaScript! 🚗🎨🧙‍♀️

Let's dive into the differences between the map() method and a for loop in JavaScript, especially for someone new to programming.

1. Purpose:

map(): The map() method is used to transform each item in an array and create a new array with the transformed values. It's like taking an existing list, doing something to each item, and getting back a new list with the changes.
for loop: A for loop is a basic looping structure that helps you iterate through an array or a sequence of items. It's used for performing tasks for each item in the loop.
2. Readability and Expressiveness:

map(): The map() method is concise and expressive. It clearly shows that you're applying a transformation to each item in the array, making the code easier to understand.
for loop: A for loop can sometimes be less readable, especially when dealing with index management and loop conditions.
3. Immutability:

map(): The map() method promotes immutability. It creates a new array with the transformed values, leaving the original array unchanged.
for loop: With a for loop, you need to be careful to avoid accidentally modifying the original array while iterating.
4. Callback Function:

map(): You provide a callback function to the map() method, which is applied to each item in the array. The callback function defines how you want to transform the items.
for loop: In a for loop, you manually define the operations you want to perform on each item within the loop's body.
5. Return Value:

map(): The map() method returns a new array containing the transformed values.
for loop: A for loop can be used for various purposes and doesn't necessarily return a new array. It's more versatile but requires manual handling.
6. Example:
Here's a simple example to illustrate the differences:
------------------------------------------------------
    // Using map()
    const numbers = [1, 2, 3, 4];
    const doubledNumbers = numbers.map(num => num * 2);
    // doubledNumbers: [2, 4, 6, 8]

    // Using for loop
    const numbers = [1, 2, 3, 4];
    const doubledNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
    }
    // doubledNumbers: [2, 4, 6, 8]


Certainly! Let's dive into the differences between the map() method and a for loop in JavaScript, especially for someone new to programming.

1. Purpose:

map(): The map() method is used to transform each item in an array and create a new array with the transformed values. It's like taking an existing list, doing something to each item, and getting back a new list with the changes.
for loop: A for loop is a basic looping structure that helps you iterate through an array or a sequence of items. It's used for performing tasks for each item in the loop.
2. Readability and Expressiveness:

map(): The map() method is concise and expressive. It clearly shows that you're applying a transformation to each item in the array, making the code easier to understand.
for loop: A for loop can sometimes be less readable, especially when dealing with index management and loop conditions.
3. Immutability:

map(): The map() method promotes immutability. It creates a new array with the transformed values, leaving the original array unchanged.
for loop: With a for loop, you need to be careful to avoid accidentally modifying the original array while iterating.
4. Callback Function:

map(): You provide a callback function to the map() method, which is applied to each item in the array. The callback function defines how you want to transform the items.
for loop: In a for loop, you manually define the operations you want to perform on each item within the loop's body.
5. Return Value:

map(): The map() method returns a new array containing the transformed values.
for loop: A for loop can be used for various purposes and doesn't necessarily return a new array. It's more versatile but requires manual handling.
6. Example:
Here's a simple example to illustrate the differences:
------------------------------------------------------
// Using map()
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(num => num * 2);
// doubledNumbers: [2, 4, 6, 8]

// Using for loop
const numbers = [1, 2, 3, 4];
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
// doubledNumbers: [2, 4, 6, 8]
-------------------------------------------------------
Q) How does the map function work?
-> The Map function() is a higher order function.
-> A higher order function takes a function as argument and executes it.
-> The map function iterates through every item in an array and executes the task given to it.
-> You can say it acts like a for loop.
-> When using the map function, you always have to create a new variable to envelop the new array to be formed.
-> Its answer is given back as a new variable because you can not assign that new array to the old array variable.

The syntax :
-> The map function primarily takes a callback (function) as an argument and other parameters which are the :
   1. Current value
   2. index; index of the current element being processed in the array and
   3. array.
Note : The last 2 parameters are optional, meaning you don't have to put in values for those parameters if you don't have a need to do so.

Let me give some examples :
1) Multiplication of the numbers in an array -
   
    const numbers = [60, 15, -17, 3, 0]
    const multiplied = numbers.map(function(num)){
                     return num*2
                   }
    console. log(multiplied)
    // expected answer = [120, 30, -34, 6, 0]
-> The new array variable (const multiplied) takes former array , and maps through it.
-> In the map function parenthesis, we have the callback (function) which take the current value (num).
-> ‘num’ changes over time due to the fact that the map function iterate through the array.
-> Therefore, taking an item from the array, executing the function that is multiplying the item by 2 and getting a result.
-> This is done to the remaining items in the array.
-> The code seems too long so I want to shorten it using the es6 syntax.
    "const multiplied = numbers.map(num =>num*2)"


Sentence making :
-> Below is an array of names -
    const names = [Silvia, Chavez, zee, Alexis, Gerardo]
-> This block of code is the es6 format code for the new assigned variable
    const sentence = names.map(name => name + ' is the best')                                
    console.log(sentence)
-> This is the long code (normal format) -
    const sentence = names.map(function(name){
                       return name + ' is the best'
                 }
              )
-> The sentences made are :
    // expected answer = [
                          Silvia is the best,
                          Chavez is the best,
                          Zee is the best, 
                          Alexis is the best,
                          Gerado is the best.
                     ]
-> It iterate through every name in the names variable, takes the name and shoves it into the sentence creating a new array of sentences.


In the map() example, we transformed each number in the array using a callback function. In the for loop example, we manually iterated through the array and performed the same transformation.

In general, use the map() method when you want to transform items and create a new array, and use a for loop when you need more control over the loop process or when you're performing other types of operations.
Note : It is just a sweeter way of writing function.
Note : arrow function is also known as Lambda function in dot.net, Lambda in Java, Arrow in JavaScript.
Note : map() ki length humesa same hogi puraane array k saath.
Note : Jb kisi array ka swaroop badalna ho par select saare krna ho to map() use hota h, but agar array m se kuch rkhne ho aur kuch chorne ho to filter() use hota h. (Filter returns the subset of parent array)
Note : Filter() ka return type wahi hota h jo original array ka hota h.
Note : filter() only works for boolean expression.

NOte : Undefined means 'let i' ab isme 'i' ki koi value nhi di, that is undefined.
---------------------------------------------------------------------------------------------------------
reduce() function :
-------------------
let arr = [10, 20, 30, 40, 50];
let val = arr.reduce(function(pv, cv, ci){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
});

console.log(val);

map() v ek array return krti thi, filter() v ek array return krti h but the difference is
map() jo array return krta tha original array k equal hota tha aur filter() jo array return
krta tha wo original array se chota hota tha. But reduce() ek value return krta h.

Reduce() 3 value leta h -
1) Previous Value
2) Current Value
3) Current Index
Reduce jb pehli baar function ko call krega to 10, 20, 1 pass krega.

Output : 
10 20 1
30 30 2
60 40 3
100 50 4

-> Isne pehli baar m pv(10), cv(20), ci(1) pass kra. Isme cv, ci to smjh aa gya
-> pv value m pehli baar m 10 pass kr diya, dusri baar m ye wahi pass krega jo pehle wale ne return
kiya tha i.e. pv(10)+cv(20) = 30. Similarly, 30+30=60, 60+40=100.
So, basically reduce() function saare ka ek bana deta h i.e. 150.




Activity-4 : PepBoard Project - OpenBoard (Fullstack Project)
1) Frontend 
2) React
3) Backend
Example :Liteboard.io (github : jeverd/lecture-experience)

Features :
1) Draw
2) Erase
3) Notes
4) Image Upload
5) Redo/Undo
6) Realtime

Extra features :
1) Shapes
2) Login
3) Rooms
4) Chat

Today's Agenda :
1) Arrays = push, pop
2) Arrays = unshift, shift
3) Arrays = slice, splice
4) Arrays = map, custom Map
5) Arrays = some, custom Some
6) Arrays = every, custom Every

Future Agenda :
7) Arrays = forEach, custom forEach
8) Arrays = find and findIndex, custom find and findIndex
9)  Arrays = reduce, cutomReduce, reduceRight
10) Arrays = indexOf, lastIndexOf
11) Arrays = concat, join, fill
12) Arrays = keys, entries
13) Arrays = reverse, sort
14) Arrays = from, include, valueOf

Difference between push & unshift and pop & shift?
--------------------------------------------------
-> push add krta h end m whereas unshift end krta h starting m
-> pop remove krta h end se whereas shift remove krta h starting se

Q) Rearrange array so that all even elements are at fron and all odd elements are at back?
Note : Functions allowed -> push, pop, shift, unshift
-> // Practice Question -1
let arr = [20, 30, 12, 17, 9, 18, 43, 64, 11, 47];
let odd = [];
let even = [];

let i = 0;
while(arr.length > 0){
    let val = arr.shift();
    if(val % 2 == 0){
       even.push(val);
    } else {
        odd.push(val);
    }
}

arr = even.concat(odd);
displayArray(arr);
displayArray(odd);
displayArray(even);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

Output :
20,30,12,18,64,17,9,43,11,47 = 10
17,9,43,11,47 = 5
20,30,12,18,64 = 5


Slice & Splice :
1) Slice :
-> Slice is like substring.
-> Agar humare array m hote - [10, 20, 30, 40]
-> Humne bola array.slice(0, 2) -> Ye humein ek new array return kr k dega aur uss new array m 0-2 bola h to index = 0 to 1 daal k dega. [10, 20]
-> Agar hum bolte array.slice(1, 3) -> to ye index 1, 2 deta i.e. 20, 30.
-> Slice m start wala include hota h aur.
-> This is copy of original array

Q) Agar hum likhe array.slice(1) to ye kya dega?
-> index 1 to end tk poora de dega. [20, 30, 40]

Q) Agar hum like array.slice()? To ye kya dega?
-> Poori array de dega  [10, 20, 30, 40]

Note : This array is separate copy and can be used for cloning of an array.

ShallowCopy :
1:41:50 Lecture-11 (Memory Diagram)

55ArraySliceCopy... 1:55:40 video-11
Note : Agar objects k array ko slice bna k copy banaenge to original array change ho skta h.
Note : Shallow Copy sirf array object k case m hi hoga.

Q) Print all subarrays using splice() method 


Today's Agenda :
1) Arrays = forEach, custom forEach
2) Arrays = find and findIndex, custom find and findIndex
3)  Arrays = reduce, cutomReduce, reduceRight
4) Arrays = indexOf, lastIndexOf
5) Arrays = concat, join, fill
6) Arrays = keys, entries
7) Arrays = reverse, sort
8) Arrays = from, include, valueOf

Article to read :
-----------------
Arrays Map :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Array Filter :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Array Some :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

Arrays Every :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

Arrays find :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

Array findIndex :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Array ForEach :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

map :
let arr = [2, 5, 9, 8, 15, 11, 6];
-> Maan lijiye humare saamne ek array, to map ek function h jo ek new array return krta h jo ki original array k length k equal hoga -
let sqarr = arr.map();
Q) Map input m kya leta h?
-> callback function, means map m callback function pass kr skte h (function ko function pass kr diye) -
let sqarr = arr.map(function(){
    
});
Q) Wo callback function kya leta h?
-> callback function takes 3 parameter -
(a) 'v' (value)
(b) 'i' (index)
(c) 'arr' (array)
let sqarr = arr.map(function(v, i, oarr){
    console.log(v + " " + i + " " + oarr);  
});

Output :
2 @ 0 from 2,5,9,8,15,11,6
5 @ 1 from 2,5,9,8,15,11,6
9 @ 2 from 2,5,9,8,15,11,6
8 @ 3 from 2,5,9,8,15,11,6
15 @ 4 from 2,5,9,8,15,11,6
11 @ 5 from 2,5,9,8,15,11,6
6 @ 6 from 2,5,9,8,15,11,6

Parameter-1 : Value
Parameter-2 : index
Parameter-2 : Array
Note : Map will call the value everytime, once for each value. (For each run of callback, map will pass v, i and arr to callback)

Q) Callback ki zimmedari kya h?
-> callback ko print ni krna hota, callback ko value, index ko process kr k ek single value return krni hota h.
-> For example, 
let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function(v, i, oarr){
    // console.log(v + " @ " + i + " =[" + oarr + "]");
    return v * v;
});
console.log(sqarr);

Output :
[ 4,  25, 81, 64, 225, 121, 36 ]

Note : Single value returned by each run will be collected in a new array and returns the new array (sqarr). And length of returned array is equal to the original array.

// node 60ArrayMapQ1.js
Q) Mujhe ek new array return kro jisme sbke initials hone chaiye -
let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
]
//Use the map function to produce the below output -
Output : ["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."]


Custom Map (Apna map):
---------------------- 
-> Isme hm dekhnge map internally kaam kaise krte h -
-> Jb koi array m function add krna hota h to aise krte h -
Array.prototype.myMap = function(callback){
    let res = [];
    for(let i = 0; i < this.length; i++){
        let val = this[i];
        let rv = callback(val, i, this);
        res.push(rv);
    }
    return res;
}

Q) myMap ne same answer kaise diya?
->myMap k andr (v, i, oarr) => v * v ye wala function callback k andr gya -> function(callback). 
let arr1 = [2, 5, 9, 8, 15, 11, 6];
let sqarr1 = arr.myMap((v, i, oarr) => v * v);
console.log("myMap function :");
console.log(sqarr)
-> Aur arr.myMap() m jo 'arr' h wo yha wo -> for(let i = 0; i < this.length; i++) k 'this' m pda h.
-> myMap() ne 'this' k saare items pe loop lagaya, value nikaali, index nikaala aur ye jo callback h humara -> ((v, i, oarr) => v * v) usse har value k liye call kr diya -> callback(val, i, this), aur fir unn values ko 'rv' m push kr diya. 
-> Jo result pahucha usse 'res' m return kr diya.

Note :
1) Consume Custom Map
2) Code Custom Map
3) Run old question-1, 2 via Custom Map

Note  It is important to know how to write Custom Map.
Note : Custom Map ka use h to see the internals of map and understand how map is working?
Note : myMap ka kaam sirf interview question h.


Array Filter :
let arr = [2, 5, 9, 8, 15, 11, 6];
let oarr = arr.map(function(v, i, oarr){
    console.log(v + " @ " + i + " =[" + oarr + "]");
    return v * v;
});

console.log(oarr);

-> let's say iske andr jo jo odd number h humein sirf wo chaiye and for that we will use filter.
//custom filter
Array.prototype.myFilter = function(cb){
    let oarr = this;
    let res = [];

    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rbv = cb(v, i, oarr);

        if(rbv == true){
            res.push(v);
        } 
    }
    return res;
}

// filter is itself a function
// filter takes as input a callback function
// callback function takes 3 parameters (v, i, oarr)
// filter will call the callback multiple times (once for each value)
// for each run of callback, filter will pass v, i, and original array to callback
// callback will process the value and index and returns a single boolean value (true/false)
// single value returned by each run of callback will be used by filter
// whenever a true is received by filter (returned by callback) then filter adds the 'v' to a new array
// Filters returns the new array
// length of returned array is equal to number of trues returned by callback

// original filter
// let arr = [2, 5, 9, 8, 15, 11, 6];
// let oarr = arr.filter(function(v, i, oarr){
//     console.log(v + " @ " + i + " [" + oarr + "]");
//     if(v % 2 == 1){
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(oarr);


// custom filter
let arr = [2, 5, 9, 8, 15, 11, 6];
let oarr = arr.myFilter(function(v, i, oarr){
    console.log(v + " @ " + i + " [" + oarr + "]");
    if(v % 2 == 1){
        return true;
    } else {
        return false;
    }
})
console.log(oarr);

Q) Filter or map, dono use kr k ladies ki ages humein deni h -
-> Answer done

Today's Agenda :
1) Map vs Filter
2) Map and Filter
3) Some
4) Every
5) Custom Some
6) Custom Every
7) find
8) findIndex

Some :
-> Some k andr saare values ek-ek kr k andr jaate h, har value k liye true/false return krte hai. Agar ek v true mil gya to true return krta h (just like "OR" operator) aur saare false tabhi false.

Example :
let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 40, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 27, gender: "F"}    
];

// some takes each value one-by-one and returns a true if every 'cb' returns true and returns 'false' if every 'cb' returns false
// some returns either single 'true/false'

// Q) Is there a valid candidate ('F' and between 20 and 30)? (Ek v true to true)
let isThereAnyValidCandidate = arr.some(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        return true;
    } else {
        return false;
    }
});

console.log(isThereAnyValidCandidate);

Every :
-> Every is lika (AND Operator), saare true tabhi true warna false.
let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 20, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 30, gender: "M"},
    {name: "H", age: 27, gender: "F"}    
];

// if every callback returns 'true' then 'every' returns 'true'
// Are all female candidates valid
let allFemaleCandiatesValid = arr.filter(c => c.gender == 'F')
.every(fc => fc.age >= 20 && fc.age <=30);

console.log(isThereAnyValidCandidate);

find : Similar to some, Some 'true' return krta tha aur ye 'value' return krega aur 'false' h to 'undefined'

let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 40, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 27, gender: "F"}    
];

// find gives value against first true, if there is no true then undefined

// First valid candidate ('F' and between 20 and 30)? (Ek v true to true)
let fvc = arr.find(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        return true;
    } else {
        return false;
    }
});

if(fvc != undefined){
console.log(fvc.name + "@" + fvc.age + "#" + fvc.gender);
} else {
    console.log("Undefined");
}

findIndex : Jaha Some 'true' return krta tha waha findIndex 'index' return kr dega aur 'false' h to '-1'

let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 40, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 27, gender: "F"}    
];

// find gives value against first true, if there is no true then undefined

// First valid candidate ('F' and between 20 and 30)? (Ek v true to true)
let fvci = arr.findIndex(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        return true;
    } else {
        return false;
    }
});

if(fvci != -1){
console.log(arr[fvci].name + "@" + arr[fvci].age + "#" + arr[fvci].gender);
} else {
    console.log("Not Found!");
}

console.log(fvci);

Note : "Turing" is a company in India jo Foreign ki remote jobs India m laati h.





Arrays :
--------
1) reduce :
   (a) reduce
   (b) customReduce
   (c) ques1 : count primes
   (d) ques2 : flattten of 2d array
   (d) ques3 : union of arrays
   (e) ques4 : intersection of arrays
   (f) ques5 : compound functions
   (g) ques6 : sum of squares ages of all valid candidates
   (h) Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   (i) reduceRight : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

2) Other functions :
   (a) indexOf : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   (b) lastIndexOf : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
   (c) keys : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
   (d) values : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
   (e) entries : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
   (f) reverse : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   (g) sort : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   (h) concat : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   (i) join : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   (j) fill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

Reduce : 
-> Same as some & every, sbko process kr k ekhi value return krta h (poora array return ni krta)

Topics :
1) JS, Frontend, Backend, Full-Stack, React
2) JS = Arrays
3) JS = Functions
4) Frontend
5) JS = Callback, Promise, Async-Await
6) Backend
7) JS = Objects and Misc1
8) Full-Stack
9) JS Misc2
10) React

Arrays :
1) ques1 : intersection of arrays
2) ques2 : union of arrays
3) ques3 : sum of squares ages of all valid candidates
   (a) Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   (b) reduceRight : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

4) Other functions :
   (c) indexOf : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   (d) lastIndexOf : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
--------------------------------------------------------------------------------------------------------
We will do 'keys, values & entries' with sets :
-----------------------------------------------
   (e) keys : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
   (f) values : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
   (g) entries : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
--------------------------------------------------------------------------------------------------------
   (h) reverse : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   (i) sort : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   (j) concat : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   (k) join : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   (l) fill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
   (m) Array.from : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   (n) Array.of = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
   (o) Array.isArray = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
   (p) flat = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
   (q) flatMap = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap


includes() -> koi value h ya ni wo check krte h, and it returns true/false.
--------------------------------------------------------------------------------------------------------
Functions : 
1) Creating Functions (5 ways to create function)
   a) Function definition
   b) Functions as variable
   c) Function constructor
   d) Arrow Functions
   e) Functions on objects
2) Calling Functions (6 ways to call functions)
   a) arguments, caller
   b) this
   c) normal call
   d) call on an object
   e) Functions as constructors
   f) IIFE
   g) .call
   h) .apply
   i) .bind
3) Other things (Interview Questions)
   a) Functions as return values
   b) Functions as parameter 
   c) Functions as Objects
   d) Closure
   e) Hoisting
   f) length, name

Day-1 : Function
1) What is a function?
2) Function Types :
   (a) Function Definition
   (b) Function Expression
   (c) Arrow Function
   (d) IIFE
   (e) Anynomous Function
3) Closures

Function Definition :
//1) function definition -> code
function sayHello(name){    //-->Parameter
    console.log("Hello", name);
}

// function invokation/call -> This line actually runs above code
sayHello("Aslam");

// I haven't call the function -> function name print ho jaata h
console.log("12",sayHello);
------------
Memory Map :
------------
Humein pta h sabhi k paas 'stack' & 'heap' memory hota h. Pehle memory allocation hota h to sayHello() function (number, boolean etc ka size define kr skte h but arrays, function ka size define ni kr skte h) 'heap' memory k andr bante h. To sayHello() function heap m kahi na kahi bana hoga aur usko kuch na kuch 'address' mila hoga. Imagine sayHello()'s address is '8k'. Ab humne sayHello("Aslam") pass kiya to 'stack' pe humare paas sayHello() naam ka function aaega.
Q) Isko sayHello() naam ka function milega kaise?
-> Jo 8k pe code likha hua usko execute kr dega and uske andr name pe "Aslam" pass kr dega. To code chlega to "Aslam" print ho jaega. (Koi v function tb chalta h jb usko call kiya jaata h).
Note : Koi v chij print hoti h, koi v language ho, uska apne aap toString() chalta h, jaise Java k andr ArrayList ko print kr skte h lekin ek Array ko print ni kr skte h. Similarly, JS k andr Array ko print kr skte h qki uske toString m implement kiya hua h ki output kya dena h. Actually inke toString m likha hota h ki jb hum kisi chij ko print krnge to output kya aane wala h.
-> Avi humne apne console pe "Hello Aslam" print karwaya tha.

Agar hum ab next line pe aate h to last line stack se hatt jaega aur ye aaega -
console.log("12",sayHello);
-> 12 print hoga and 'sayHello' 8k m pda hua h (heap m). Ye uske paas jaega aur basically humko iss function name ko print kr dega as it is. Jb v hm kisi function ko call ni krte, sirf print krte h to uska naam aise aa jaata h - "12 [Function: sayHello]"

// If we print the function after calling it -> returned value
console.log(sayHello("Aslam")); //Jb java m kuch ni hota h tb undefined hota h
-> Jb hum function likh k input pass krte h but kuch return ni krte tb javascript undefined de deta h.
 We can also write it as -
 let rVal = sayHello("Jasbir");
 console.log("11", rVal);   // 11 undefined

Hoisting : Fancy word for Memory Allocation of JavaScript functions
 -> Which one will print?
 // 1)
 function iamReal() {
    console.log("I am Real");
}

// 2)
function iamReal() {
    console.log("He isn't real -> I am the real one");
}

iamReal();

Q) Function m memory allocation kaise hoti h?
-> JS ka code 2 steps m chalta h -
Step-1 : Memory Allocation for the function
Step-2 : Code Execution
-> Jaise khana khane k baad walk k jaate h usi tarah memory allocation ho k khtm ho jaati h then code execute hote h
-> Humare paas 2 functions h -

function iamReal() {
    console.log("I am Real");
}

function iamReal() {
    console.log("He isn't real -> I am the real one");
}
-> Isme hmne dekha tha ki function overloading possible nai h JS m. Functions m memory allocate code chalne se pehle hi ho jaati h -

-> Maan lo function-1 8k pe bana h jaha likha h - "I am Real" (Memory Allocation ho rha avi). Fir 2nd function pe aaega jaha diya h - "He isn't real -> I am the real one", Aur dono iamReal() function h to wo 8k pe function-1 k jagha function-2 ko put kr deta ek new address m i.e. 16k. Basically, iamReal() 8k ko point kr rha tha, ab iamReal() ko 16k pe point kr rha h.
-> Now code line-by-line execute hoga -

Output :
script started
He isn't real -> I am the real one
He isn't real -> I am the real one

Note : Functions k liye pehle hi memory allocate kr di jaati h to agar hm ek naam se 2 function likhte h to ek function dusre ko override kr deta h to 2nd wale function ko JS point krta h. 
    (a) 1st function kvi call hi nai hua
    (b) Ek parameter k saath call hoga aur dusra bina parameter k fir v last wala function chlega (parameter se fark ni pdta)
    (c) iamReal() function heap m bante h aur unki address stack pe rehta h

// function definition
function fn(param) {
    console.log("I am function definiton", param);
}

// string -> value
fn("Hello");

// boolean -> value
fn(true);

// object -> address pass hota h
fn({name: "Jasbir"});

// Array -> address pass hota h
fn([10, 20, 30]);

// We can write it as (obj k andr address pass kr rhe h) -
let obj = {name: "Jasbir"};
fn(obj);

-> string, boolean m to direct value pass ho gya lekin object k case m "address" pass hota h.
-> String, Object, Arrays - Heap Memory m bnate h, Similarly functions v heap m bnte h aur uska address pass krte h stack m.
-> Boolean, Reference Type stack m bante h

Output :
I am function definiton Hello
I am function definiton true
I am function definiton { name: 'Jasbir' }
I am function definiton [ 10, 20, 30 ]
I am function definiton { name: 'Jasbir' }

Pass by value & Pass by reference -
Q) Ye kaise pta chlega ki address pass hua h?
-> If a friend ask me wha ek pen pda hua h, pass me the pen. What would you do? 
-> Obviously! We will pass.
-> Agar mere friend ne kaha mujhe tmhra ghr chaiye to kya ghr utha k dunga ya ghr ka address?
-> Address! To jo chije bhari hoti h uske liye address diya jaata h.
-> boolean, string ka size defined h but array & objects ka size defined nai h isliye kisi v language k andr bhari chijo ka pass the reference. This is one of the main reason iski address stack m hoti h jaha se we pass the reference and jinki size fixed h wo pass by value ho jaati h.


// functions are also variables
function chotafn() {
    console.log("Hello, I am a chota fn");
}
-> Hm jo kaam ek variable k saath kr skte h, wahi same kaam hm function k saath v kr skte h in JS.
-> In fancy term we use - "Functions are first class citizens".
-> So, jaise hm variable pass krte h usi tarah hm function v pass kr skte h. Basically, hm function ka address pass krte h.

// function can also be passed as an argument in a function because it behaves same as varible
fn(chotafn);

Output : I am function definiton [Function: chotafn]


// function definition
function fn(param) {
    console.log("I am function definiton", param);
    //execute chota fn
    param();
}

function chotafn() {
    console.log("Hello, I am a chota fn");
}

fn(chotafn);

Output :
I am function definiton [Function: chotafn]
Hello, I am a chota fn

-> Iss part se Higher Order Function ka concept nikla tha


105chotaFunction.js
-------------------
// function definition
function fn(param) {
    console.log("I am function definiton", param);
    //execute chota fn
    param();
}

// functions are also variables -> Functions are first class citizens in JS
function chotafn() {
    console.log("Hello, I am a chota fn");
}

// function can also be passed as an argument in a function
// HOF
fn(chotafn);


106typeOfFunction.js
--------------------
// 1) function definition - Basic function
function fn(){
    console.log("I am function definition");
}
fn();


// variable ka assignment
let a = [10, 20, 30];
let b = a;
console.log(b);

// 2) function expression - Function bnte hi usko variable m assign kr diye aur variable call krte h
-> Function ka address kisi variable m store kr lete h i.e. Function Expression.
// let secondName = function originalName(){    
let secondName = function (){
    console.log("I am expression");
}
secondName();
// origialName(); -> originalName() se call ni kr skte isliye agar ye function name hta de to v chlega


console.log("Before");
// 3) IIFE - Immediately Invoked Function Expression - Kisi function ko bante hi call kr de to wo IIFE hoga
(function drawBoard(){
    console.log("Board is immediately drawn");
})();
console.log("After");

// 4) Anonymous Function - Jisme function name jaruri nai hota h (2 & 3 function)

let secondName1 = function (){
    console.log("I am expression");
}
secondName();

//same name repeated v likh skte h isme
(function drawBoard(){
    console.log("Board is immediately drawn");
})();
console.log("After");

Note : DSA Practice from freeCodeCamp 
-> https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript


Functions completed till now -
1) Higher Order Functions - map, reduce, filter etc...
2) Function Definition
3) Function Expression
4) IIFE
6) Anynomous Function

Functions, Arguments & Closures :-
-----------------------
-> JS is multi-paradigm language (means OOPS v follow krti h & Functional Programming v follow krti h)
-> Isme classes v bnate h, aur functions k through v banate h.

Arguments :
-----------
1) 
function fn(param1, param2){
    console.log("Inside fn", param1, param2);
}
fn("Hello", "Hi");

Output : Inside Hello Hi

2) 
function fn(param1, param2){
    console.log("Inside fn", param1, param2);
}
fn("Hello", "Hi");
// if there is something missing -> default -> "undefined"
fn("Hello");
fn();
fn("Hello", "Hi", "Bye");

Output :
Inside fn Hello Hi
Inside fn Hello undefined
Inside fn undefined undefined
Inside fn Hello Hi

-> Humare paas jitne arguments aate h, like maine 3 arguments pass kiye to arguments k liye ek extra array pass hota h.

3) 
function fn(){
    console.log(arguments);
}
fn("Hello", "Hi");
fn("Hello");
fn();
fn("Hello", "Hi", "Bye");

-> Basically hota ye h ki 'arguments' keyword naam ka ek predefined array hota h JS m. Uske andr jo v hm arguments pass krte h JS k andr wo iss varible m store ho jaate h. 
-> Actually, saara jo parameters h wo yha pas hnge 'arguments' naam k array m lekin unki copy 'fn(param1, param)' m chali janege so pehli copy 'param1' m and dusri copy 'param2' m. So, jitne m chije upar pass krte h wo 'argument of array' m pass hoti h -
    
    function fn(param){
        console.log(arguments);
    }

Now run the code to see ourself -
---------------------------------
function fn(){
    console.log(arguments);
}
fn("Hello", "Hi");
fn("Hello");
fn();
fn("Hello", "Hi", "Bye");

Output :
[Arguments] { '0': 'Hello', '1': 'Hi' }
[Arguments] { '0': 'Hello' }
[Arguments] {}
[Arguments] { '0': 'Hello', '1': 'Hi', '2': 'Bye' }
-> So, basically saare arguments, 'argument of array' m chala jaata h aur store ho jaata h. To basically jb hm param1 pass krte h to 'argument of array' k 0th index m jo hoga usko ye pass kr dega, fir param2 2nd position pe h to 'argument of array' k 1st index m jo hoga ye usko pass kr dega.

function fn(param1, param2){
    console.log(arguments);
    console.log(param1, param2);
}
fn("Hello", "Hi");
fn("Hello");
fn();
fn("Hello", "Hi", "Bye");

Output : [Arguments] { '0': 'Hello', '1': 'Hi' }
Hello Hi
[Arguments] { '0': 'Hello' }
Hello undefined
[Arguments] {}
undefined undefined
[Arguments] { '0': 'Hello', '1': 'Hi', '2': 'Bye' }
Hello Hi
-> Actually jo chije h wo 'arguments array' k andr jaati h aur waha saari chije mil jaati h.
-> Ab unki copy 'param1' & 'param2' m jaa k store hoti h.
So, basically parameters humare 'argument's array' m chle jaate h aur aur hm unko waha se copy kr skte h

Q1)
// Description
// Find output of the following :

function f() {
    console.log(arguments); 
}

function f(a, b) {
    return a + b;
}

console.log(f(2, 3, 4, 5));

function f(x, y, z, t) {
    return x + y + z + t;
}

console.log(f(2, 3, 4, 5));

-> Humare pass ek function h 'f()'. To pehle memory allocation hoti h to jaha hmne likhe -
    console.log(arguments); 
    To ye banega '8k' pe. Then f(a, b) aaya to ye '16k' pe point hua. To jo 3rd function h -
    function f(x, y, z, t) -> '32k' pe likha hua h. And eventually pehle '8k' pe gya fir '16k' pe gya and finally ab '32k' pe point kr rha hoga. Ab saari memory allocation ho gyi uske baad code chlega.
-> Ab humara code chlega to 1st line -
  console.log(f(2, 3, 4, 5)); pass ho rha h and it is passing 2,3,4,5. Iss case m -
  -> function f() => ignore ho chuke h
  -> function f(a, b) => ignore ho chuka h
    Bas ye pass hua h -> function f(x, y, z, t) and yha se return aaega x + y + z + t;
    So, output will be 14.
-> Ab next step m aate h -> console.log(f(2, 3, 4, 5)); 
    Output will be same : '14'.

Output :
14
14

--------------------------------
|2 Concepts isme clear ho gya -|
|  1) What is Real?            |
|  2) Argument                 |
--------------------------------


--------------------------------------------------------------------------------------------------------
1) Code Exceution (Hoisting)
2) let/var/const 
3) Closure

Code Execution of JS :
2 level hote h -

Step-1 : Memory Allocation
-> Isme jo function definition hota h unke liye memory allocate ho jaati h
-> Variables k liye 'undefined' set ho jaata h

Step-2 : Code Execution
-> Code ek bubble k andr chalta h and that bubble is known as 'Execution Context'.
-> Ye create kb hota h? Ek to default hota h 'Global Execution Context' jo code humara bahar rkha hota h wo saara ka saara Global Execution Context k andr chlega. And ye kb create hota h? Jb ek function call hota h
-> Any code that is in JavaScript will run in Execution Context (Ye sbse bahar pda hota h, agar ye v hatt gya to code band). And Global k alawa kb create hota h? Jb ek function() call hota h tb uske liye ek new Execution Context create hota h and then usme ye saare kaam hote h -
(a) Memory Allocation
(b) Code Execution.
Code Execution ka extra kaam k ki function definiton k liye memory allocate ho jaegi aur variables k liye undefined set ho jaegi chalne se pehle. 


Example : executionContext.js

console.log("Before declaration", a);
var a;
console.log("After declaration", a);
a = 10;
console.log("After initialization", a);

Output :
Before declaration undefined
After declaration undefined
After initialization 10

Memory Allocation :
-> Jo v code kisi function k andr nai h means bahar likha hua h chlta h 'global execution context' m.
-> To isme variable ek h aur function v ek h. So, avi k liye 'a' variable k memory allocate hogi aur memory set hogi 'undefined'.
-> Ab agla function heap m ban jaega aur uska address stack m aa jaega '18k'.
-> Ab code chlega where output will be -

Output : Before declaration undefined

Note : Jb v function call hota h tb ek execution context banta h. Basically stack m jb aate h aur function call hota h tb uska apna 'execution context' banta h. Ab fn() chlega to pehla kaam kya hoga?
Ab fn() ka apna bubble h to 'var a;' k liye memory allocate hoga lekin value 'undefined' hoga. 
Note : Basically stack m jo function() ki liye bnta h usko 'execution context' bol dete h aur 'heap' m jo bnta h usko 'global execution context'.

Output : After declaration undefined
         After initialization 10    //memory allocate ho gyi




Q) What will happen if there is a function?

function fn() {
    console.log("Before declaration", a);
    var a;
    console.log("After declaration", a);
    a = 20;
    console.log("After initialization", a);
}

Output :
Before declaration undefined
After declaration undefined
After initialization 20


Q)
// GEC
console.log("Before declaration 2", a);
var a;
console.log("After declaration 4", a);
a = 10;
console.log("After initialization 6", a);
function fn() {
    console.log("Before declaration 8", a);
    var a;
    console.log("After declaration 10", a);
    a = 20;
    console.log("After initialization 12", a);
}
fn();

Output :
Before declaration 2 undefined
After declaration 4 undefined
After initialization 6 10
Before declaration 8 undefined
After declaration 10 undefined
After initialization 12 20


Question)

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

Output :
This is last line 10
Before declaration 8 undefined
After declaration 10 undefined
35 30
After initialization 12 30

-> 'var' is a function scoped. To basically 'a' ko humne kisi function k andr declare kr diya aur usko dobara declare kr rhe h to 'a' wale k andr hi value update ho jaegi. So, 'var' is function scoped.
-> Value andr se bahar ni jaata, bahar se andr aa skta h aur usko utha k hm update kr dete h.

Var and Scope :
---------------
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

Var vs Let :
------------
// redeclare, reassign
// function scope, redeclare (problem jiske wjh se bug aa jaati, isliye 'let' aaya)
// we can access 'var' variable before initialization
console.log("This is 'a'", a);
var a;
a = 10;
var a;
console.log("This is 'a'", a);

// before declaration 'let' variable will be in TDZ -> 'Temporal Dead Zone', so we cannot access
// Block Scope -> means {...} 2 bracket k andr declare kiye to wahi tk access rhega
// can't redeclare
// let b;          //undefined
let b = 20;
console.log("This is 'b'", b); 
// let b = 10;  //ReferenceError: Cannot access 'b' before initialization

Note : 
1) Scope means ek variable kaha tk available h (kis range tk usko access kr skte h)
2) Block Scope : Variable ka range agar {...} curly brackes/block code k andr tk hi rhe to wo Block Scope hoga
3) Function Scope : Variable ko access krne ki range poore function tk rhegi

Closures :
----------
var a;
function fn() {
    console.log("Before declaration 8", a);
    let a;
    console.log("After declaration 10", a);
    a = 20;
    if(true) {
        let a = 30;
        console.log("35", a);
    }
    console.log("After initialization 12", a);
}
a = 10;
console.log("This is last line", a);
fn();

-> Sbse pehle stack banega aur uske andr sbse pehle GEC bnega. Starting m kya kya bahar h?
(a) var a;
(b) fn()
To 'a' k liye undefined set ho jaega, aur fn() ki memory allocate ho jaegi (isme function ka code pda h to jb fn() call hoga to function interpret ho k chl jaega)
-> Ab aage a ki value 10 pdi h to 'a = 10' ho jaega.

Ab fn() chlega to uske liye ek new execution context create hoga. Iske andr ab 'a' k liye 'undefined' set ho jaega, aur ye 'let' variable h aur isko declare krne se phle hi access kr rhe h to error dega 'Cannot access 'a' before initialization' but iss 'let' ko var kr denge to code chl jaega. To 'var' k case m 'undefined' aaega.
-> Aage ki line m 'a = 20' h to a ki value 20 chli jaegi.
-> if(true) k andr gye to function k andr 'if' block saa ban jaata h, ab uske liye memory allocation hoti h fir. Aur isme 'a = 30'; put ho jagea then next line m '35 30' print ho jaega. Fir iss block se bahar aa gya to '20' print ho jaega qki memory alag ho jaega.

var a;
function fn() {
    console.log("Before declaration 8", a); //ReferenceError: Cannot access 'a' before initialization 
    var a;
    console.log("After declaration 10", a);
    a = 20;
    if(true) {
        let a = 30;
        console.log("35", a);
    }
    console.log("After initialization 12", a);
}
a = 10;
console.log("This is last line", a);
fn();

Output :
This is last line 10
Before declaration 8 undefined
After declaration 10 undefined
35 30
After initialization 12 20
--------------------------------------------------------------------------------------------------------
Functions :

--------------------------------------------------------------------------------------------------------
Callback, Promise, Async-Await :
   1) Event loop and queue
   2) Promise = then, search
   3) Promise = new, resolve, parallel
   4) Promise = all
   5) async, await


--------------------------------------------------------------------------------------------------------
Objects :
   1) {}, new
   2) keys, values, entries, hasOwnProperty
--------------------------------------------------------------------------------------------------------
Miscellaneous :
   1) String
   2) Symbols
   3) Iterables
--------------------------------------------------------------------------------------------------------