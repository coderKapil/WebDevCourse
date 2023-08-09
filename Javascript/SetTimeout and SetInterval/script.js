//SetTimeOut
setTimeout(function () {
  console.log("Hello");
}, 2000);

console.log("hi");

//setInterval
let number = 0;
var id = setInterval(function () {
  number++;
  console.log(number);
  clearInterval(id);
}, 3000);
