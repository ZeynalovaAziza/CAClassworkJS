let card =document.querySelector(".card")
const BASE_URL="http://localhost:8080"
let id =new URLSearchParams(window.location.search).get("id")

async function getData(){
    let response=await axios(`${BASE_URL}/products/${id}`)
    console.log(response.data);
    card.innerHTML=`
    <img src="${response.data.photo}" alt="">
    <h4>${response.data.title}</h4>
    <p>${response.data.description}</p>

    `
}
getData("products")