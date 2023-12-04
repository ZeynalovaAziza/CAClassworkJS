const productsDiv = document.querySelector(".products-div");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const BASE_URL = ` https://api.escuelajs.co/api/v1`;

function fetchProducts() {
  fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        productsDiv.innerHTML += `
            <div class="product">
            <div class="">
            <img src="${element.images[0]}" alt="">
            </div>
            <div class="product-heading">
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <span>${element.price}</span>
                <div><button class="deleteBtn " >DELETE</button></div>
            </div>
        </div>`;
      });
    });
}
fetchProducts();

let obj = {
  title: allInputs[0].value,
  description: allInputs[1].value,
  images: allInputs[2].value,
  price: allInputs[3].value,
};
