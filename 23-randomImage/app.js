let h2 = document.createElement("h2");
let image = document.createElement("img");
let container = document.querySelector(".container");
let body=document.querySelector("body")

const BASE_URL = ` https://dog.ceo/api/breeds/image`;

container.append(h2, image);
h2.innerText = "Random Image";
h2.style.textAlign = "center";
container.style.display="flex"
container.style.flexDirection="column"
container.style.justifyContent="center"
container.style.alignItems="center"

body.style.backgroundColor="pink";
image.style.width="20%"
image.style.borderRadius="10px"
image.src = "https://images.dog.ceo/breeds/setter-english/n02100735_7847.jpg";


setInterval(() => {
  fetch(`${BASE_URL}/random`)
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message;
    });
}, 2000);
