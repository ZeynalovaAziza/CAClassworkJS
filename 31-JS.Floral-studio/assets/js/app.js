$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

let boxes = document.querySelector(".boxes");
let icon = document.querySelector(".fa-heart");
const BASE_URL = "http://localhost:8080";

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  drawBox(response.data);
}

getData("products");

const favoritedProducts = getFavoritesFromLocaleStorage();
function drawBox(data) {
  console.log(data);
  boxes.innerHTML = "";
  data.forEach((element) => {
    boxes.innerHTML += `
    
    <div class="box">
    <img src="${element.productphoto}" alt="" />
    <h4>${element.title}</h4>
    <p>${element.price}</p>
  </div>
    
    `;
  });
}
// const favoritObj = favoritedProducts.find((item) => item.id === element.id);
let favorites = getFavoritesFromLocaleStorage();
icon.addEventListener("click", function () {
  console.log("salam");
  icon.className === "fa-regular fa-heart"
    ? (this.className = "fa-solid fa-heart")
    : (this.className = "fa-regular fa-heart");

  setProductToLocaleStorage(favorites);
});
function getFavoritesFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}

function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}
