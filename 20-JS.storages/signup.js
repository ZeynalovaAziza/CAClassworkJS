let body = document.querySelector("body");
let text = document.createElement("h4");
let formEl = document.createElement("form");
let userName = document.createElement("input");
let email = document.createElement("input");
let password = document.createElement("input");
let signup = document.createElement("button");
let account = document.createElement("p");

userName.placeholder = "Enter your username";
email.placeholder = "Enter your email";
password.placeholder = "Enter your password";
formEl.append(text, userName, email, password, signup, account);
body.append(formEl);
signup.innerText = "Signup";
signup.type = "submit";
password.type = "password";
text.innerText = "Signup";
email.type="email"
account.innerHTML = `Already have an account? <a href="./login.html">Login</a>`;


let users =JSON.parse(localStorage.getItem("users")) || [];
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
if(userName.value!="" && email.value!="" && password.value!=""){
    let signupObj = {
        userName: userName.value,
        email: email.value,
        password: password.value,
      };
      users.push(signupObj);
      localStorage.setItem("users", JSON.stringify(users));
      window.location="login.html"
      
    localStorage.setItem("username", userName.value);

}else{
    window.alert("false")
}
});

