let boxes = document.querySelector(".boxes");
let search = document.querySelector(".search");
const BASE_URL = "http://localhost:8080";
let arr=[];

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  arr=response.data;
  drawBox(response.data);
}
getData("furniture");

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

async function deleteFurniture(id, btn) {
  try {
    if (window.confirm("Are u sure to delete?")) {
      await axios.delete(`${BASE_URL}/furniture/${id}`);
      btn.closest(".box").remove();
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
  drawBox(filtered);
});
