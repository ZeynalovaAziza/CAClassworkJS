let fullName="Aziza Zeynalova"
let age=44
let skills=["JS","CSS","HTML"]

localStorage.setItem("fullName",fullName);
localStorage.setItem("age",44);
localStorage.setItem("skills",JSON.stringify(skills));

console.log(JSON.parse(localStorage.getItem("skills")));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("fullName"));