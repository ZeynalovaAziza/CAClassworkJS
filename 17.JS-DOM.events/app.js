let keys=document.querySelectorAll(".key")
let words=document.querySelectorAll(".words")

window.addEventListener("keyup", function (e) {
 keys.forEach((item,i)=>{
    if(
        item.innerText==e.key
    ){
       item.style.backgroundColor="darkcyan"
       item.style.opacity="1"
       item.style.transform=`scale(1)`
    }
 })

});
window.addEventListener("keydown",function(e){
    keys.forEach((item,i)=>{
        if(item.innerText==e.key){
            item.style.backgroundColor="white"
            item.style.opacity="0"
            item.style.transform=`scale(1.3)`
            item.style.transition=`150ms`
        }
    })
})