import { addSmallScreen, removeSmallScreen } from "./layout.js";
import { calculate } from "./calculator.js";

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
  const content = e.target.textContent;
  const regexOperator = /[%/x+-]/;
  let result = 0;

  try {
    checkInputLength(screenDiv.textContent.length);
    if (screenDiv.textContent.includes("Err") && content !== "CE") {
      return;
    }

    if (content === "CE") {
      resetScreen();
    } else if (content === "MR") {
      saveAndLoad();
      checkInputLength(screenDiv.textContent.length);
    } else if (content === "=") {
      result = calculate();
      checkInputLength(result.toString().length);
      screenDiv.textContent = result;
    } else if (regexOperator.test(content)) {
      if (regexOperator.test(screenDiv.textContent)) {
        return;
      } else {
        screenDiv.insertAdjacentHTML("beforeend", content);
      }
    } else {
      screenDiv.insertAdjacentHTML("beforeend", content);
    }
  } catch (error) {
    console.log(error);
    addSmallScreen();
    screenDiv.textContent = error.message;
  }
}

function checkInputLength(length) {
  if (length > 29) {
    throw new Error("Err: out-of-range");
  }

  if (length > 10) {
    addSmallScreen();
  } else {
    removeSmallScreen();
  }
}

function resetScreen() {
  const screenDiv = document.querySelector(".main-screen");
  const subDiv = document.querySelector(".sub-screen");
  if (screenDiv.textContent) {
    screenDiv.textContent = "";
  } else {
    subDiv.textContent = "";
  }

  removeSmallScreen();
}

function saveAndLoad() {
  const screenDiv = document.querySelector(".main-screen");
  const subDiv = document.querySelector(".sub-screen");

  if (screenDiv.textContent.length > 0) {
    subDiv.textContent = screenDiv.textContent;
  } else {
    screenDiv.textContent = subDiv.textContent;
  }
}
