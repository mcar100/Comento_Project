import {
  addSmallScreen,
  removeSmallScreen,
  resetScreen,
  saveAndLoad,
} from "./layout.js";
import { calculate } from "./calculator.js";
import { errorHandler } from "./error.js";

export function addBtnEventHandler() {
  const inputBtns = document.querySelectorAll(".btn__input");
  if (inputBtns) {
    inputBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        inputHandler(e);
      })
    );
  } else {
    console.log("error");
  }
}

function inputHandler(e) {
  const screenDiv = document.querySelector(".main-screen");
  const inputStack = screenDiv.textContent;
  const content = e.target.textContent;
  const regexOperator = /[%/x+-]/;

  try {
    checkInputLength(inputStack.length);
    if (inputStack.includes("Err") && content !== "CE") {
      return;
    }

    if (content === "CE") {
      resetScreen();
    } else if (content === "MR") {
      saveAndLoad();
      checkInputLength(inputStack.length);
    } else if (content === "=") {
      const result = calculate();
      checkInputLength(result.toString().length);
      screenDiv.textContent = result;
    } else if (regexOperator.test(content)) {
      if (regexOperator.test(inputStack)) {
        return;
      } else {
        screenDiv.insertAdjacentHTML("beforeend", content);
      }
    } else {
      screenDiv.insertAdjacentHTML("beforeend", content);
    }
  } catch (error) {
    errorHandler(screenDiv, error);
  }
}

function checkInputLength(length) {
  if (length > 29) {
    throw new Error("out-of-range");
  }

  if (length > 10) {
    addSmallScreen();
  } else {
    removeSmallScreen();
  }
}
