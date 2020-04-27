console.log("Before");
var id = 20;
// the "user" is what the callback function sent back
getUser(id, user => {
  console.log(user); // you can use the data sent by the database sent here.
});
console.log("After");

// takes id as a parameter
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from database");
    // instead of using return statement you send the database data via callback function
    callback({ id: id, gitHubUserName: "mrinalini" });
  }, 2000);
}
