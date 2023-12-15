let cards = document.querySelector(".cards");
let search = document.querySelector("input");
let moon = document.querySelector(".moon");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let select=document.querySelector("select")
const BASE_URL = `https://restcountries.com/v2`;

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCard(response.data);
}
getData("all");

function drawCard(data) {
  cards.innerHTML = "";
  data.forEach((el) => {
    cards.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3">
    <a href="./details.html">
         <div class="card" style="width: 18rem">
   <img src="${el.flag}" class="card-img-top" alt="..." />
   <div class="card-body">
     <h5 class="card-title">${el.name}</h5>
     <p class="card-text">Population:${el.population}</p>
     <p class="card-text">Region:${el.region}</p>
     <p class="card-text">Capital:${el.capital}</p>
   </div>
 </div>       
    </a>
    </div>

  
      `;
  });
}

search.addEventListener("input", function (event) {
  fetch(`${BASE_URL}/all`)
    .then((response) => response.json())
    .then((data) => {
      let filtered = data.filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase());
      });
      console.log(filtered);
      drawCard(filtered);
    });
});

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
}

moon.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  body.classList.contains("dark-mode")
    ? localStorage.setItem("darkMode", true)
    : localStorage.setItem("darkMode", false);
});


select.addEventListener("change",function(e){
    let region=e.target.value
    if(region !=="all"){
        fetch(`https://restcountries.com/v2/region/${region}`)
        .then((res)=>res.json())
        .then((data)=>drawCard(data))
    }else{
        getData("all")
    }
})