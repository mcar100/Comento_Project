import { validator } from "../utils/validator.js";
import { checkIDDuplicate } from "../utils/duplicate.js";
import { validateErrorHandler, pageErrorHandler } from "./errorHandler.js";
import { app, render } from "../main.js";

export function handleInputChange(target) {
  validator(target);
}

export function handleSubmit(form) {
  const userData = {
    username: form.username.value,
    userId: form.userId.value,
    password: form.password.value,
    phonenumber: form.phonenumber.value,
  };

  const checkInput = document.querySelectorAll(".input-container input");
  const idInput = document.getElementById("userId");
  const duplicateCheck = document.querySelector(".checkID-button");

  try {
    checkInput.forEach((input) => {
      if (!input.classList.contains("input--clear")) {
        throw { object: input, message: "내용을 입력해주세요." };
      }
    });
    console.log(duplicateCheck.textContent);
    if (duplicateCheck.textContent !== "v") {
      throw { object: idInput, message: "중복 체크를 진행해주세요." };
    }

    app.addUser(userData);
    render(userData);
  } catch (error) {
    validateErrorHandler(error.object, error.message);
  }
}

export function handleIDCheck() {
  const userId = document.getElementById("userId");
  const checkBtn = document.querySelector(".checkID-button");

  try {
    if (userId && userId.classList.contains("input--clear")) {
      checkIDDuplicate(userId.value);
      checkBtn.textContent = "v";
    }
  } catch (error) {
    validateErrorHandler(userId, error.message);
  }
}

export function handleMoveBack() {
  try {
    render();
  } catch (error) {
    pageErrorHandler(error);
  }
}

export function handlePowerClick() {
  const page = document.querySelector(".phone-middle");

  if (page.classList.contains("phone--off")) {
    page.classList.remove("phone--off");
  } else {
    page.classList.add("phone--off");
  }
}
