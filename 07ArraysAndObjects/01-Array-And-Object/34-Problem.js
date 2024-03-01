/*
Problem : Given an array of nouns in singular form, create a new array
that stores the plural noun of each word in the first array, and log it 
to the console. (Assume that the singular nouns can be made plural by
adding a 's'.
*/ 

const singularNoun = ['pencil', 'kite', 'code'];

let pluralNoun =  singularNoun.map(item => item + 's');
console.log(pluralNoun);
