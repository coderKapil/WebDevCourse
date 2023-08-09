//1.getElementById
// const heading = document.getElementById("heading");
// console.log(heading);

//2.get element by Tag name
// const heading = document.getElementsByTagName("h1");

//3.get element by className
// const heading = document.getElementsByClassName("head");

//4.querySelector:returns a single value only
// const heading = document.querySelector("#heading");
// const heading = document.querySelector(".head");
// const heading = document.querySelector("h1");

//5. querySelectorAll
// const heading = document.querySelectorAll("h1");
// console.log(heading);

//Traverse DOM
//Parent node
// const heading = document.querySelector("#heading");
// const parent = heading.parentNode;
// console.log(parent);

//childNode
// const parent = document.querySelector(".parent");
// console.log(parent.childNodes);

//nextElementSibling
// const heading = document.querySelector("#heading");
// console.log(heading.nextElementSibling);

//previousElementSibling
// const heading = document.querySelector("#heading");
// console.log(heading.previousElementSibling);

//Manipulation

// const heading = document.querySelector("#heading");
// heading.innerHTML = "Web dev is awesome";
// heading.style.color = "red";
// heading.style.fontSize = "50px";
// heading.classList.add("title");
// heading.classList.remove("title");

//Create Element
// const heading = document.createElement("h1");
// heading.innerHTML = "Javascript is awesome!!";
// heading.classList.add("title");
// const parent = document.querySelector(".parent");
// parent.appendChild(heading);
// const subheading = document.createElement("h3");
// subheading.innerHTML = "Web dev is awesome!!";
// heading.insertAdjacentElement("beforebegin", subheading);
// heading.insertAdjacentElement("afterbegin", subheading);
// heading.insertAdjacentElement("beforeend", subheading);
// heading.insertAdjacentElement("afterend", subheading);
// console.log(heading);

//Dom Events

const heading = document.querySelector("#heading");
const button = document.querySelector("#btn");

button.addEventListener("click", function (event) {
  heading.style.color = "purple";
  heading.style.fontSize = "40px";
  console.log("button clicked", event);
});
