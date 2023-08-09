//Promises
console.log("start");
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
    // reject("Failed");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 300);
});

// p1.then((data) => {
//   console.log("then", data);
// }).catch((err) => {
//   console.log(err);
// });

//Promise chaining
p1.then((data) => {
  console.log("then1", data);
  return p2;
})
  //   .catch((err) => console.log("catch", err))
  .then((data) => {
    console.log("then2", data);
  })
  .catch((err) => {
    console.log("err", err);
  })
  .finally(() => {
    console.log("Completed p1 and p2");
  });

Promise.all([p1, p2]).then((data) => {
  console.log(data);
});

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const post = fetch("https://jsonplaceholder.typicode.com/posts");
const users = fetch("https://jsonplaceholder.typicode.com/users");

Promise.all([post, users])
  .then(([postResponse, usersResponse]) => {
    return Promise.all([postResponse.json(), usersResponse.json()]);
  })
  .then((data) => console.log(data));
//
Promise.any([p1, p2]).then((data) => {
  console.log("any", data);
});

//shortcut for resolve and reject
const p3 = Promise.resolve("3");
const p4 = Promise.reject("4");

p3.then((data) => console.log("then", data)).catch((err) =>
  console.log("catch", err)
);
p4.then((data) => console.log("then", data)).catch((err) =>
  console.log("catch", err)
);

console.log("End");
