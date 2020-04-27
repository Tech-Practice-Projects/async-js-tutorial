/* Think of this as syntactical sugar that is available
in order to write these async code using promises in a sync fashion.
Note that async await is built on top of promises.
 */
/* Below code re writes promise_2.js using async await, note the try catch
is used in order to handle the .catch in promises */
// displayCommits returns Promise < Void >
async function displayCommits(id) {
  try {
    const user = await getUser(id); // await waits for the async task to complete
    const repos = await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repos[0]);
    // displayCommits(commits); not required just do console log
    console.log(commits);
  } catch (err) {
    console.log(err.message);
  }
}
/* ------------------------------------------------------- */
/* Call the above function */
/* ------------------------------------------------------- */
displayCommits(20); // returns Promise<Void>
console.log(
  "Even though this line is written after displayCommits it will print before all these async task. This is a sync task"
);
/* ------------------------------------------------------- */
/* Promise Functions */
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
      console.log(`Getting repo for ${username}`);
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
