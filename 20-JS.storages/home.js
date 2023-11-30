let h1 = document.createElement("h1");
let helloUser = document.querySelector(".hello-user")

let user = localStorage.getItem("username");

console.log(user);
h1.innerText = `Welcome, ${user}`;
helloUser.append(h1);
