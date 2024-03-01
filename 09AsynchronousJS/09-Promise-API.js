// Promise API is very helpful when we are building our day-to-day application.
// When we are developing a react project, we came to a situation where we have
// to make parallel API calls and that is where we use promise APIs.

// 1. Promise.all()
// Suppose if we have to make parallel API calls and get the results
// Suppose if we have 10 userIds and we have an API call for userInfo and we want
// to make 10 parallel API calls and get the results for 10 different users. And
// this is where we use Promise.all() API.

// It is used to handle multiple APIs/promise calls together.
// This take an array of promise as an input (iterable) +
// Let's assume that we have 3 promises/API calls : p1, p2, p3. When we write
// promise.all([p1,p2,p3]), it will make 3 parallel API calls and get the results.

// Scenario 1 : When all API calls success
// Suppose 'p1' is an API call and takes 3sec to get the result, p2 takes 1sec to
// resolve, p3 takes 2sec to get the result. And suppose all of them are success.
// In that case, the output of the promise.all() will be an array with the 
// result of all these 3 problems. 
// It will make an API call, collect all the results and give it inside an array
// and it will give it back, just like we have array.map(), we give in an array
// and it returns an array, similarly, promise.all() will return an array with
// value of all these results ao it will have "val1, val2, val3". So, this 
// "va1" is result of "p1", "val2" is result of "p2", "val3" is result of "p3".

// How much time it will take?
// The first API takes 3sec, second takes 1sec, and the third took 2sec. But the
// final promise.all() API will take 3sec and after 3sec it will provide me the
// result : [val, val2, val3]. Because promise.all() will make all the 3 api calls
// in parallel but it will wait for all of them to finish, then collect the results
// and it will provide this result : [val, val2, val3].

// Scenario 2 : When any one API call fails/rejected
// It again has these 3 promises : promise.all([p1, p2, p3]), where p1 takes 3sec,
// p2 takes 1sec and p3 takes 2sec but after 1sec p2 gets rejected. As soon as
// any of these promises get rejected then promise.all() will throw an error and
// promise.all() will also be a failure and whatever error it will get from that
// promise from that rejected promise, it will throw the same error as its
// result. So, output will be : ERROR

// Immediately as soon as happened, it will return the ERROR. In this case, p2
// takes 1sec and after 1sec it got error so that means after 1sec we will see an
// ERROR. It will not even wait for other promises to gets successful or rejected.

// What will happen to p1 and p3 now? Those APi calls were already made, will it
// get cancelled?
// No!, whenever we make an API call or promises created or executed, we can't
// cancel the promise in between. It is not possible in JS at this point of time.
// But if any one of them gets rejected then all will get rejected. So, if all the
// promises gets success then it will give us the collective result, but if any
// on of them fails then means the whole collection chain fails.

// What will happen if 1sec promise gets success and 2sec promise gets rejected?
// After 2sec promise gets rejected.

// If we create 5 api, and we need result of all the 5 api calls then we will use
// "promise.all()"


// 2. Promise.allSettled() :
// What if I want result from only successful promises? If there are 10 API calls
// and 9 of them fails then its okay. So, in that case we have one more api call
// known as "Promise.allSettled()"

// Suppose if we pass [p1,p2,p3] over here where p1 takes 3 sec, p2 takes 1 sec,
// p3 takes 2sec : promise.allSettled([p1,p2,p3])
// If all of them gets successful, then after 3sec we will get the same result as
// promise.all() but this will be different in case of failure.

// If our p2 gets rejected before 1sec, but it will still wait for all promises
// to settled (resolve/reject) and after 3sec it will wait for all the promise to
// complete. Irrespective of success or failure it will give us all the result.
// Output : [val1, err2, val3]


// 3. Promise.race() :
// It again takes 3 promises [p1, p2, p3]. As the name suggests, its a race and the 
// person who will finish first will be the winner. Suppose if there are 3 promises
// "promise.race([p1,p2,p3])" and p1 takes 3sec, p2 takes 1sec, p3 takes 2sec.
// So, as soon as we get the winner means as soon as the first promise is resolved
// i.e. after 1sec. So, after 1sec it will give me the result/value of the first 
// settled promise i.e. "val2".

// Suppose if "p1" takes 3sec, p2 takes 5sec and p3 takes 2sec. So, p3 will get 
// settled in 2sec so the value here will be "val3". So, basically we are trying to
// say it's a race, whatever promise settles first, we will get the result.

// What if the first promise was error/rejected i.e. "p3" => "ERROR"?
// Whatever the ERROR will come after 2sec, it will return result of first settled
// promise i.e. p3 = ERROR, irrespective or success or failure. 
// It will not wait for the other promises to get settled.


// 4. Promise.any() :
// It again take a list/array of promises - "promise.any([p1, p2, p3]);"
// Now it is very much similar to "promise.race()", whenever the first promise got
// resolved it will wait for the first promise to get successful. 
// If p1 takes 3sec, p2 takes 1sec, p3 takes 2sec then if p2 becomes successful it
// will return us the value of p2 i.e. "val2", but if p2 gets rejected then nothing
// will happen and promise.any() will wait for a success nad after 2sec our p3 got
// success then it will ignore the rejected p2 and it will return the successful p3
// i.e. "val3".

// What if everything fails?
// The returned result will be an "AggregateError". And this AggregateError will
// be an array of all the 3 errors [err1, err2, err3].

// Note : Settled means either "resolve/reject"