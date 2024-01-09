let boxes = document.querySelector(".boxes")
const BASE_URL ="http://localhost:8080"

async function getData(endpoint){
    let response =await axios(`${BASE_URL}/${endpoint}`)
    drawBox(response.data);
}
getData("furniture")


function drawBox(data) {
    console.log(data);
    boxes.innerHTML = "";
    data.forEach((element) => {
      boxes.innerHTML += `
      
      <div class="box">
      <img src="${element.photo}" alt="" />
      <h4>${element.title}</h4>
      <p>${element.description}</p>
    </div>
      
      `;
    });
  }