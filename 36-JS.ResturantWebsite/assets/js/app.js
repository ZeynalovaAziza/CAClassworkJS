const BASE_URL= "http://localhost:8080"
let foods=document.querySelector(".foods")

async function getData(endpoint) {
    let response = await axios(`${BASE_URL}/${endpoint}`);
    drawFood(response.data);
  }

  getData("menu");

  
  function drawFood(data) {
    console.log(data);
    foods.innerHTML = "";
    data.forEach((element) => {
      foods.innerHTML += `
      <h4>${element.name}</h4>
      <h5>${element.description}</h5>
      <p>${element.price}</p>
          `;
    });
  }
  