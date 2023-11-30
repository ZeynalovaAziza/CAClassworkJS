let basketDiv=document.querySelector(".basketDiv")
let basketEl=JSON.parse(localStorage.getItem("basket"))
drawBasket(basketEl)
function drawBasket(data){
    data.forEach(product => {
        basketDiv.innerHTML+=`<div class="card" style="width: 18rem;">
        <img src=${element.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <button class="btn btn-primary" onclick=addToBasket("${element._id}")>ADD TO BASKET</button>
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>`;
    });
}