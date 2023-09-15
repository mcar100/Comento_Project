import { validateErrorHandler } from "../event/errorHandler.js";

export function validator(target) {
  const type = target.id;
  const value = target.value;

  try {
    if (type === "username") {
      nameValidator(value);
    } else if (type === "userId") {
      const checkBtn = document.querySelector(".checkID-button");
      checkBtn.textContent = "중복";
      userIdValidator(value);
    } else if (type === "password") {
      passwordValidator(value);
    } else if (type === "passwordConfirm") {
      passwordConfirmValidator(value);
    } else if (type === "phonenumber") {
      phonenumberValidator(value);
    }
    target.className = "input--clear";
  } catch (error) {
    validateErrorHandler(target, error.message);
  }
}

function nameValidator(value) {
  const rexExp = /^[가-힣]{2,}$/;
  if (value.length < 2) {
    throw new Error("2글자 이상 입력해주세요.");
  } else if (!rexExp.test(value)) {
    throw new Error("한글만 입력해주세요.");
  }
  return;
}

function userIdValidator(value) {
  const rexExp = /^[a-zA-Z0-9]{4,}$/;

  if (value.length < 4) {
    throw new Error("4글자 이상 입력해주세요.");
  } else if (!rexExp.test(value)) {
    throw new Error("영문자/숫자만 입력해주세요.");
  }
  return;
}

function passwordValidator(value) {
  const rexExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;

  if (value.length < 8 || value.length > 16) {
    throw new Error("8~16자 사이로 입력해주세요.");
  } else if (!rexExp.test(value)) {
    throw new Error("영문자/숫자/특수문자를 포함해주세요.");
  }
  return;
}

function passwordConfirmValidator(value) {
  const password = document.getElementById("password").value;
  if (!password) {
    throw new Error("비밀번호를 먼저 입력해주세요.");
  } else if (password !== value) {
    throw new Error("비밀번호와 일치하지 않습니다.");
  }
  return;
}

function phonenumberValidator(value) {
  const rexExp = /^01([0-9])-?([0-9]{3,4})-?([0-9]{4})$/;

  if (!rexExp.test(value)) {
    throw new Error("000-0000-0000, -을 포함");
  }
  return;
}
