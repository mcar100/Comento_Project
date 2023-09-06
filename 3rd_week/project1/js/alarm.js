export function changeBtnClass(addBtn, alarmBtns) {
  const alarmUl = document.querySelector(".alarm__ul");
  // 최초 클릭 시 알람 설정
  if (!addBtn.classList.contains("alarm-mode")) {
    alarmBtns.forEach((btn) => {
      btn.classList.add("alarm-mode");
      alarmUl.classList.add("blink");
    });
    createAlarm();
  } else {
    // 한번 더 클릭시 알람 설정 종료
    alarmBtns.forEach((btn) => {
      btn.classList.remove("alarm-mode");
      alarmUl.classList.remove("blink");
    });
  }
  return;
}

function createAlarm() {
  const alarmUl = document.querySelector(".alarm__ul");

  if (alarmUl.querySelectorAll(".alarm__text").length === 3) {
    alarmUl.removeChild(alarmUl.lastChild);
  }
  const alarmLi = document.createElement("li");
  alarmLi.classList.add("alarm__text");
  alarmLi.innerHTML = "<div>00</div>:<div>00</div>:<div>00</div>";
  alarmUl.prepend(alarmLi);
  return;
}

export function removeAlarm() {
  const alarmUl = document.querySelector(".alarm__ul");
  if (alarmUl.querySelectorAll(".alarm__text").length > 0) {
    alarmUl.removeChild(alarmUl.firstChild);
  }
  return;
}

export function setAlarmTime(n) {
  const tDiv = document.querySelector(`.alarm__text > div:nth-child(${n})`);
  let t = Number(tDiv.textContent);
  t++;
  if (n === 1 && t > 23) {
    t = 0;
  } else if (n === 2 && t > 59) {
    t = 0;
  } else if (n === 3 && t > 59) {
    t = 0;
  }
  tDiv.textContent = String(t).padStart(2, "0");
  return;
}
