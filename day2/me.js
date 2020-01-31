const full = document.querySelector("body");
const colors = ["peru", "green", "pink"];

function one() {
  full.style.backgroundColor = colors[0];
}
function two() {
  full.style.backgroundColor = colors[1];
}
function three() {
  full.style.backgroundColor = colors[2];
}

function mother() {
  if (full < 500) {
    full.style.backgroundColor = colors[1];
  } else {
    full.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", mother);
window.addEventListener("resize", mother);
