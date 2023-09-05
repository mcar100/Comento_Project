import { activeTarget, disableTarget } from "./buttonEvent.js";

const TIME_LINE = 1000;

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

// 배터리가 다 되면 화면이 꺼짐
function lockTimeLayout() {
  const timeContainer = document.querySelector(".time-container");
  timeContainer.classList.add("time--off");
}

// 배터리가 다시 차면 화면이 켜짐
function unlockTimeLayout() {
  const timeContainer = document.querySelector(".time-container");
  timeContainer.classList.remove("time--off");
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
  decreaseBattery();
  disableTarget(".btn--refill");
}
