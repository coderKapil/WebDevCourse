//Shallow copy
// var person = {
//   name: "Kapil",
//   age: 24,
// };

// var p1 = person;
// p1.name = "Rishi";
// console.log(person);

// const p2 = Object.assign({ city: "Delhi" }, person);
// p2.name = "Kapil";
// console.log(p1, person, p2);

//Deep copy

var person = {
  name: "Kapil",
  age: 24,
  city: {
    name: "Delhi",
  },
};

var p2 = Object.assign({}, person);
console.log(p2);
p2.city.name = "mumbai";
console.log(person);

var p3 = JSON.stringify(person);
console.log(p3);
p3 = JSON.parse(p3);
console.log(p3);
p3.city.name = "NY";
console.log(p3, person);
