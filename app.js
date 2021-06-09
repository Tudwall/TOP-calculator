//Selectors.
const nbBtns = document.querySelectorAll(".nb-btn");
const opBtns = document.querySelectorAll(".operator-btn");
const clearBtn = document.querySelector("#clear-btn");
const eqBtn = document.querySelector("#equal-btn");
const delBtn = document.querySelector("#backspace-btn");
const pointBtn = document.querySelector("#point-btn");
const display = document.querySelector("#display");

let firstNum = "";
let secondNum = "";
display.textContent = "0";

// Event listeners.
nbBtns.forEach((btn) => {
  btn.addEventListener("click", () => inputNumber(btn.textContent));
});

clearBtn.addEventListener("click", clear);

// Functions.
function inputNumber(number) {
  if (display.textContent === "0") display.textContent = "";
  display.textContent += number;
}

function clear() {
  firstNum = "";
  secondNum = "";
  display.textContent = "0";
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  if (typeof (operator != "string")) {
    return;
  }
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      if (b === 0 || a === 0) return null;
      return divide(a, b);
      break;
    default:
      return null;
  }
}
