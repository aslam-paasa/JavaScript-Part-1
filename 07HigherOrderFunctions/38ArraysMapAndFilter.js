//square of even number
let arr = [2, 5, 9, 18, 7, 34, 42, 45, 32];
let evenSq = arr.filter(v => v % 2 == 0).map(v => v * v);
console.log(evenSq);

/*
Pehle wale filter se saare even no se filter ho gye, array chota ho gya. Filter ne humein chota array
diya jisme saare even no pade h, fir usko map kr diya.
*/