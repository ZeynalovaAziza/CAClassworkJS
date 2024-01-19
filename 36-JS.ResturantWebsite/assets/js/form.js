const BASE_URL = "http://localhost:8080";
let search = document.querySelector(".search");
let form=document.querySelector("form")
let allInputs=document.querySelectorAll("input")
let tbody = document.querySelector("tbody");

let arr = [];
async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  arr = response.data;
  drawTable(response.data);
}
getData("menu")
function drawTable(data) {
    tbody.innerHTML = "";
    data.forEach((element) => {
      tbody.innerHTML += `
       <tr>
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td>${element.price}</td>
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
        await axios.delete(`${BASE_URL}/menu/${id}`);
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
      if (allInputs[0].value.trim() && allInputs[1].value.trim()&&allInputs[2].value.trim()) {
        let menu = {
         name: allInputs[0].value,
          description: allInputs[1].value,
          price: allInputs[2].value,
        };
        await axios.post(`${BASE_URL}/menu`, menu);
      } else {
        window.alert("??");
      }
    } catch (error) {
      console.log(error);
    }
  });
  