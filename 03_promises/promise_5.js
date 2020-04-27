/*
What if you want to use the data of the first promise that was fullfilled.
In our case the p2 finishes first.
*/
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

Promise.race([p1, p2])
  .then(result => console.log(result)) // Just the result of p2 as p2 finishes first
  .catch(err => console.log(err.message));

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third Async function ...");
    resolve({ id: 1, user: "mrinalini" });
  }, 5000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fourth Async function ...");
    reject(new Error("Fourth async function failed "));
  }, 1000);
});
/* This final promise of running both p3 and p4 fails because p4 failed.*/
Promise.race([p3, p4]) // both p3 and p4 will be executed even when p2 fails p1 executes
  .then(result => console.log(result))
  .catch(err => console.log(err.message)); // error for p4 failing
/* in case it was p3 that had failed instead of p4 then the final promise would have
been resolved successfully because the miniute the first completed promise
is done the promise of Promise.race() is done. 
Note that whatever the case all promises p1, p2, p3, p4 are executed.
*/
