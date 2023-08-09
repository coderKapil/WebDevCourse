//Operators
// let a = 2;
// let b = 4;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// //raise to the power **
// console.log("a ** b = ", a ** b);
// console.log("a++ = ", a++);
// console.log(a);
// console.log("b++ = ", b++);
// console.log(b);
// console.log("++a = ", ++a);
// console.log("--b = ", --b);

//Assignment Operators
// let a = 2;
// let b = 3;

// console.log("a = ", (a += b));
// console.log("a = ", (a -= b));
// console.log("a = ", (a *= b));
// console.log("a = ", (a /= b));

// Comparison Operators

// let a = 5;
// let b = 8;
// let c = 10;

// console.log("a == b ", a == b);
// console.log("a == b ", a === b);
// console.log("a != b ", a != b);
// console.log("a != b ", a !== b);
// console.log("a < b ", a < b);
// console.log("a > b ", a > b);
// console.log("a <= b ", a <= b);
// console.log("a >= b ", a >= b);

//Logical Operator
// let d = 5;
// let e = 9;
// let f = 6;

// console.log(d < e && e > f);
// console.log(d < e || e > f);
// console.log(!(d < e));

//if Example

// const score = 90;
// if (score > 90) {
//   console.log("You are topper");
// } else {
//   console.log("You are average");
// }

// else if Example

// const score = 50;
// if( score > 90 ){
// console.log("You are topper");
// }
// else if (score > 45) {
// console.log("You are average student");
// }
// else{
// console.log("You are not passed");
// }

// Switch Statements
// A switch statement in JavaScript is a conditional statement that tests an expression against multiple cases and executes the code associated with the first matching case. If no cases match, a default case can be specified to execute. The switch statement provides a cleaner syntax and improved readability compared to a series of if-else statements.

// switch (expression) {

//     case value1:
//       //Statements executed when the
//       //result of expression matches value1
//       break;

//     case value2:
//       //Statements executed when the
//       //result of expression matches value2
//       break;

//     case valueN:
//       //Statements executed when the
//       //result of expression matches valueN
//       break;

//     default:
//       //Statements executed when none of
//       //the values match the value of the expression
//       break;
//   }

// switch Example  1

// const num1 = 5;
// const num2 = 8;
// const operation = "+";
// let result;

// switch (operation) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     result = "Invalid operator";
//     break;
// }

// example 2

// alternative of else if statements
// const score = 55;
// switch (true) {
//   case score > 90:
//     console.log("You are topper");
//     break;
//   case score > 80:
//     console.log("Well Done, But you are not topper");
//     break;
//   case score > 45:
//     console.log("You are average student");
//     break;
//   default:
//     console.log("You are not passed");
//     break;
// }

// Shortcut of if Else  - Ternary Operator

// condition ? exprIfTrue : exprIfFalse

//if else Example

// const score = 90;
// if (score > 90) {
//   console.log("You are topper");
// } else {
//   console.log("you are not topper");
// }

// lets use ternary operator here

// score > 90 ? console.log("You are topper") : console.log("you are not topper");

// output of both cases will be equal
// which one we need to use
// if else provides better readability
// so don't use ternary every where.

//Problems

// Questions | Solve them
// 1.Write a code to check person is adult or not
// 2.Write a code to check number is even or odd
// 3.Using Switch Statement Check number is divisible by 5 and 15

//Ans 1

// const age = 17;

// if (age >= 18) {
//   console.log("Person is an adult");
// } else {
//   console.log("He is not an adult");
// }

//Ans 2
// let num = 30;
// if (num % 2 == 0) {
//   console.log("It is a even number");
// } else {
//   console.log("Not a even number");
// }

//Ans 3
const num = 10;

switch (true) {
  case num % 5 == 0:
    console.log("Divisible by 5");
    break;
  case num % 5 == 0 && num % 15 == 0:
    console.log("It is divisible by 5 and 15");
    break;
  default:
    console.log("Not divisible");
}
