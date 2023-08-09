//Fetch Api
fetch("http://localhost:8080/app")
  .then((response) => response.json())
  .then((response) => console.log(response));
