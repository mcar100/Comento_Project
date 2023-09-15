import {
  handleInputChange,
  handleSubmit,
  handleIDCheck,
  handleMoveBack,
  handlePowerClick,
} from "./eventHandler.js";

export function addEvents() {
  addInputEvent();
  addSubmitEvent();
  addCheckIdEvent();
  addMoveBackEvent();
}

function addInputEvent() {
  const inputArray = document.querySelectorAll(".input-container input");

  if (inputArray) {
    inputArray.forEach((input) => {
      input.addEventListener("change", (e) => {
        handleInputChange(e.target);
      });
    });
  }
}

function addSubmitEvent() {
  const form = document.querySelector(".input-form");

  if (form) {
    form.addEventListener("submit", () => {
      handleSubmit(form);
    });
  }
}

function addCheckIdEvent() {
  const checkIDBtn = document.querySelector(".checkID-button");

  if (checkIDBtn) {
    checkIDBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleIDCheck();
    });
  }
}

function addMoveBackEvent() {
  const backBtn = document.querySelector(".back-button");

  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleMoveBack();
    });
  }
}

export function addPowerEvent() {
  const homeBtn = document.querySelector(".home-button");

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      handlePowerClick();
    });
  }
}
