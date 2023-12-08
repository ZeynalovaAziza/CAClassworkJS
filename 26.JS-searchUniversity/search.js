let search = document.querySelector(".search");
let tbody = document.querySelector("tbody");

const BASE_URL = "http://universities.hipolabs.com";

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawTable(response.data);
}

getData("search?country=Turkey");

function drawTable(data) {
  tbody.innerHTML =""
  data.forEach((element) => {
    tbody.innerHTML += `
    <tr>
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains[0]}</td>
    <td><a href="${element.web_pages[0]}">${element.web_pages[0]}</a></td>
  </tr>
    `;
  });
}

search.addEventListener("input", function (event) {
  fetch(`${BASE_URL}/search?country=Turkey&name=${event.target.value.toLocaleLowerCase()}`)
  .then((response)=>response.json())
    .then((data) => {
      drawTable(data);
    })
    .catch();
});

