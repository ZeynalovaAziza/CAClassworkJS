let boxes = document.querySelector(".boxes")
let search=document.querySelector(".search")
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
      <button class="deleteBtn"onclick=deleteFurniture("${element.id}",this)>DELETE</button>
    </div>
      
      `;
    });
  }

  function deleteCustomer(id, btn) {
    if (confirm("Are u sure to delete?")) {
      fetch(`${BASE_URL}/furniture/${id}`, {
        method: "DELETE",
      });
  
      btn.closest(".box").remove();
    }
  }

  search.addEventListener("input", function (event) {
    fetch(`${BASE_URL}/furniture${event.target.value.toLocaleLowerCase()}`)
    .then((response)=>response.json())
      .then((data) => {
        drawBox(data);
      })

  });
  
  
  