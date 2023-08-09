//Problem 1
// const concat = (...num) => num.flat(1);

// console.log(concat([1, 2, 3], [4, 5], [6, 7]));

//Problem 2

const coin = [10, 6, 5, 2];
const amountToPay = 69;

//Method 1
// function enoughCoin(coin, amount) {
//   const moneyArray = coin.map((value, i) => {
//     if (i === 0) {
//       return value;
//     } else if (i === 1) {
//       return value * 2;
//     } else if (i === 2) {
//       return value * 5;
//     } else if (i === 3) {
//       return value * 10;
//     }
//   });
//   const totalmoney = moneyArray.reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);
//   console.log("money Array", moneyArray);
//   console.log("totalmoney", totalmoney);

//   if (totalmoney >= amountToPay) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(enoughCoin(coin, amountToPay));

//Method 2 shortcut
// function enoughCoin(coin, amount) {
//   return coin[0] * 1 + coin[1] * 2 + coin[2] * 5 + coin[3] * 10 >= amountToPay;
// }

// console.log(enoughCoin(coin, amountToPay));

//Problem 3
// Factorial of number using reduce method
// const fact = 5;
// function factorial(num) {
//   const value = new Array(num)
//     .fill(1)
//     .map((value, i) => value * i + 1)
//     .reduce((prev, curr) => prev * curr, 1);
//   //   console.log(value);
//   return value;
// }

// console.log(`factorial of ${fact} = `, factorial(fact));

//Problem 4
// Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest

function secondLargest(num) {
  return num.sort((a, b) => b - a)[1];
}

console.log(secondLargest([25, 143, 89, 13, 105]));
