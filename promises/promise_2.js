console.log("Before");
var id = 20;
/* ------------------------------------------------------- */
/* Consuming promises. see how each promise is called in chained fashion. */
/* ------------------------------------------------------- */
getUser(id)
  .then(user => getRepositories(user.gitHubUserName))
  .then(repos => getCommits(repos[0]))
  .then(commits => displayCommits(commits))
  .catch(err => console.log(err.message)); // a single catch handles any error caused in the chain of promises
console.log("After");
/* ------------------------------------------------------- */
/* helper function */
/* ------------------------------------------------------- */
function displayCommits(commits) {
  console.log(commits);
}
/* ------------------------------------------------------- */
/* replaced all callbacks to promises */
/* ------------------------------------------------------- */
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading from database");
      resolve({ id: id, gitHubUserName: "mrinalini" });
    }, 2000);
  });
}
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Gettign repo for ${username}`);
      resolve(["repo1", "repo2"]);
    }, 3000);
  });
}
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting commits for ${repo}`);
      resolve(["commit1", "commit2", "commit3"]);
    }, 3000);
  });
}
/* ------------------------------------------------------- */
