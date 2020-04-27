# async-js-tutorial

Let's start with a basic understanding of Async programm. Look at the below code. Here the `setTimeout()` function is a async function, meaning it is a non blocking code. One might think that the steps the below code follows is first it logs `Before` then waits for 2000ms then logs `reading database` then logs `after`. However that is not the case. The steps that gets executed are as below

1. Log `before`
2. setTimeout schedules a task to be executed after 2seconds. The task in our case is to log `reading database`.
3. logs `after`.
4. after 2seconds logs `reading database`.

```javascript
console.log("before");
setTimeout(() => {
  console.log("reading database");
}, 2000);
console.log("after");
```

Asynchronous does not mean concurrent or multi-threaded. There is just a single thread that follows the above four steps one by one. In Node whenever you are dealing with **network access** or **disk access** you are dealing with asynchronous code.

## Patterns for dealing with Asynchronous code

- Callbacks
- Promises
- Async/await

## Callbacks

An asynck function takes callback function as a parameter and returns data asynchronously via callback.

### Callback hell

This is when multiple functions are nested to read async data

```javascript
getUser(id, user => {
  console.log(user);
  getRepositories(user.gitHubUserName, repos => {
    console.log(repos);
    getCommits(repos[0], commits => {
      console.log(commits);
    });
  });
});
```

### Named functions

Callback hell can be fixed by taking the anonymous functions in javascript and turning them into named functions. In abouve nested loops there are three anonymous functions. One example of an anonymous function is
`commits => { console.log(commits); }`. We start by naming the innermost
anonymous function and work our way up.
