//Spread and Rest operators

//Spread operators unpacks element of an array
//Rest operator packs the element of an array

//1 Clone

// const num = [1, 2, 3, 4, 5];

// const num1 = [...num];

// console.log(num1);

//2 Merge two arrays

// const oldNum = [1, 2, 3, 4];
// const newNumber = [5, 6, 7, 8];

// console.log([...oldNum, ...newNumber]);

//Composed form of merged arrays

// const oldNum = [1, 2, 3, 4];
// const newNumber = [5, 6, 7, 8];

// console.log([100, ...oldNum, ...newNumber, 200]);

//3. Strings

// const channel = "Codersgyan";
// console.log([...channel]);

//4. Objects clone

// const order = {
//   id: 1,
//   date: "29/08/2023",
//   customerName: "Rakesh",
// };

// const newOrder = {
//   ...order,
// };

// console.log(newOrder);

//5. Merge two objects

// const users = {
//   city: "Mumbai",
//   name: "Rakesh",
// };

// const street = {
//   street: "mainStreet",
// };

// const newUser = {
//   ...users,
//   ...street,
// };

// console.log(newUser);

//Rest operator

// function sum(...numbers) {
//   console.log(numbers);
//   let result = 0;
//   for (let num of numbers) {
//     result += num;
//   }
//   return result;
// }
// const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sum(...numb));

// function sum(num1, num2, ...numbers) {
//   console.log(numbers);
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

//Practical application

//1. const numbersFromBackend = [2, 3, 4, 5, 7, 8, 10];
// console.log(Math.max(...numbersFromBackend));

//2.Destructuring
const user = {
  name: "Rakesh",
  city: "Delhi",
  street: "main street",
};

const { name, ...address } = user;
console.log(name, address);
