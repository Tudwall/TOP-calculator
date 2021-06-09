//Selectors.
const nbBtns = document.querySelectorAll(".nb-btn");
const opBtns = document.querySelectorAll(".operator-btn");
const clearBtn = document.querySelector("#clear-btn");
const eqBtn = document.querySelector("#equal-btn");
const delBtn = document.querySelector("#backspace-btn");
const pointBtn = document.querySelector("#point-btn");
const display = document.querySelector("#display");

let firstNumber = "";
let secondNumber = "";
let operator = null;
display.textContent = "0";

// Event listeners.
nbBtns.forEach((btn) => {
  btn.addEventListener("click", () => inputNumber(btn.textContent));
});

opBtns.forEach((btn) => {
  btn.addEventListener("click", () => inputOperator(btn.textContent));
});

clearBtn.addEventListener("click", clear);

// Functions.
function inputNumber(number) {
  if (display.textContent === "0") display.textContent = "";
  display.textContent += number;
}

function inputOperator(op) {
  firstNumber = display.textContent;
  operator = op;
  display.textContent += op;
}

function clear() {
  firstNumber = "";
  secondNumber = "";
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
  a = Number(a);
  b = Number(b);
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
