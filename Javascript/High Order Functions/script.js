//High order function
//for each
//filter
//map
//reduce
//sort

const companies = [
  { name: "Google", category: "Product Based", start: "1981", end: "2004" },
  { name: "Amazon", category: "Product Based", start: "1992", end: "2008" },
  { name: "Paytm", category: "Product Based", start: "1999", end: "2007" },
  { name: "Coforge", category: "Service Based", start: "1989", end: "2010" },
  { name: "MindTree", category: "Service Based", start: "1989", end: "2010" },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for each

//Normal for loop
// for (let i = 0; i <= companies.length; i++) {
//   console.log(companies[i]);
// }

//using for each loop concept
//using normal function
// companies.forEach(function (company, index) {
//   console.log(index);
// });

//using arrow function
// companies.forEach((company, index) => console.log(company));

//Filter
//Old method
// for (let i = 0; i <= ages.length; i++) {
//   if (ages[i] >= 20) {
//     console.log(ages[i]);
//   }
// }

//using filter and normal function
// const age = ages.filter(function (age) {
//   if (age >= 20) {
//     return true;
//   }
// });

// console.log(age);

//using filter and arrow function
// const finalAge = ages.filter((age) => age >= 30);
// console.log(finalAge);

//using filter filter out companies those which are service based only

// const sb = companies.filter(function (company) {
//   if (company.category === "Service Based") {
//     return true;
//   }
// });
//here sb represents service based
// console.log(sb);

//using arrow function

// const sb = companies.filter((company) => company.category === "Service Based");
// console.log(sb);

//map functions
// companies.map(function (company) {
//   console.log(company);
// });
//map with arrow function
// companies.map((company, index) => console.log(company, index));

//using string literals

// const dummy = companies.map((company) => {
//   return `${company.name} ${company.category}`;
// });

// console.log(dummy);

//sort function

// let sorted = companies.sort(function (c1, c2) {
//     //increasing order sort
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// let sorted = companies.sort(function (c1, c2) {
//   //decreasing order sort
//   if (c1.start < c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//using arrow function

// let sorted = companies.sort((c1, c2) => (c1.start < c2.start ? 1 : -1));
// console.log(sorted);

// //for ages array in increasing order sort
// let sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

//for ages array in decreasing order sort
// let sortedAges = ages.sort((a, b) => b - a);
// console.log(sortedAges);

//Reduce

// let total = 0;
// for (let i = 0; i < ages.length; i++) {
//   total += ages[i];
// }

// console.log(total);

// const sumAges = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(sumAges);

const sumAges = ages.reduce((total, age) => total + age, 0);
console.log(sumAges);
