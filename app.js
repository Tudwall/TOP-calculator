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

pointBtn.addEventListener("click", inputDecimal);

eqBtn.addEventListener("click", compute);

delBtn.addEventListener("click", deleteNumber);

clearBtn.addEventListener("click", clear);

// Functions.
function inputNumber(number) {
  if (display.textContent === "0") display.textContent = "";
  display.textContent += number;
}

function inputOperator(op) {
  if (operator !== null) compute();
  firstNumber = display.textContent;
  operator = op;
  display.textContent = "";
}

function inputDecimal() {
  if (display.textContent === "") display.textContent = "0";
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
}

function compute() {
  if (operator === null) return;
  if (operator === "/" && display.textContent === "0") {
    alert("You can't divide by 0!");
    clear();
    return;
  }
  secondNumber = display.textContent;
  display.textContent = roundDecimal(
    operate(firstNumber, operator, secondNumber)
  );
  operator = null;
}

function roundDecimal(num) {
  return Math.round(num * 100) / 100;
}

function deleteNumber() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = null;
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
