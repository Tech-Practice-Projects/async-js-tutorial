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
anonymous function and work our way up. Checkout callbackhell_3.js.

## Promises

Promise is an object that holds the eventual result of an asynchronous operation. When an asynchronous operation completes it can either result in a `value` or an `error`. The promise basically promises you that it will give you the result of an async operation. This promise object can be in one of the three states.

- `Pending` state - initially when the promise object is created. At this point it will kick off some async operations.
- `Fulfilled` state - When the results are ready and the async operation is completed successfully the promise changes to fulfilled state. Here we get back a `Value`.
- `Rejected` state - when something goes wrong while fulfilling the async operation. We get back an `Error` here.

### Methods available on Promise class

- `Promise.resolve()` and `Promise.reject()` to call already resolved or rejected promise. See promise_3.js.
- `Promise.all([p1, p2, p3 ..])` takes an array of promises and kicks off multiple promises parellelly. This wil return a new promise that will be resolved when all the promises in the given array are resolved. If any of the promise in the array is rejected then this promise is rejected. See promise_4.js
- `Promise.race([p1, p2, p3 ..])` takes an array of promises and kicks off multiple promises parellelly. But here, as long as one promise in this array that is passed to it is resolved / rejected FIRST this promise with either resolve or reject accordingly. See promise_5.js

## Async Await

Whenever there is a function that uses `await` operator, you need to _decorate_ that function with `async` modifier.
This surrounding _function_ returns a promise of _void_ that means that the promise once fulfilled does not resolve in a value.
It is a requirement in Javascript that whenever you use await it must be in a function that is decorated with `async`. This is because the await needs to be within a `try` `catch` block.
