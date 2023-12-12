let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let bool = allUsers.some(
    (item) =>
      item.email=== allInputs[1].value || item.password === allInputs[2].value
  );

  console.log(bool);
  if (!bool) {
    let userObj = {
      userName: allInputs[0].value,
      email: allInputs[1].value,
      password: allInputs[2].value,
    };

    allUsers.push(userObj);
    //   console.log(allUsers);

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    window.location = "login.html";
  } else {
    window.alert("username or email already used!");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
});
