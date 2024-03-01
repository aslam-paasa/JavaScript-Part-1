/* Problem : Product of Array excelt self
-> We have given one array, we have to just multiply all the arrays except
   itself.
   
arr = [10,3,5,6,2]

For element 10, other elements = 3,5,6,2
                               = 3*5*6*2 = 180
For element 3, other elements = 10,5,6,2 = 600
For element 5, other elements = 10,3,6,2 = 360
For element 6, other elements = 10,3,5,2 = 300
For element 2, other elements = 10,3,6,5 = 900*/

const arr2 = [10,3,5,6,2];

let resultArray2 = [];

for(let i=0; i<arr2.length; i++)
{
    let product = 1;
    for(let j=0; j<arr2.length; j++)
    {
        // product should not include the same number itself
        if(i != j)
        {
            product *= arr2[j];
        }
    }
    resultArray2.push(product);
}
// In every iteration we are generating the product and then pushing it to resulArray2
console.log(resultArray2);