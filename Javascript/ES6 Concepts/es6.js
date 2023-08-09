//ES6 Concepts
//1. let and const

// var age = 18;

// if (age >= 18) {
//   //   var driving = true;
//   let driving = true;
// }

// console.log(driving);

// function register() {
//   var username = "rakesh";
//   var password = "secret";
// }
// console.log(username);

// var product = "Laptop";
// var product = "Mobile";
// let product = "laptop";
// let product = "mobile";
// console.log(product); --> Identifier 'product' has already been declared

// const product = "Laptop";
// product = "Mobile";==> errot : Assignment to constant variable

// console.log(age);
// var age = 20
// let age = 20;--> error :Cannot access 'age' before initialization

// const age = {
//   years: "19",
// };
// age.years = 20;

// console.log(age);

//Arrow functions

//normal function
// function greet() {
//   console.log("Good Morning");
// }

//arrow function
// const greet = () => {
//   console.log("Good Morning");
// };
// greet();

// const addition = (a, b) => {
//   console.log(a + b);
// };
//we can write arrow function in one line also
// const addition = (a) => console.log(a + a);

// addition(5);

//with normal function this keyword have their own context
// const shop = {
//   // purschase: function () {
//   //   console.log(this);
//   // },
// };

//this keyword with arrow function
// const shop = {
//   purchase: () => {
//     console.log(this);
//   },
// };
// shop.purchase();

// const myButton = document.querySelector("#myButton");

// const shop = {
//   price: 100,
//   buy: function () {
//     myButton.addEventListener("click", () => {
//       // console.log(this);
//       console.log("I spent", this.price);
//     });
//   },
// };

// shop.buy();

//Template literals

// const firstName = "Kapil";
// const lastName = "Rana";
//without template literals
// console.log(firstName + " " + lastName);
//with template literals
// console.log(`${firstName} ${lastName}`);

//Enhanced objects literals
//computed property keys
// const keyName = "name";
// const product = {
//   [keyName]: "Mobile",
//   price: 100,
// };

// console.log(product);

//Method defination shothand
// const product = {
//   buy() {
//     console.log("Bought");
//   },
// };

// product.buy();

//Property shortHand

// const accessToken = "aafdafjfhi";
// const refreshToken = "mfdjn";

// const user = {
//   accessToken,
//   refreshToken,
// };

// console.log(user);

//Destructuring

// const user = {
//   name: "John Doe",
//   age: 30,
// };

//old way of accessing properties of an object

// console.log(user.name);
// console.log(user.age);

//New way of accessing properties of an object
// const { name: fullName, age } = user;
// console.log(name);
// console.log(fullName);
// console.log(age);

//Destructuring with arrays
// const data = ["Rakesh", 30, "Engineer"];
//old way of accessing array data
// console.log(data[0]);
//new way of accessing array data
// const [name, age, profeesion] = data;
// console.log(name);
// console.log(age);
// console.log(profeesion);

//Default Parameters

// const register = (name, password, image = "test.png") => {
//   //old method of resolving undefined
//   // const img = image || "test.png";
//   console.log(name, password, image);
// };

// register("Rakesh", "secret", "test.png");
// register("Kapil", "secret");

//Spread operator
//with arrays
// const languages = ["c", "c++", "javascript"];
// const newLanguages = ["typescript", ...languages];
// console.log(newLanguages);

//with objects
// const settings = {
//   volume: 10,
//   brightness: 80,
// };

// const newSettings = { ...settings, volume: 20 };
// console.log(newSettings);

//Rest operator

// const addItems = (...items) => {
//   // console.log(a + b + c);
//   console.log(items);
// };

// addItems(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//for of loop
//With arrays

// const numbers = [1, 2, 3, 4, 5];

// for (let num of numbers) {
//   console.log(num);
// }

//With Strings

// const language = "Javascript";

// for (let char of language) {
//   console.log(char);
// }

//With Objects

// const person = {
//   name: "Rakesh",
//   city: "Moscow",
//   brand: "Apple",
// };

// for (let entries of Object.entries(person)) {
//   console.log(entries);
// }

//Promises

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Login....");
//       // resolve();
//       reject();
//     }, 0);
//   });
// }

// login()
//   .then(() => {
//     console.log("Redirecting......");
//   })
//   .catch((err) => {
//     console.log("Error....");
//   });

//find method in Array

// const users = [{ name: "Rakesh" }, { name: "John" }];

// const user = users.find((user) => {
//   // return user.name === "Rakesh";
//   return user.name === "John";
// });

// console.log(user);

//findIndex method
// const users = [{ name: "Rakesh" }, { name: "John" }];

// const user = users.findIndex((user) => {
//   // return user.name === "John";
//   // return user.name === "Rakesh";
//   return user.name === "Ram";
// });

// console.log(user);

//Set

// const uniqueNumbers = new Set();

// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(6);
// uniqueNumbers.add(3);

// console.log(uniqueNumbers);
// console.log(uniqueNumbers.size);
// console.log(uniqueNumbers.has(7));

// const numbers = [4, 5, 6, 7, 4, 6];
// const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers);

//Map (HashTables)

// const urls = new Map();
// urls.set("development", "dev.example.com");
// urls.set("production", "prod.example.com");
// // console.log(urls);
// console.log(urls.get("development"));
// console.log(urls.size);

//for of loop over map

// for (const url of urls) {
//   console.log(url);
// }

//destructuring
// for (const [key, value] of urls) {
//   console.log(key, value);
// }

// const urlObj = {
//   development: "dev.example.com",
//   production: "prod.example.com",
// };
// console.log(urlObj.development);
//Object are having order problem

//Classes
//Old way of object creation
// function person(name) {
//   this.name = name;
// }

// const rakesh = new person("Rakesh");
// rakesh.name = "Coders Gyan";
// console.log(rakesh);
// const john = new person("John");
// console.log(john);

//ES6 way of object creation

// class person {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   //method
//   greet() {
//     console.log("Good Morning");
//   }
// }

// class greatPerson extends person {
//   attitude = "Good";
//   greet() {
//     console.log("Good evening");
//   }
// }

// const rakesh = new person("Rakesh");
// console.log(rakesh);
// const john = new person("John");
// john.name = "joy";
// console.log(john.greet());

//Inheritance
// const rakesh = new greatPerson("Rakesh");
// console.log(rakesh.greet());

//ES6 Modules
import { lib as myLibName } from "./lib.js";
import mylogin from "./lib.js";
mylogin();
console.log(myLibName);
// console.log(lib);
// login();
// console.log(lib);
// console.log(fileName);
