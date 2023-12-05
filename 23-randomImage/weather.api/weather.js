let input = document.querySelector("input");
let btn = document.querySelector("button");
let bottom = document.querySelector(".bottom");

const BASE_URL = `
https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=`;

function getWeather(curCity) {
  fetch(`${BASE_URL}${curCity}&aqi=no`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      bottom.innerHTML = `

        <div>
          <p>${data.location.name},${data.location.country}</p>
          <img src="${data.current.condition.icon}" alt="" />
          <p>${data.current.condition.text}</p>
          <p>${data.current.temp_c}</p>
          <p>${data.current.temp_fw}</p>
          <p></p>
        </div>
      `;
    });
}

btn.addEventListener("click", function () {
  getWeather(input.value);
});

getWeather("Baku");
