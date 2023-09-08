export function calculate() {
  const screenDiv = document.querySelector(".main-screen");
  const regexOperator = /[%/x+-]/;
  const screenContent = screenDiv.textContent;

  if (screenContent.length === 0) {
    throw new Error("Err: no-num");
  }

  if (!screenContent.match(regexOperator)) {
    return screenDiv.textContent;
  }
  const operator = screenContent.match(regexOperator)[0];

  const formula = screenContent.split(regexOperator);
  const num1 = Number(formula[0]);
  const num2 = Number(formula[1]);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error("Err: NaN");
  }

  if (operator === "%") {
    return num1 % num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      throw new Error("Err: deo-is-zero");
    }
    return (num1 / num2).toFixed(3);
  } else if (operator === "x") {
    return num1 * num2;
  } else if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else {
    throw new Error("Err: no-operator");
  }
}
