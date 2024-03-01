// How to get both of the key:value together?
// Use object.entry() method -> returns array of entries 

// (a) deconstruct using forEach() method
console.log(Object.entries(student));
Object.entries(student).forEach((entry) => 
{
    const [key, value] = entry; // deconstructing object
    console.log(`key is ${key} and value is ${value}`)
});
/* This one is called deconstructing of Object means earlier we have object
    in this form - 
        [
            [ 'name', 'abc' ],
            [ 'rno', 10 ],
            [ 'isDayScholar', true ],
            [ 'subject', [ 'maths', 'english', 'hindi' ] ]
        ]
Q)  If we want to break it down, how are we going to do this?
 -> Earlier we have object in the above form, if we want to break it down
    we can do it with the help of this -> const [key, value] = entry;
 -> So, whatever entry it is getting with the help of this "const [key, value] = entry;"
 -> We know in forEach first it will get the entry, after getting this entry
    we are deconstructing/separating our object with this "const [key, value] = entry;"
    And this one going to take "key" and "value".   

    entry = ['name', 'abc
                
            +--------------+
    const [key,value] = ['name', 'abc']
                 +-----------------+

    key = 'name'
    value = 'abc'

Note : If we have array then we use forEach() method.*/ 

// (b) deconstruct using for-loop
for(const [key,value] of Object.entries(student))
{
    console.log(`key is ${key} and value is ${value}`);
}
