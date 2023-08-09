//Local storage
console.log("Start");

localStorage.setItem("name", "coder dost");
localStorage.setItem("age", "11");
localStorage.setItem("class", "Node js");
const value = localStorage.getItem("name");
console.log(value);
// localStorage.clear();
localStorage.removeItem("class");

sessionStorage.setItem("topic", "Mern");
const s = sessionStorage.getItem("topic");
// sessionStorage.clear();
// sessionStorage.removeItem("class");
console.log(s);
