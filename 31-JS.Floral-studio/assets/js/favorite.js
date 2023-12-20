const BASE_URL = "http://localhost:8080";
const products = document.querySelector(".products");
const favoritedProducts = getFavoritesFromLocaleStorage();

heart.addEventListener("click", function () {
   
    let favorits = getFavoritesFromLocaleStorage();

    let filtered = favorits.filter((item) => item.id !== element.id);

    setProductToLocaleStorage(filtered);
 
  });







  function setProductToLocaleStorage(products) {
    localStorage.setItem("favs", JSON.stringify(products));
  }
  
  function getFavoritesFromLocaleStorage() {
    return JSON.parse(localStorage.getItem("favs")) ?? [];
  }