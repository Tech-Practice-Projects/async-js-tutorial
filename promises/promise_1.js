/* Basic promise structure */

/*
    - Create a new promise to read github user name and id from database;
    - resolve and reject are actually two functions
    - see how resolve takes in parameters withing the async task, you can imagine this
    to be like the data that came from db, that data you are passing it off inside 
    resolve.
*/
const p = new Promise((resolve, reject) => {
  var time = 5000;
  setTimeout(() => {
    if (time < 3000) resolve({ id: 1, githubUserName: "mrinaliniu" });
    else reject(new Error("Read data out took too long"));
  }, time);
});

/* To use the promise you can use a chained call to .then and .catch
.then handles if the promise if fulfilled and .catch handles if there was an error.
*/

p.then(result => console.log("Result ", result)).catch(err =>
  console.log("Error", err.message)
);
