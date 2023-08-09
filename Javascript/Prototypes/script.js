// const obj = new Object({
//     name:'Kapil'
// })

// const obj1 = new obj();

// const obj2 = {
//     name:'Kapil Rana'
// }

const obj = {
  name: "Kapil Rana",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};

// console.log(obj);

const obj1 = {
  roll: 1,
  name: "Vivek",
  __proto__: obj,
};
// console.log(obj1.getName());
// console.log(obj1.getRoll());

const obj2 = {
  class: "Btech",
  __proto__: obj1,
};

// console.log(obj2.getRoll());
// console.log(obj2.getName());

//Arrays
const array1 = ["Kapil"];
// console.log(array1);

const obj3 = new Object();
console.log(obj3);

const array2 = new Array();
console.log(array2);

Array.prototype.show = function () {
  return this;
};

const cities = ["Delhi"];
console.log(cities.show());

//converting array into object using customised own prototype
Array.prototype.convertIntoObject = function () {
  let newObject = {};
  this.forEach((element) => {
    newObject[element] = element;
  });
  return newObject;
};

console.log(cities.convertIntoObject());

//create ur own prototype
function myPrototype(name, roll) {
  this.name = name;
  this.roll = roll;
}
myPrototype.prototype = obj;
const myProto = new myPrototype("Kapil", "007");
console.log(myProto.getName());
console.log(myProto.getRoll());
