let input = document.querySelector("input");
let form = document.querySelector("form");
let dictionaryDiv = document.querySelector(".dictionary");
let meaning = document.querySelector(".meaning");
let icon=document.querySelector(".fa-volume-low")

const BASE_URL = `https:api.dictionaryapi.dev/api/v2/entries/en`;

function fetchDictionary(word) {
  fetch(`${BASE_URL}/${word}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      drawDictionary(data);
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchDictionary(input.value);
});
function drawDictionary(arr) {
  meaning.innerHTML =""
  arr.forEach((element) => {
  
    console.log(element);
    meaning.innerHTML += `
      <div class="top">
      <p>${element.word}</p>
      <i class="fa-solid fa-volume-off"></i>
    </div>
    <div class="bottom">
    <p>${element.meanings[0].partOfSpeech}</p>
    <h4>${element.meanings[0].definitions[0].definition}</h4>
    <i onclick="playAudio(this)"><audio src="${element.phonetics[0].audio}"></audio></i>
    </div>`;
  });
}
function playAudio(icon){
  icon.querySelector("audio").play()
}