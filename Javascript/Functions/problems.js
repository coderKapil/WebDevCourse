// Question 1
// Print 15 , 16 , 17 tables using function
// Function name should be generateTable()

// const generateTable = (tableValue) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${tableValue} X ${i} = ${tableValue * i}`);
//   }
// };
// const tableNumber = parseInt(prompt("Enter table number"));
// generateTable(tableNumber);

// Question 2
// Create a function that calculate area of circle
// Function name should be calcAreaOfCicle()
// create another function calcSquare()
// Pass calcAreaOfCicle function as callback of calcSqaure
// like - calcSqaure(calcAreaOfCircle)
// store value of calculated value in result
//  like - result = calcSqaure(calcAreaOfCircle)
// then print result;

const calcAreaOfCircle = (radius) => {
  return Math.PI * radius * radius;
};

console.log("Area of circle", calcAreaOfCircle(8));

const calcSquare = (callback, r) => {
  const areaOfCircle = callback(r);
  return areaOfCircle * areaOfCircle;
};

const result = calcSquare(calcAreaOfCircle, 8);
console.log("Result", result);
