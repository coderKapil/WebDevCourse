//Problem 1
// const sampleData = { upvotes: 13, downvotes: 10 };

// const getVoteCount = (data) => {
//   return data.upvotes - data.downvotes;
// };

// console.log(getVoteCount(sampleData));

//Problem 2
// const earning = 10000;

// const percentageOfAmount = (amount, percentage) => {
//   return (amount * percentage) / 100;
// };
// const fiftyThirtyTwenty = (amount) => {
//   return {
//     Needs: percentageOfAmount(earning, 50),
//     Wants: percentageOfAmount(earning, 30),
//     Savings: percentageOfAmount(earning, 20),
//   };
// };

// console.log(fiftyThirtyTwenty(earning));

//Problem 3
const data1 = {
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
};

const data2 = {
  name: "New Delhi",
  population: "13,929,286",
  continent: "Asia",
};

const cityFacts = (cityData) => {
  return `${cityData.name} has a population ${cityData.population} and is situated in ${cityData.continent}`;
};

console.log(cityFacts(data1));
console.log(cityFacts(data2));
