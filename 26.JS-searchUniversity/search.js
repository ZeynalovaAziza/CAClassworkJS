let search = document.querySelector(".search");
let tbody = document.querySelector("tbody");
let spinner=document.querySelector(".spinner-border")

const BASE_URL = "http://universities.hipolabs.com";

async function getData(endpoint) {
  try{
    spinner.classList.add("show")
    let response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawTable(response.data);
  }catch(error){}
  finally{
    spinner.classList.remove("show")
  }
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
  spinner.classList.add("show")
  fetch(`${BASE_URL}/search?country=Turkey&name=${event.target.value.toLocaleLowerCase()}`)
  .then((response)=>response.json())
    .then((data) => {
      drawTable(data);
      spinner.classList.remove("show")
    })
    .catch();
});

