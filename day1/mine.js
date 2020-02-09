const colors = ["#1abc9c", "#9b59b6", "#e74c3c", "#d35400", "#2c3e50"];
const h1 = document.querySelector("h1");

function handlerHere() {
  h1.innerText = "your mouse here!";
  h1.style.color = colors[0];
}
function handlerGone() {
  h1.innerText = "mouse is gone";
  h1.style.color = colors[1];
}
function handlerResized() {
  h1.innerText = "you just resized! WOW!";
  h1.style.color = colors[2];
}
function handlerRightClick() {
  h1.innerText = "RIGHT CLICK~~!!";
  h1.style.color = colors[3];
}
function handlerClick() {
  h1.innerText = "Are you click me? hahaha";
  h1.style.color = colors[4];
}

h1.addEventListener("mouseenter", handlerHere);
h1.addEventListener("mouseleave", handlerGone);
h1.addEventListener("click", handlerClick);
window.addEventListener("resize", handlerResized);
window.addEventListener("contextmenu", handlerRightClick);
