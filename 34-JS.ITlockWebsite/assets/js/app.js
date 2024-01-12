const BASE_URL = "http://localhost:8080";
let cards = document.querySelector(".study-cards");
let search = document.querySelector(".search");
let arr = [];
async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  arr = response.data;
  drawCard(response.data);
}

getData("products");

function drawCard(data) {
  console.log(data);
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="study-card">
 <img src="${element.photo}" alt="">
 <h4>${element.title}</h4>
 <p>${element.description}</p>
 <i class="fa-solid fa-trash" onclick=deleteProduct("${element.id}",this)></i>
  <a href="./details.html?id=${element.id}" class="details-btn">View Details</a>
  </div>
        `;
  });
}

async function deleteProduct(id, btn) {
  try {
    if (window.confirm("Are u sure to delete?")) {
      await axios.delete(`${BASE_URL}/products/${id}`);
      btn.closest(".study-data").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

search.addEventListener("input", function (event) {
  event.preventDefault();
  let filtered = arr.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase());
  });
  drawCard(filtered);
});
