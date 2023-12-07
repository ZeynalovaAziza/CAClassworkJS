let search = document.querySelector(".search");
let cards = document.querySelector(".cards");
let deleteBtn=document.querySelector(".delete")
const BASE_URL = "http://localhost:8080";

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  drawCard(response.data);
}

getData("blogs");

function drawCard(data) {
    console.log(data);
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    
        <div class="card">
            <h3>${element.title}</h3>
            <p>${element.body}</p>
            <p>${element.author}</p>
            <button class="delete" onclick="deleteCard(${element.id},this)">Delete</button>
            <button class="edit">Edit</button>
        </div>
    
    `;
  });
}

async function deleteCard(id, btn) {
    console.log(id);
  if (confirm("are u sure to delete blogs??")) {
    btn.closest("div").remove();
    await axios.delete(`${BASE_URL}/blogs/${id}`);
  }
  
}


search.addEventListener("input", function (event) {
     data = data.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );
    drawCard(filtered);
})
