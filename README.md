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
