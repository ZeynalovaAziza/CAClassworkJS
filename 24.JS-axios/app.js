const BASE_URL = "https://fakestoreapi.com/products";
let container = document.querySelector(".container");
let elec = document.querySelector(".elec");
let jew = document.querySelector(".jew");
let men = document.querySelector(".men");
let women = document.querySelector(".women");
function drawCard(arr) {
  container.innerHTML = "";
  arr.forEach((element) => {
    container.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem">
            <img src="${element.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"> ${element.description}</p>
              <h5> ${element.price}</h5>
             
            </div>
    </div>
   </div>
    `;
  });
}

async function getData(endPoint) {
  const data = await axios(`${BASE_URL}/${endPoint}`);
  console.log(data.data);
  drawCard(data.data);
}
getData("");
elec.addEventListener("click", function () {
  getData("category/electronics");
});
getData("");
jew.addEventListener("click", function () {
  getData("category/jewelery");
});
getData("");
men.addEventListener("click", function () {
  getData("category/men's clothing");
});
getData("");
women.addEventListener("click", function () {
  getData("category/women's clothing");
});
