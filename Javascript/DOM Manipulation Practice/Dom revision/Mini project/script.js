const button = document.querySelector("#btn");
const bulb = document.querySelector(".bulb");

button.addEventListener("click", function () {
  console.log(bulb.src);
  if (bulb.src.match("off")) {
    bulb.src = "./bulb-on.gif";
    button.innerHTML = "Turn OFF";
  } else {
    bulb.src = "./bulb-off.gif";
    button.innerHTML = "Turn ON";
  }
});
