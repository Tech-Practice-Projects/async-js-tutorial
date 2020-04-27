/*
Excersise: 1. Read the details about user id 20 from database
           2. Get the gitHubUserName
           3. Call getRepositories function to get all the user repos as an array
You are given a function getRepositories() which is a synchronous function below.
Make this an async function.
------
function getRepositories(username){
    return ["repor1", "repo2", "repo3"];
}
*/

console.log("Before");
var id = 20;
getUser(id, user => {
  console.log(user);
  // just like getUser getRepositories sends a parameter, here it is the username and gets a parameter,
  // here it is repos
  getRepositories(user.gitHubUserName, repos => {
    console.log(repos);
  });
});
console.log("After");

// async getRepo
function getRepositories(username, callback) {
  // I din do it in settimeout function initially but mish does it, It makes sense
  // as there would be some time lag to read all the repos
  setTimeout(() => {
    console.log(`Gettign repo for ${username}`);
    callback(["repo1", "repo2"]);
  }, 3000);
}
// takes id as a parameter
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from database");
    // instead of using return statement you send the database data via callback function
    callback({ id: id, gitHubUserName: "mrinalini" });
  }, 2000);
}
