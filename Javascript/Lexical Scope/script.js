//Scope of variable
var age = 12;

function speak() {
  var age = 45;
  console.log(age);
}

if (age > 0) {
  console.log(age);
}
speak();
console.log(age);
