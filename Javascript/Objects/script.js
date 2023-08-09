//Objects
//Two methods for creating Objects

//Method 1
// const student = {}

//Method 2
// const student1 = new Object();

// const student = {
//   firstNme: "Kapil",
//   lastName: "Rana",
//   rollno: 27,
//   class: 12,
// };

// console.log(student);

//how to access object
//first way

// const fullName = student.firstNme + " " + student.lastName;
// console.log(fullName);

// const roll = student.rollno;
// console.log(roll);

//Second way
// const class1 = student["class"];
// console.log(class1);

//how to create and update values in objects
//create
// student.weight = "50kg";
// //update
// student["rollno"] = 50;

// console.log(student);

//u can also add a object inside a obj
// const addharCardData = {
//   firstName: "Anshu",
//   lastName: "Raj",
//   dob: "01-01-2000",
//   adharNo: 479382749328749,
//   address: { village: "xyz", district: "ranchi", state: "jharkhand" },
//   normalArray: ["45", "95"],
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

//how to access obj inside an object
//first way of accesing
// const village = addharCardData.address.village;
//second way of accesing
// const village = addharCardData["address"]["village"];
// console.log(village);

// console.log(addharCardData.getFullName());

//Constructor function
// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;

//   this.getFullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const person1 = new Person("John", "Doe", 55);
// console.log(person1);
// console.log(person1.getFullName());

//How to duplicate object
// const obj1 = { title: "obj1" };
// const obj2 = obj1;

// obj2.title = "obj2";
//we are creating deep clone with the help of spread operator to avoid refernece
// const obj2 = { ...obj1 };
// obj2.title = "obj2";
// console.log(obj1);
// console.log(obj2);

//How to loop over Objects

const student = {
  name: "Kapil",
  rollno: 1,
  class: "12",
};

// this will give key of object
// for (let key in student) {
//   console.log(key);
// }
// console.log(Object.entries(student));
// for getting key and value same time
// for (let [key, value] of Object.entries(student)) {
//   console.log("key", key);
//   console.log("value", value);
// }

//Object Methpds
// Covert Map data type to object
// const entries = new Map([
//   ["foo", "bar"],
//   ["baz", 42],
// ]);

// const obj = Object.fromEntries(entries);
// console.log(obj);

// Covert Object data type to Map

// let map = Object.entries(student);
// console.log(map);

// convert object key into array
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

// console.log(Object.keys(object1));

// convert object value into array
// console.log(Object.values(object1));

//// check key exist or not
object1.b = 42;
console.log(object1.hasOwnProperty("d"));
