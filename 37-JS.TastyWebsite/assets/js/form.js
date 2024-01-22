const BASE_URL = "http://localhost:8080";
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let search = document.querySelector(".search");
let arr = [];
async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  arr = response.data;
  drawTable(response.data);
}

getData("meals");

function drawTable(data) {
  console.log(data);
  tbody.innerHTML = "";
  data.forEach((element) => {
    tbody.innerHTML += `
      <tr>
      <td><img src="${element.photo}" alt=""></td>
                <td>${element.name}</td>
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td><button class="delete" onclick=deleteMeal("${element.id}",this)>Delete</button></td>

             </tr>
          `;
  });
}

async function deleteMeal(id, btn) {
  try {
    if (window.confirm("Are u sure to delete?")) {
      await axios.delete(`${BASE_URL}/meals/${id}`);
      btn.closest("tr").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

search.addEventListener("input", function (event) {
  event.preventDefault();
  let filtered = arr.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase());
  });
  drawTable(filtered);
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  try {
    if (
      allInputs[0].value.trim() &&
      allInputs[1].value.trim() &&
      allInputs[2].value.trim()
    ) {
      let meal = {
        name: allInputs[0].value,
        description: allInputs[1].value,
        price: allInputs[2].value,
      };
      await axios.post(`${BASE_URL}/meals`, meal);
    } else {
      window.alert("??");
    }
  } catch (error) {
    console.log(error);
  }
});
