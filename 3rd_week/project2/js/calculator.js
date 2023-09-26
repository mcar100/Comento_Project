export function calculate() {
  const screenDiv = document.querySelector(".main-screen");
  const regexOperator = /[%/x+-]/;
  const screenContent = screenDiv.textContent;
  let resultValue = 0;

  if (screenContent.length === 0) {
    throw new Error("input-required");
  }

  if (!screenContent.match(regexOperator)) {
    return screenDiv.textContent;
  }
  const operator = screenContent.match(regexOperator)[0];

  const formula = screenContent.split(regexOperator);
  const num1 = Number(formula[0]);
  const num2 = Number(formula[1]);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error("NaN");
  }

  if (operator === "%") {
    resultValue = num1 % num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      throw new Error("deo-is-zero");
    }
    resultValue = num1 / num2;
  } else if (operator === "x") {
    resultValue = num1 * num2;
  } else if (operator === "+") {
    resultValue = num1 + num2;
  } else if (operator === "-") {
    resultValue = num1 - num2;
  } else {
    throw new Error("no-operator");
  }

  resultValue = checkResult(resultValue);
  return resultValue;
}

function checkResult(num) {
  if (Number.isNaN(num)) {
    throw new Error("NaN");
  } else if (!Number.isInteger(num)) {
    return Number(num.toFixed(3));
  }

  return num;
}
