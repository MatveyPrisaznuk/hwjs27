const spanRef = document.querySelector(".interval");
let value = 0;

let timerId = setInterval(() => {
  value += 1;
  spanRef.textContent = value;

  if (value >= 5) {
    clearInterval(timerId);
  }
}, 1000);

// --------------------------------------

const boxRef = document.querySelector(".box");
const newBoxRef = document.querySelector(".new__box");
const colors = ["blue", "yellow", "black", "red", "orange"];
let count = 0;
const id = setInterval(() => {
  boxRef.style.background = colors[count];
  newBoxRef.style.background = colors[count - 1];
  count += 1;
  if (count === colors.length) {
    count = 0;
    boxRef.style.background = "orange";
    newBoxRef.style.background = "pink";
    // clearInterval(id)
    // boxRef.style.background = "pink"
  }
}, 2000);

// --------------------------------------

const gameRef = document.querySelector(".game__cube");
const countRef = document.querySelector(".count");
const canvasRef = document.querySelector(".game__box");
const canvasCount = document.querySelector(".new__count");
let newValue = 0;
let canvasValue = 0;
gameRef.addEventListener("click", () => {
  setInterval(() => {
    gameRef.style.top = Math.floor(Math.random() * 500) + 1 + "px";
    gameRef.style.left = Math.floor(Math.random() * 500) + 1 + "px";
    gameRef.style.right = Math.floor(Math.random() * 500) + 1 + "px";
    gameRef.style.bottom = Math.floor(Math.random() * 500) + 1 + "px";
  }, 5000);

  newValue += 1;
  countRef.textContent = newValue;
});

canvasRef.addEventListener("click", () => {
  canvasValue += 1;
  canvasCount.textContent = canvasValue;
});

// --------------------------------------

const inputRef = document.querySelector(".input");
let message = null;
inputRef.addEventListener("change", () => {
  message = inputRef.value;
  setTimeout(() => {
    console.log("Привіт");
  }, message);
});
