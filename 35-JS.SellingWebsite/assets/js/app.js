const BASE_URL= "http://localhost:8080"
let cards=document.querySelector(".cards")


async function getData(endpoint) {
    let response = await axios(`${BASE_URL}/${endpoint}`);
    drawCard(response.data);
  }

  getData("products");

function drawCard(data) {
  // console.log(data);
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="card">
 <img src="${element.photo}" alt="">
 <h4>${element.title}</h4>
 <div class="star-heart">
   <i class="fa-solid fa-star"></i>
   <h3>5.0</h3>
   <i class="fa-solid fa-heart"></i>
   <h3>29</h3>
</div>
 <p>${element.description}</p>
 <div class="cart">
            <button>Cart</button>
 <a href="./details.html?id=${element.id}" class="details-btn">View</a>
          </div>
  </div>
        `;
  });
}


