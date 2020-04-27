/* Settled Promises */
/* Sometimes you might need to create a promise that is already resolved.
This is particularly useful while creating a unit test. You might need to create
a scenario where an async operation like calling a webservice completes successfully.
*/
/* resolve is a static method here that retuens a promise that is already resolved.
The parameters inside resolve are optional.*/
const p = Promise.resolve({ id: 1, username: "mrinalini" });
p.then(result => console.log(result));

/* Handle promise that has been already rejected */
/* Shows entire call stack if you pass new Error() */
const p2 = Promise.reject(new Error("Error Message"));
p2.catch(err => console.log(err));

/*Just shows error string */
const p3 = Promise.reject("just String Error Message");
p3.catch(err => console.log(err));
