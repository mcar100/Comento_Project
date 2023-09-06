import { reFillBattery } from "./battery.js";

// 버튼 별 이벤트 추가
export function addButtonEvents() {
  // 배터리 리필 기능
  const refillBtn = document.querySelector(".btn--refill");
  refillBtn.addEventListener("click", () => {
    reFillBattery();
  });
}
