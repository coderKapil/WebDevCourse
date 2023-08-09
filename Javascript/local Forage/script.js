console.log("start");
console.log(localforage);

localforage.config({
  driver: localforage.LOCALSTORAGE,
});

localforage.setItem("name", "kapil");
localforage.getItem("name").then((data) => {
  console.log(data);
});
