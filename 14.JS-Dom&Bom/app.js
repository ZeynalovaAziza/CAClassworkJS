// task1
// const btn = document.querySelector(".add");
// const prDiv = btn.parentElement

// btn.addEventListener("click",function(){
//     prDiv.style.backgroundColor = "teal"
//     prDiv.style.width = "200px"
//     prDiv.style.height = "200px"
//     prDiv.style.position="relative"

//     btn.style.position="absolute"
//     btn.style.right="30px"
//     btn.style.bottom="20px"
// })

// task2
// let btn = document.querySelector(".btn");
// console.log(btn);
// btn.addEventListener("click",function(){
//   document.body.classList.toggle("bg-red");
// });

// task3
let addImg=document.querySelector(".image");
let img=document.createElement("img");
img.setAttribute("src","https://cdn.sanity.io/images/kts928pd/production/693fe23ae42aec4a0f10285aa41535cf0006ca2a-700x394.png")
addImg.append(img)








// task4
let array=["ganja","baku","yevlakh","goranboy","shamkir"]
let ulElem=document.querySelector("ul")
array.forEach((item, i) => {
  let liElem = document.createElement("li");
  liElem.innerText = item;
  liElem.style.listStyle="none"
  ulElem.append(liElem)
  liElem.addEventListener("click",function(){
  this.remove()
  })
});
