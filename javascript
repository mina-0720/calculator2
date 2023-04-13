const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
let firstOperand = null;
let operator = null;
let secondOperand = null;

calculator.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("number")) {
    if (operator === null) {
      if (firstOperand === null) {
        firstOperand = target.textContent;
      } else {
        firstOperand += target.textContent;
      }
      display.textContent = firstOperand;
    } else {
      if (secondOperand === null) {
        secondOperand = target.textContent;
      } else {
        secondOperand += target.textContent;
      }
      display.textContent = secondOperand;
    }
  }

  if (target.classList.contains("operator")) {
    if (firstOperand !== null && operator === null) {
      operator = target.textContent;
      display.textContent = operator;
    }
  }

  if (target.classList.contains("decimal")) {
    if (operator === null) {
      if (firstOperand === null) {
        firstOperand = "0.";
      } else if (!firstOperand.includes(".")) {
        firstOperand += ".";
      }
      display.textContent = firstOperand;
    } else {
      if (secondOperand === null) {
        secondOperand = "0.";
      } else if (!secondOperand.includes(".")) {
        secondOperand += ".";
      }
      display.textContent = secondOperand;
    }
  }

  if (target.classList.contains("clear")) {
    firstOperand = null;
    operator = null;
    secondOperand = null;
    display.textContent = "0";
  }

  if (target.classList.contains("equal")) {
    if (firstOperand !== null && operator !== null && secondOperand !== null) {
      const result = calculate(parseFloat(firstOperand), operator, parseFloat(secondOperand));
      firstOperand = result.toString();
      operator = null;
      secondOperand = null;
      display.textContent = result.toString();
    }
  }
});

function calculate(firstOperand, operator, secondOperand) {
  let result = 0;
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }
  return result;
}
