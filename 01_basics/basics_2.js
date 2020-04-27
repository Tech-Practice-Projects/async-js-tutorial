console.log("Before");
var id = 1;
const user = getUser(id); // this wont work, look at callbacks_1.js to see how to fix this
console.log(user); // user will be undefined
console.log("After");

// takes id as a parameter
function getUser(id) {
  setTimeout(() => {
    console.log("Reading from database");
    return { id: id, gitHubUserName: "mrinalini" }; // returns what is read from the database
  }, 2000);
}
