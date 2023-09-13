import { submitHandler, pinClickHandler } from "./eventHandler.js";

export function addEvents() {
  const submitBtn = document.querySelector(".input-container > button");
  submitBtn.addEventListener("click", () => {
    submitHandler();
  });

  const pinDiv = document.querySelector(".memo-pin");
  pinDiv.addEventListener("click", (e) => {
    pinClickHandler(e.target);
  });
}

export function addPinEvent(pinDiv) {
  pinDiv.addEventListener("click", (e) => {
    pinClickHandler(e.target);
  });
}
