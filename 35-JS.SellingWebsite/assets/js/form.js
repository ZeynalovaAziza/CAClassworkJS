const BASE_URL = "http://localhost:8080";
let search = document.querySelector(".search");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let tbody = document.querySelector("tbody");
let arr = [];
async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  arr = response.data;
  drawTable(response.data);
}
getData("products");

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    tbody.innerHTML += `
     <tr>
          <td><img src="${element.photo}"></td>
          <td>${element.title}</td>
          <td>${element.description}</td>
          <td>
            <button  class="delete" onclick=deleteProduct("${element.id}",this)>Delete</button>
        </td>
        </tr>
          `;
  });
}

async function deleteProduct(id, btn) {
  try {
    if (window.confirm("Are u sure to delete?")) {
      await axios.delete(`${BASE_URL}/products/${id}`);
      btn.closest("tr").remove();
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
  drawTable(filtered);
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  try {
    if (allInputs[0].value.trim() && allInputs[1].value.trim()) {
      let product = {
        title: allInputs[0].value,
        description: allInputs[1].value,
      };
      await axios.post(`${BASE_URL}/products`, product);
      // window.history.back("../../index.html");
    } else {
      window.alert("??");
    }
  } catch (error) {
    console.log(error);
  }
});
