//Apply call Bind in JS

//Problem statement
//call()
//case 1:
// const userDetails = {
//   name: "Kapil Rana",
//   age: "26",
//   Designation: "Software Engineer",

//   printDetails: function () {
//     console.log(this);
//   },
// };

// userDetails.printDetails();

// const userDetails1 = {
//   name: "Rishabh Bisht",
//   age: "26",
//   Designation: "CA",
// };
//function borrowing
// userDetails.printDetails.call(userDetails1);

//case 2:
//call()
// const userDetails = {
//   name: "Kapil Rana",
//   age: "26",
//   Designation: "Software Engineer",
// };

// let printDetails = function () {
//   console.log(this);
// };

// printDetails.call(userDetails);

// const userDetails1 = {
//   name: "Rishabh Bisht",
//   age: "26",
//   Designation: "CA",
// };

// printDetails.call(userDetails1);

//apply()
const userDetails = {
  name: "Kapil Rana",
  age: "26",
  Designation: "Software Engineer",
};

let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};

const userDetails1 = {
  name: "Rishabh Bisht",
  age: "26",
  Designation: "CA",
};

printDetails.apply(userDetails, ["Delhi", "India"]);
printDetails.apply(userDetails1, ["Delhi", "India"]);

//Bind
let newFunc = printDetails.bind(userDetails, "Delhi", "India");
newFunc();
// console.log(newFunc);
