let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = " http://localhost:8000";

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

if (id) {
  let userObj = {
    firstName: allInputs[0].value,
    lastName: allInputs[1].value,
    email: allInputs[2].value,
    photo: allInputs[3].value,
  };
  allUsers.push(userObj);
}
localStorage.setItem("allUsers", JSON.stringify(allUsers));
