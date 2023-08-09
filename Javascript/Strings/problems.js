// Questions:
// 1.Try to replace “dog” with “cat” from   Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”
// 2.Write a function to convert string to lowercase;
// 3.Check “Fox” is includes .  Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”
// 4.Check String end with “?”  . Sample String →  “ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”
// 5.Extract Amount from string → “ I bought car at ₹ 550000 “

//Solutions
//Ans 1
// const sample =
//   " he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
// console.log(sample.replaceAll("dog", "cat"));

//Ans 2

// const convertStringToLoweCase = (str) => {
//   return str.toLowerCase();
// };

// console.log(convertStringToLoweCase("KAPIL BHAIYA"));

//Ans 3
// const sampleString =
//   "“ he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?”";

// console.log(sampleString.includes("Fox"));

//Ans 4
// const sampleString =
//   " he quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// console.log(sampleString.endsWith("?"));

//Ans 5
const str = "I bought car at ₹ 550000 ";

// console.log(str.substring(18, 24));
const result = str.split(" ")[5];
console.log(result);
