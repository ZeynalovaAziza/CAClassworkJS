let body = document.querySelector("body");
let text = document.createElement("h4");
let formEl = document.createElement("form");
let email = document.createElement("input");
let password = document.createElement("input");
let link = document.createElement("a");
let login = document.createElement("button");
let account = document.createElement("p");
let userName = document.createElement("input");

email.placeholder = " Email";
password.placeholder = " Password";
formEl.append(text, email, password, link, login, account);
body.append(formEl);
login.innerText = "Login";
login.type = "submit";
password.type = "password";
text.innerText = "Login";
account.innerHTML = `Already have an account? <a href="./signup.html">Signup</a>`;
link.innerHTML = `<a href="">Forgot password?</a>`;

let users = JSON.parse(localStorage.getItem("users")) || [];
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let bool = users.some(
    (item) => item.email === email.value && item.password === password.value
  );

  localStorage.getItem("username");

  if (bool) {
    window.location = "home.html";
  } else {
    window.alert("false");
  }
});
