const BASE_URL = "http://localhost:8080";
let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  try {
    if (allInputs[0].value.trim() && allInputs[1].value.trim()) {
      let product = {
        title: allInputs[0].value,
        description: allInputs[1].value,
      };
      await axios.post(`${BASE_URL}/products`, product);
      window.history.back("../../index.html");
    } else {
      window.alert("??");
    }
  } catch (error) {
    console.log(error);
  }
});
