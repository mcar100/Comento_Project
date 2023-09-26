export function setButtonLayout() {
  const contents = [
    "CE",
    "MR",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const btnContainer = document.querySelector(".button-container");
  const screenDiv = document.querySelector(".main-screen");

  contents.forEach((content) => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.classList.add("btn__input");
    btn.textContent = content;
    btnContainer.appendChild(btn);
  });

  screenDiv.textContent = "0";
}

export function addSmallScreen() {
  const screenDiv = document.querySelector(".main-screen");
  if (!screenDiv.classList.contains("screen--smaller")) {
    screenDiv.classList.add("screen--smaller");
  }
}

export function removeSmallScreen() {
  const screenDiv = document.querySelector(".main-screen");
  if (screenDiv.classList.contains("screen--smaller")) {
    screenDiv.classList.remove("screen--smaller");
  }
}

export function resetScreen() {
  const screenDiv = document.querySelector(".main-screen");
  const subDiv = document.querySelector(".sub-screen");
  if (screenDiv.textContent !== "0") {
    screenDiv.textContent = "0";
  } else {
    subDiv.textContent = "";
  }

  removeSmallScreen();
}

export function saveAndLoad() {
  const screenDiv = document.querySelector(".main-screen");
  const subDiv = document.querySelector(".sub-screen");

  if (screenDiv.textContent.length > 0) {
    subDiv.textContent = screenDiv.textContent;
  } else {
    screenDiv.textContent = subDiv.textContent;
  }
}
