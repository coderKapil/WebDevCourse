//Problems
// Questions:
// 1.Print Even number upto 60 using for loop
// 2.Given a number n Calculate the factorial of the number
// 3.Write table for 19 using loop
// 4.Write a program that will allow someone to guess a four digit pin exactly 4
// 5.times. If the user guesses the number correctly. It prints “That was
// 6.correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

// Ans 1
// for (let i = 2; i <= 60; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//Ans 2
// let n = 10;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

//Ans 3
// let n = 19;
// for (let i = 1; i <= 10; i++) {
//   console.log(n, "*", i, "= ", n * i);
// }

//Ans 4
const defaultPin = 1111;
const guessMessage = "Please make your guess";
const wrongMessage = "Sorry that was wrong";
const correctMessage = "That was correct";
const maxAttempt = 4;
let currentAttempt = 1;

for (let i = 1; i <= maxAttempt; i++) {
  //Step1 = Take user Input
  const userInput = parseInt(
    prompt(
      `Attempt Remaining: ${maxAttempt - currentAttempt} \n ${guessMessage}`
    )
  );
  //Compare userInput with default input
  //if input is correct then show message that it is correct
  if (userInput == defaultPin) {
    console.log(correctMessage);
    break;
  }
  //if input is not correct then show wrong message & give retry
  else {
    console.log(wrongMessage);
  }
  currentAttempt++;
  //if retry more than 4 then exit from the loop
}
