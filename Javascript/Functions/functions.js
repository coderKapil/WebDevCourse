// function calculateArea(heightValue = 1, widthValue = 1) {
//   console.log("height", heightValue, "width", widthValue);
//   const height = heightValue;
//   const width = widthValue;
//   const area = height * width;
//   //   console.log(area);
//   return area;
// }

// const area1 = calculateArea(12, 3);
// console.log(area1);
// const area2 = calculateArea(800, 100);
// console.log(area2);
//if we dont pass any parameter in function call the it will take the default value written after "="
// const area1 = calculateArea();

//Anonymous function
// const login = function (username, password) {
//   console.log("username", username);
// };

// login("kapil");

//callback function
// In callback function, function is used as parameter of other function

// function printMessage(message, callback) {
//   console.log(message);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// printMessage("Hello", sayGoodbye);

// using anonymous function
// printMessage("anonymous", function () {
//   console.log("This is from anonymous");
// });

//IIFE EXAMPLE
//Named IIFE Example
// (function callingAuto() {
//   console.log("This is Automatic");
// })();

//Anonymous IIFE Example
// (function () {
//   console.log("say Good Bye!!");
// })();

//Arrow Function
const calculateArea = (height, width) => {
  return height * width;
};

const calculateArea1 = (height, width) => height * width;

const area1 = calculateArea1(20, 30);
console.log(area1);
const area = calculateArea(55, 55);
console.log(area);
