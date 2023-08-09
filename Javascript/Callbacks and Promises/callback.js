//Callbacks
// Scenario

/*
1. Register
2.Send-welcome email
3.Login
4.Got user data
5. Display user data
*/

function register(callback) {
  setTimeout(() => {
    console.log("Register end");
    callback();
  }, 1000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("Email end");
    callback();
  }, 5000);
}

function login(callback) {
  setTimeout(() => {
    console.log("Login end");
    callback();
  }, 3000);
}

function gotUserData(callback) {
  setTimeout(() => {
    console.log("Got user data");
    callback();
  }, 4000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("Display user data");
  }, 1000);
}

//callback Hell
// register(function () {
//   sendEmail(function () {
//     login(function () {
//       gotUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

console.log("Other application work !!");
