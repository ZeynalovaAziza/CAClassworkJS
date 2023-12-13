let  container=document.querySelector(".container")
let users=JSON.parse(localStorage.getItem("users"))

function drawFavorite(data){
    data.forEach(element => {
      container.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src=${element.userphoto} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.surname}</p>
          <p class="card-text">${element.email}</p>
          <p class="card-text">${element.date}</p>
        </div>
      </div>`;
    });
}
drawFavorite(users)