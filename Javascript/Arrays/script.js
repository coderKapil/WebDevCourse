//Basics of Arrays
// const even = new Array();
// const evenNumber = [2,4,6,8,10];
// const evenObjects = {
//     0:2,
//     1:4,
//     2:6,
//     3:8,
//     4:10
// }

// const two = evenObjects[0]
// const twoArray = evenNumber[0]

//CRUD Operations in Array

//Create
const days = [];
//Push adds element from ending
// days.push("Sunday");

//unshift adds elemen from start
days.unshift(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

// console.log({ days });
//Read operation

// const sunday = days[0];
// const friday = days[4];
// console.log(friday);

//Update

// days[0] = "S";
// days[6] = "S";
// console.log(days);

//delete

// days.pop();
// days.shift();
//splice removes desired element --> It will modify our original array
// days.splice(1, 3);
//slice will not modify our original array
// const slicedDays = days.slice(1, 6);

//filter => we can remove elements using conditions

// const filteredDays = days.filter((value, index, array) => {
//   return value.length > 6;
// });
// console.log({ days, filteredDays });

//Loops in Arrays
//Simple Loop
// for (let i = 0; i <= days.length - 1; i++) {
//   console.log(`Today is ${days[i]}`);
// }

//For of loop

// for (let day of days) {
//   console.log(`Today is ${day}`);
// }

//for each loop

// days.forEach((day, index) => {
//   console.log(`Today is ${day},${index}`);
// });

//Map loop

// const newDays = days.map((day, index) => {
//   console.log(`Today is ${day},${index}`);
//   return day[0];
// });

// console.log(newDays);

//Array Methods

//Find
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((value, i, obj) => {
//   return value > 8;
// });

// console.log(found);

//indexOf()
// const beast = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beast.indexOf("bison"));
// console.log(beast.indexOf("bison", 2));
// console.log(beast.indexOf("horse"));

//findIndex()
// const array1 = [5, 1, 1, 35, 44];
// const index = array1.findIndex((value) => {
//   if (value % 2 == 0) {
//     return value;
//   }
// });

// console.log(index); //o/p-> 4 bcs it will return only single value

//concat()
// const array1 = ["a", "b", "c", "d"];
// const array2 = ["e", "f", "g"];
// const array3 = array1.concat(array2);
// console.log(array3);

//at()
// const arr = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(`Using index of ${index} the item returned is ${arr.at(index)}`);

//Array Checker Method

//every()
// const arr = [1, 30, 39, 20, 10, 13];
// console.log(
//   arr.every((value) => {
//     return value < 40;
//   })
// );

//Array.isArray()

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray("[]"));

//some()
// const arr = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(arr.some(even));

//includes()
// const arr = [1, 2, 3, 4];
// console.log(arr.includes(2));

//reduce
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((prevValue, currValue) => {
//   return prevValue + currValue;
// }, 0);

// console.log(sum);
//Find 4! with the help of reduce method
// const num = [1, 2, 3, 4];
// const fact = num.reduce((prevValue, currValue) => {
//   return prevValue * currValue;
// }, 1);

// console.log(fact);

//sort()

// const months = ["March", "Jan", "Feb", "Dec"];
// const array1 = [1, 30, 4, 21, 100000];

// console.log(months.sort());
//for ascending order
// console.log(array1.sort((a, b) => a - b));
// console.log(array1.sort((a, b) => b - a));

//join()

// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join("-"));
// console.log(elements.join(""));
// console.log(elements.join(" "));

//reverse()

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.reverse());

//flat
// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(3));
// Expected output: Array [0, 1, 2, 3, 4]
