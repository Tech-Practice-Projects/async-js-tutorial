/*
In callback_2.js we saw how we nested getUser and getRepos to first
get the user and then get the repos, we will keep nesting this if we need 
more such data, for example what if you had to get the first repo and
perform some function on it? You will nest this inside getRepos().
This is called callback hell and can be fixed as used named functions.
*/

console.log("Before");
var id = 20;
// see how we are just passing a refrence to named fucntion getRepositories
// not calling it like getRepositories();
getUser(id, getRepositories);
console.log("After");

/* This named function is called above by the getUser function */
function getRepositories(user) {
  console.log(user);
  getRepositories(user.gitHubUserName, getCommits); // again just refrence
}
/* This named function is called above by the getRepositories function */
function getCommits(repos) {
  console.log(repos);
  getCommits(repos[0], displayCommits); // again just refrence to displayCommits
}
/* This named function is called above by the getCommits function */
function displayCommits(commits) {
  console.log(commits);
}
/* The getRepositories and getCommits below are different from the same
named functiones above. You can look at the parameters they take to 
differentiate them */
function getUser(id, callback) {
  console.log("Reading from database");
  setTimeout(() => {
    callback({ id: id, gitHubUserName: "mrinalini" });
  }, 2000);
}
function getRepositories(username, callback) {
  console.log(`Gettign repo for ${username}`);
  setTimeout(() => {
    callback(["repo1", "repo2"]);
  }, 3000);
}
function getCommits(repo, callback) {
  console.log(`Getting commits for ${repo}`);
  setTimeout(() => {
    callback(["commit1", "commit2", "commit3"]);
  }, 3000);
}
