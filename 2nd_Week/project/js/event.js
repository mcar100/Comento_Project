// 버튼 이벤트 활성화
export function activeButton() {
  const activeCheck = document.querySelector(".active--button");
  const buttonArray = document.querySelectorAll(".product-button");

  // 이미 활성화 상태이면 리턴
  if (activeCheck) {
    return;
  }

  buttonArray.forEach((btn) => {
    if (!btn.classList.contains("active--button")) {
      btn.classList.add("active--button");
      btn.addEventListener("click", changeOutputProductStyle);
    }
  });
}

// 누른 버튼에 따라 출구에서 나오는 음료수 색이 바뀜
function changeOutputProductStyle(event) {
  const buttonArray = document.querySelectorAll(".product-button");
  const outputProduct = document.querySelector(
    ".fallen-item > .product > .product-body"
  );
  const productPattern = event.target.name;

  outputProduct.className = `product-body ${productPattern}`;

  buttonArray.forEach((btn) => {
    if (btn.classList.contains("active--button")) {
      btn.classList.remove("active--button");
      btn.removeEventListener("click", changeOutputProductStyle);
    }
  });
}
