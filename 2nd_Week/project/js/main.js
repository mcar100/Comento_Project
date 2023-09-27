import { activeButton } from "./event.js";

function main() {
  const coinBtn = document.querySelector(".coin-input");
  const moneyBtn = document.querySelector(".money-input");

  coinBtn.addEventListener("click", () => {
    activeButton();
  });

  moneyBtn.addEventListener("click", () => {
    activeButton();
  });
}

main();
