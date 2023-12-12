let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let icon = document.querySelector(".fa-solid");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = allUsers.find(
    (item) =>
      item.email === allInputs[0].value && item.password === allInputs[1].value
  );

  console.log(user);

  if (user) {
    window.location = "home.html";
   
  } else {
    window.alert("username or password is not correct!!");
  }
});

icon.addEventListener("click", function () {
  if (this.className === "fa-solid fa-eye") {
    this.className = "fa-solid fa-eye-slash";
    allInputs[1].type = "text";
  } else {
    this.className = "fa-solid fa-eye";
    allInputs[1].type = "password";
  }
});

