// 화면이 켜짐 / 꺼짐 (배터리 충전 / 방전)
export function unlockTimeLayout() {
  const timeContainer = document.querySelector(".time-container");
  const alarmContainer = document.querySelector(".alarm-container");
  timeContainer.classList.remove("time--off");
  alarmContainer.classList.remove("time--off");
}

export function lockTimeLayout() {
  const timeContainer = document.querySelector(".time-container");
  const alarmContainer = document.querySelector(".alarm-container");
  timeContainer.classList.add("time--off");
  alarmContainer.classList.add("time--off");
}

// 요소 활성화/비활성화
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
