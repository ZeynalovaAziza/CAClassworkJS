// task1
// let count = 1;
// let interval = setInterval(() => {
//     console.log(count++);
// }, 1000);
// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);

// task2
// let btn=document.querySelector(".change")
// let text=document.querySelector(".text")
// btn.addEventListener("click",function() {
//    text.innerHTML="I am not Developer"
// })

// task3
// let parag=document.querySelectorAll(".test")
// parag.forEach((item)=>{
// console.log(item.innerText);
// })

// task4
// let str="developer"
// let index=1
// let interval=setInterval(()=>{
//     if(index<=str.length){
//         str=str.slice(0,index).toLocaleUpperCase()+str.slice(index)
//         index++
//         console.log(str);
//     }
//     else{setTimeout(()=>{
//         clearInterval(interval)
//     })} 
// },1000)

// task5
let colors=["blue",""]
let btn=document.querySelector(".color")
let body=document.querySelector("blue")

btn.addEventListener("click",function(){
document.body.style.backgroundColor=("red")
})

