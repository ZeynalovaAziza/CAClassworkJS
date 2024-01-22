const BASE_URL = "http://localhost:8080";
let cards = document.querySelector(".menu-cards");

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  drawCard(response.data);
}

getData("meals");


function drawCard(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="menu-card">
                    <img src="${element.photo}" alt="">
                    <div class="menu-text">
                        <h3>${element.name}</h3>
                        <p>${element.description}</p>
                    </div>
                    <h4>${element.price}</h4>
                    <a href="./details.html?id=${element.id}">View</a>
                </div>
    `;
  });
}
