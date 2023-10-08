const DAY_OF_THE_WEEK = ["Sun", "MON", "Tue", "Wed", "Thu", "Fri", "Sat"];
const ONE_TO_TEN = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export function setTime() {
  const liveTime = new Date();

  // 날짜, 시간 레이아웃 설정
  setDateLayout(liveTime);

  // 실제 시간
  const hour = liveTime.getHours();
  const minute = liveTime.getMinutes();
  const second = liveTime.getSeconds();
  setTimeLayout(hour, minute, second);
}

function setDateLayout(liveTime) {
  // 날짜+요일
  const date = liveTime.toLocaleDateString();
  const week = DAY_OF_THE_WEEK[liveTime.getDay()];

  // 날짜+요일 표현요소
  const dateDiv = document.querySelector(".date");

  // 날짜+요일 설정
  dateDiv.innerHTML = `${date} ${week}`;
}

function setTimeLayout(hour, minute, second) {
  // 시간 표현요소
  const hourDigit1 = document.querySelector(".hour > div:nth-child(1)");
  const hourDigit2 = document.querySelector(".hour > div:nth-child(2)");
  const minuteDigit1 = document.querySelector(".minute > div:nth-child(1)");
  const minuteDigit2 = document.querySelector(".minute > div:nth-child(2)");
  const secondDigit1 = document.querySelector(".second > div:nth-child(1)");
  const secondDigit2 = document.querySelector(".second > div:nth-child(2)");

  // 시간 설정
  addDigitNumber(hour, hourDigit1, hourDigit2);
  addDigitNumber(minute, minuteDigit1, minuteDigit2);
  addDigitNumber(second, secondDigit1, secondDigit2);

  const timer = setInterval(() => {
    if (second >= 59) {
      minute++;
      changeDigitNumber(minute, minuteDigit1, minuteDigit2);
      second = 0;
      changeDigitNumber(second, secondDigit1, secondDigit2);
    } else {
      second++;
      changeDigitNumber(second, secondDigit1, secondDigit2);
    }

    if (minute > 59) {
      hour++;
      changeDigitNumber(hour, hourDigit1, hourDigit2);

      minute = 0;
      changeDigitNumber(minute, minuteDigit1, minuteDigit2);
    }

    if (hour > 23) {
      const liveTime = new Date();
      hour = 0;
      changeDigitNumber(hour, hourDigit1, hourDigit2);
      setDateLayout(liveTime);
    }
  }, 1000);
}

function addDigitNumber(time, digit1, digit2) {
  const newClass1 = ONE_TO_TEN[Math.floor(time / 10)];
  const newClass2 = ONE_TO_TEN[time % 10];
  if (
    !digit1.classList.contains(newClass1) &&
    !digit2.classList.contains(newClass2)
  ) {
    digit1.classList.add(newClass1);
    digit2.classList.add(newClass2);
  }

  return;
}

function changeDigitNumber(time, digit1, digit2) {
  const oldClass1 = digit1.classList[digit1.classList.length - 1];
  const oldClass2 = digit2.classList[digit2.classList.length - 1];
  const newClass1 = ONE_TO_TEN[Math.floor(time / 10)];
  const newClass2 = ONE_TO_TEN[time % 10];

  if (
    digit1.classList.contains(oldClass1) &&
    digit2.classList.contains(oldClass2)
  ) {
    digit1.classList.remove(oldClass1);
    digit2.classList.remove(oldClass2);
  }
  if (
    !digit1.classList.contains(newClass1) &&
    !digit2.classList.contains(newClass2)
  ) {
    digit1.classList.add(newClass1);
    digit2.classList.add(newClass2);
  }

  return;
}
