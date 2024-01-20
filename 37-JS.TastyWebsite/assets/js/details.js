const BASE_URL = "http://localhost:8080";
let card = document.querySelector(".card");

let id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  let response = await axios(`${BASE_URL}/meals/${id}`);
  console.log(response.data);
  card.innerHTML = `
    <img src="${response.data.photo}" alt="">
    <h4>${response.data.name}</h4>
    <p>${response.data.description}</p>
    <h5>${response.data.price}</h5>

    `;
}
getData("products");
