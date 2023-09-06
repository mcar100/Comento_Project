import {
  activeTarget,
  disableTarget,
  unlockTimeLayout,
  lockTimeLayout,
} from "./utils.js";
const TIME_LINE = 1000 * 10; // 20초마다 배터리 한칸 감소

export function decreaseBattery() {
  const batteryContainer = document.querySelector(".battery-container");

  // 특정 시간마다 배터리 하나씩 삭제
  const removeBattery = setInterval(() => {
    if (batteryContainer.firstChild) {
      batteryContainer.removeChild(batteryContainer.firstChild);
    } else {
      clearInterval(removeBattery);
      lockTimeLayout();
      activeTarget(".btn--refill");
    }
  }, TIME_LINE);
}

// 배터리 풀 충전 및 시스템 회복
export function reFillBattery() {
  const batteryContainer = document.querySelector(".battery-container");

  for (let i = 0; i < 5; i++) {
    const battery = document.createElement("li");
    battery.className = "battery";
    batteryContainer.appendChild(battery);
  }
  unlockTimeLayout();
  disableTarget(".btn--refill");
  decreaseBattery();
}
