//Promises
/*
1. Register
2.Send-welcome email
3.Login
4.Got user data
5. Display user data
*/

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("Error while registering......");
      console.log("Register end");
      resolve("Success");
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("Email sending failed");
      console.log("Email end");
      resolve();
      // resolve();
    }, 5000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 3000);
  });
}

function gotUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got user data");
      resolve();
    }, 4000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display user data");
      resolve();
    }, 1000);
  });
}

// register()
//   .then(sendEmail)
//   .then(login)
//   .then(gotUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

//Async await

async function authentication() {
  try {
    const message = await register();
    await sendEmail();
    await login();
    await gotUserData();
    await displayUserData();
    console.log(message);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}

authentication()
  .then(() => {
    console.log("All set!!");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Other application work !!");
