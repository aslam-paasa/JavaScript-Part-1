/** 
 * Introduction to JavaScript :
 * => JS is multi-paradigm programming language, means in JS we can do -
 *    (a) Functional Programming
 *    (b) Procedural Programming
 *    (c) Object-Oriented Programming also.
 * 
 * Basic foundational concepts are same:
 * 1. Program in a running state is called Process.
 * 2. RAM is a primary storage area or we can say it's a storage device,
 *    that means if a program is loaded as a process, it gets some memory
 *    allocated to it from the RAM.
 * 3. Our RAM will have 4 GB memory, so let's say our RAM will allocate
 *    512 mb to our processor, when we run our program and it run into
 *    process, some 512mb of my RAM gets allocated to this process.
 * 4. If we run another program and that gets converted to process, that will
 *    take some more memory. 
 *
 * Q. What is the usecase of this memory?
 * => Inside this memory we can use some storage, just as we seen, in the
 *    tic tac toe game we need to store the Player Score, Player Name etc, 
 *    so we need some storage area for all of this and we can use this RAM
 *    as the storage area.
 * => Once we close the process, all of the data will be gone and when we 
 *    will restart, we will restart from scratch.
 * => So, whenever we are going to run a program, that program gets loaded
 *    in the memory as a process. This process gets some storage area from
 *    our RAM that means inside our program we can write logics so that we
 *    can store some piece of information very easily inside the RAM.
 * 
 * Q. How can we store this piece of information?
 * => When we are dealing with a programming language, inside programming
 *    language there are some special words that we cannot use for our 
 *    usecase anyhow we want. These things are called as "keywords". 
 * => In a programming language, few words are reserved by the language for
 *    its own purpose. We cannot change their meaning or repurpose them for
 *    different usecase.
 * => For example, In JS, few words are :
 *    (a) let
 *    (b) for
 *    (c) const
 *    (d) if
 *    (e) else
 *    (f) return etc...
 *
 * Q. How can we store some values inside a program?
 * => To store values we can use "variables". 
 * => Inside our RAM we got 512 mb for our particular process, now inside this
 *    512 mb we want to store some piece of information so technically we can
 *    create a bucket in the memory, inside this bucket we can store some 
 *    value. And this bucket will also have particular name. So, this whole
 *    bucket in which we are storing the value and we are referring it with
 *    a particular name, this whole thing is called as "variable".
 *    +----+
 *    | 12 | ----> (data/value+reference/label) = variable 
 *    +----+
 *      x ---> reference/label
 * => Variables are memory buckets that stores our values and has a name as
 *    well.
 * => "Variables are containers for storing data (storing data values). We can
 *    declare a variable by using keywords."
 */

/**
 * JavaScript :
 * => The extension of JavaScript is ".js"
 *
 * Q. How to create variables in JS?
 * => There are 3 ways to create variables -
 *    1. Using 'var' for declaring function-scoped variables (old)
 *    2. Using 'let' for declaring block-scoped variables (new)
 *    3. Using 'const' for declaring constant variables
 *
 * 1. Using 'var' keyword : var marks = 90;
 * => When we write var keyword, inside the memory there will be a bucket
 *    that will get created, the label/name of the bucket will be 'marks'
 *    and the value stored inside will be '90'.
 *    +----+
 *    | 90 | ----> value
 *    +----+
 *    marks ----> label
 *
 * 2. Using 'let' keyword :
 * => When we write let keyword, inside the memory there will be a bucket
 *    that will get created, the label/name of the bucket will be 'age'
 *    and the value stored inside will be '24'.
 * => let age = 24;
 *
 * 3. Using 'const' keyword :
 * => When we write let keyword, inside the memory there will be a bucket
 *    that will get created, the label/name of the bucket will be 'x'
 *    and the value stored inside will be '100'.
 * => const x = 100;
 *
 * => Here, we are instructing JS to create memory buckets inside RAM.
 */


/**
 * Semicolon :
 * => When we write one line of JS Code, this is equivalent to one instruction
 *    that we want to give to the computer.
 * => var score = 100; --> one instruction
 * => One complete instruction is called "Statement". 
 * => At the end of every statement in JS we can put a semicolon (but it is
 *    optional).
 */

/**
 * Rules for variable creation :
 * 1. Variables can contain small alphabets, capital alphabets, digits,
 *    underscore ( _ ), dollar ( $ )
 * 2. We cannot have space or any other special characters.
 * 3. We should give meaningful names so that reader can identify the names
 *    properly.
 * 4. Variable name cannot start with a digit but it can have digits in between
 *    or at last.
 * 5. We cannot use keyword as variable names.
*/ 

var score = 10;
var marks = 90;

let age = 24;
let flag = 0;

const x = 100;
