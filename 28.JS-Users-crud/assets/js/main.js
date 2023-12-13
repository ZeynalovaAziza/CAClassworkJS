let tbody = document.querySelector("tbody");
let deleteBtn=document.querySelector(".delete")

const BASE_URL = " http://localhost:8000";

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawTable(response.data);
}

getData("users")
function drawTable(data) {
    tbody.innerHTML =""
    data.forEach((element) => {
      tbody.innerHTML += `
      <tr>
      <td>${element.id}</td>
      <td><img src="${element.userphoto}" alt=""></td>
      <td>${element.name}</td>
      <td>${element.surname}</td>
      <td>${element.email}</td>
      <td>${element.date}</td>
      <td>
      <a href="./form.html">Edit</a>
      <button class="delete" onclick="deleteUsers(${element.id},this)">Delete</button>
      <button class="add-fav" onclick="addToFav(${element.id},this)">Add Fav</button>
  </td>

    </tr>
      `;
    });
  }

  async function deleteUsers(id, btn) {
  if (confirm("are u sure to delete users??")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/users/${id}`);
  }
  
}


let users=JSON.parse(localStorage.getItem("users"))??[]
async function addToFav(id){
let response=await axios(`${BASE_URL}/${id}`)
let data=response.data
let selectuser=users.find((elem)=>elem.id==id)
if(!selectuser){
  users.push(data)
  localStorage.setItem("users",JSON.stringify(users))
}else{
  alert("You already add this character")
}
}