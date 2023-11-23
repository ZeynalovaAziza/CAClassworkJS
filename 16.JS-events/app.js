// let input = document.querySelector(".input");
// let btn = document.querySelector(".add");
// let ulElem = document.querySelector("#list");

// btn.addEventListener("click", function () {
//   if (input.value!="") {
//     let liElem = document.createElement("li");
//     let spanElem = document.createElement("span");
//     let deleteBtn = document.createElement("button");
//     spanElem.innerText = input.value;
//     deleteBtn.innerText = "delete";
  
//     liElem.append(spanElem, deleteBtn);
//     ulElem.append(liElem);
  
//     deleteBtn.addEventListener("click",function() {
//       spanElem.parentElement.remove()
//     })
//     input.value=""
//   }else{
//     alert("required")
//   }
// });

let users={
    username:"Aziza",
    email:"zeynalofha@gmail.com",
    password:123456
}
let username=document.querySelector("#name")
let email = document.querySelector("#email");
let password = document.querySelector("#password");
