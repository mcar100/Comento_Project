export function validateErrorHandler(target, errorMsg) {
  target.value = "";
  target.className = "input--error";
  target.placeholder = errorMsg;
  target.focus();
}

export function pageErrorHandler(error) {
  const errorMsg = error.message;
  const title = document.querySelector(".title");
  title.textContent = `${errorMsg}`;
}
