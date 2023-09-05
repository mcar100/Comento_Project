import { reFillBattery } from "./battery.js";

// 버튼 별 이벤트 추가
export function addButtonEvents() {
  // 배터리 리필 이벤트
  const refillBtn = document.querySelector(".btn--refill");
  refillBtn.addEventListener("click", () => {
    reFillBattery();
  });
}

export function activeTarget(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (target) {
    target.disabled = false;
    target.classList.remove("disabled");
  } else {
    console.error("요소를 찾을 수 없습니다.");
  }
}

export function disableTarget(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (target) {
    target.disabled = true;
    target.classList.add("disabled");
  } else {
    console.error("요소를 찾을 수 없습니다.");
  }
}
