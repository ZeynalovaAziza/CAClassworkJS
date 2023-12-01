$("h2").css("color", "blue");
$(".btn").css({
  backgroundColor: "blue",
  color: "white",
  border: "none",
  padding: "5px",
});
let text = document.createElement("p");

let array = JSON.parse(localStorage.getItem("array")) ?? [];
function drawLists(arr) {
  $(".box").empty();
  arr.forEach((item) => {
    let text = document.createElement("p");
    text.innerText = item;
    $(".box").append(text);
    text.onclick = function () {
      this.remove();
      array=array.filter((el)=>el !=item)
      localStorage.setItem("array", JSON.stringify(array));
    };
  });
}

$(".btn").on("click", function () {
  array.push($(".input").val());
  drawLists(array);
  $(".input").val("");
  localStorage.setItem("array", JSON.stringify(array));
});

$(".box").css({
  display: "flex",
  gap: "10px",
});
