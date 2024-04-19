const numbers = [10, 20, 30, 40];
const sum = numbers.reduceRight((accumulator, currentValue) => {
	return accumulator + currentValue;
});

console.log(sum); // Output: 100