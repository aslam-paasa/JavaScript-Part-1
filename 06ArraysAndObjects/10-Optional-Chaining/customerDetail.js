// If you are a frontend developer who works with a lot of JSON Structure then
// probably you have a situation where you need to do a lot of conditional check
// to map or to access a nested property in JSON.

// Q) What problem we face when we have nested JSON structure/object in JS?
// Let's assume we have one user object which has name, address and city property
// and assume that this object is coming from the backend and we are reading it
// as JSON in JS.

const user = {
    name: 'Nish',
    address: {
        city: 'Delhi'
    }
}
// Now there can be a possibility that few of the user will enter the address detail
// and few of the user will not. In that case address is a property which is not
// mandatory/required for all the user. So, in that situation we always face a 
// issue of undefined and we face a issue whether the intermediate property exist
// or not.

// Let's assume we try to access city
console.log(user.address.city);
console.log(user.name);

// Assume one user has entered the address detail and its working fine but maybe
// the other user didn't provide the address detail and in that case we don't have
// the address key in the user object. So, my complete code will break and we will
// get a error like "Cannot read properties of undefined (reading 'city')".

// When we say user.address we don't get error but undefined. So, we are getting
// undefined for "user.address" and when we say "undefined.city", it basically
// fails with error and that's why when we access "user.address.city" we get an
// error "we cannot have city on this undefined".

// Q) How optional chaining can be helpful in that situation?
//  We have many solutions like put conditional checks, whether the property exist
//  or not.
// Now the obvious solution is : we have to first check whether that "address"
// property is there or not, and based on that condition we can write our logic.

// Solution-1 : Conditional Check 
// console.log(user.address ? user.address.city : undefined);

// Solution-2 : Logical Operators to confirm whether the key is present or not
// console.log(user.address && user.address.city); 

// Assume we have a very deeply nested structure so in that case putting that much
// of condition is not good idea and we are repeating our code.

// Key
let key = "accountToken";

// Deeply Nested JavaScript Object 
const customerDetail = {
    userId: '123456',
    account: {
        accountToken: 'ABC1234',
        holder: {
            profile: {
                firstName: 'Mahi',
                lastName: 'Khurana',
                birthDate: '1990-10-10',
            }
        },
        contacts: {
            address: {
                city: 'Delhi',
                state: 'Delhi',
                countryName: 'India'
            },
            phone: [
                {
                    type: 'Home',
                    phoneNumber: '20898778',
                },
                {
                    type: 'Work',
                    phoneNumber: '9999',
                }
            ]
        }
    }
}

// Now I want to access the firstName, lastName and birthDate. In that case we can
// see how much nested structure it would be :
// customerDetail.account.holder.profile.firstName
// customerDetail.account.holder.profile.lastName
// customerDetail.account.holder.profile.birthDate

// If any of the intermediate property is not there then again our code will break
// So to avoid that situation we have to use the above approach :
// (a) Conditional checks (b) Logical Operator to make sure that particular key
// is there or not. So that syntax is not easy for very deeply nested structure

console.log(customerDetail.account && customerDetail.account.holder && customerDetail.account.holder.profile && customerDetail.account.holder.profile.firstName);
console.log(customerDetail.account && customerDetail.account.holder && customerDetail.account.holder.profile && customerDetail.account.holder.profile.lastName);
console.log(customerDetail.account && customerDetail.account.holder && customerDetail.account.holder.profile && customerDetail.account.holder.profile.birthDate);

// That's why optional chaining is introduced to us.
// We don't have to repeat our code and it's quite easy to handle that kind of 
// scenario with optional chaining.

// Optional Chaining :
// The optional chaining "?" is a safe way to access nested object properties,
// even if an intermediate property doen't exist.
// The optional chaining "?" stops the evaluation if the value before "?" is
// undefined or null and returns undefined.



console.log(user.address?.city);
console.log(customerDetail.account.holder.profile?.birthDate);

console.log(customerDetail.account?.holder.profile?.birthDate);

// It is used for reading but not writing
// If we are assigning some value to object then we cannot use that.
// customerDetail?.name = "Alisha";
// console.log(customerDetail.name);

// We can also use optional chaining for function call
// If we are not sure that on that object, particular function is there or not.
// So in that case while accessing the function also we can use optional chaining
// customerDetail.getName(); // TypeError: customerDetail.getName() is not a function
customerDetail.getName?.();
// In that case if getName() is there then execute, otherwise make its execution
// optional. Or if it is inside console.log(), it will display "undefined"
console.log(customerDetail.getName?.());


// Sometimes when we access any property from the object then instead of "dot" we 
// also use "bracket" like we use in array "[]". So, there also we can use 
// optional chaining

// Let's assume we have one "key" and we want to access the customerDetail based
// on the "accountToken" key. So, we can simply say and it will return me the
// accountToken -
console.log(customerDetail.account[key]); // ABC1234

// But let's say we don't have this account object then in that case we will 
// get the same response : "TypeError: Cannot read properties of undefined (reading
// 'accountToken')" because we don't have the account. SO, in that case we can
// do "optional chaining"
console.log(customerDetail.account?.[key]); // undefined instead of chaining