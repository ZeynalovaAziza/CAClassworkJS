const BASE_URL = "http://localhost:8080";
let cards=document.querySelector(".cards-data")
let search=document.querySelector(".search")
let arr=[];
async function getData(endpoint) {
    let response = await axios(`${BASE_URL}/${endpoint}`);
    arr=response.data;
    drawCard(response.data);
    // console.log(response.data);
  }
  getData("products");

  function drawCard(data) {
    console.log(data);
    cards.innerHTML = "";
    data.forEach((element) => {
      cards.innerHTML += `
      <div class="card-data">
                <div class="img">
                    <img src="${element.photo}" alt="">
                    <h3>${element.title}</h3>
                </div>
                <p>${element.description}</p>
                <div class="icons">
                <i class="fa-solid fa-trash" onclick=deleteProduct("${element.id}",this)></i>
                <a href="./details.html?id=${element.id}" class="details">Details</a>
            </div>


            </div>
        
        `;
    });
  }

  async function deleteProduct(id, btn) {
    try {
      if (window.confirm("Are u sure to delete?")) {
        await axios.delete(`${BASE_URL}/products/${id}`);
        btn.closest(".card-data").remove();
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
    drawCard(filtered);
  });
  
  