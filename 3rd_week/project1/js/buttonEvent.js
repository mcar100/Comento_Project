import { reFillBattery } from "./battery.js";
import { changeBtnClass, removeAlarm, setAlarmTime } from "./alarm.js";

// 버튼 별 기능 추가
export function addButtonEvents() {
  // 배터리 리필 기능
  const refillBtn = document.querySelector(".btn--refill");
  refillBtn.addEventListener("click", () => {
    reFillBattery();
  });

  // 알람 설정 기능
  const alarmBtns = document.querySelectorAll(
    ".button-container > .btn__alarm"
  );
  const addBtn = document.querySelector(".btn__add");
  addBtn.addEventListener("click", () => {
    // add 버튼 클릭시 알람 기능 활성화
    changeBtnClass(addBtn, alarmBtns);
  });

  const removeBtn = document.querySelector(".btn__remove");
  removeBtn.addEventListener("click", () => {
    removeAlarm();
  });

  const hourBtn = document.querySelector(".btn__hour");
  hourBtn.addEventListener("click", () => {
    if (hourBtn.classList.contains("alarm-mode")) {
      setAlarmTime(1);
    }
  });

  const minuteBtn = document.querySelector(".btn__minute");
  minuteBtn.addEventListener("click", () => {
    if (minuteBtn.classList.contains("alarm-mode")) {
      setAlarmTime(2);
    }
  });

  const secondBtn = document.querySelector(".btn__second");
  secondBtn.addEventListener("click", () => {
    if (secondBtn.classList.contains("alarm-mode")) {
      setAlarmTime(3);
    }
  });

  return;
}
