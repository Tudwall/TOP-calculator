//Selectors.
const btns = document.querySelectorAll("button");
const display = document.querySelector("#display");

// Event listeners.
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);
  });
});

// Functions.
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
      return divide(a, b);
      break;
  }
}

function storeDisplayValue() {
  // TODO
}
