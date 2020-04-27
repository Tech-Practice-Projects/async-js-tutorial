/* Running promise in parellel. In promise_2.js you saw
getUser, getRepositories, getCommits and displayCommits run one after other.
 Here we will see how to run promises in parellel 
 */
/* Say p1 and p2 are two promises that you want to run parallel */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Async function ...");
    resolve({ id: 1, user: "mrinalini" });
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Async function ...");
    resolve(["data1", "data2"]);
  }, 1000);
});
/* You kick off the two promises parellelly like this */
Promise.all([p1, p2])
  .then(result => console.log(result)) // array of results from both p1 and p2
  .catch(err => console.log(err.message)); // catches error from any of the promise p1 or p2
/*
What is happening above is as follow.
    1. The two promises are kicked off. Note that this is not concurrency or
    multi-threading. There is one thread that kicks off p1 and then when it gets free
    it kicks off p2.
    2. After the two promises are either fulfilled or rejected, the result
    of these promises are returned as an array. (result)
    3. This result array has the result os both p1 and p2 promise.
*/

/*
What if you want to use the data of the first promise that was fullfilled.
In our case the p2 finishes first.
*/
