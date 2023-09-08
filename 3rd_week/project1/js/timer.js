const DAY_OF_THE_WEEK = ["MON", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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

  // 날짜 요일
  const date = liveTime.toLocaleDateString();
  const week = DAY_OF_THE_WEEK[liveTime.getDay() - 1];

  // 시간
  const hour = liveTime.getHours();
  const minute = liveTime.getMinutes();
  const second = liveTime.getSeconds();

  setTimeLayout(date, week, hour, minute, second);
}

function setTimeLayout(date, week, hour, minute, second) {
  const dateDiv = document.querySelector(".date");
  const hourDigit1 = document.querySelector(".hour > div:nth-child(1)");
  const hourDigit2 = document.querySelector(".hour > div:nth-child(2)");
  const minuteDigit1 = document.querySelector(".minute > div:nth-child(1)");
  const minuteDigit2 = document.querySelector(".minute > div:nth-child(2)");
  const secondDigit1 = document.querySelector(".second > div:nth-child(1)");
  const secondDigit2 = document.querySelector(".second > div:nth-child(2)");

  // 날짜 요일 설정
  dateDiv.innerHTML = `${date} ${week}`;

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
      hour = 0;
      changeDigitNumber(hour, hourDigit1, hourDigit2);
    }
  }, 1000);
}

function addDigitNumber(time, digit1, digit2) {
  digit1.classList.add(`${ONE_TO_TEN[Math.floor(time / 10)]}`);
  digit2.classList.add(`${ONE_TO_TEN[time % 10]}`);
  return;
}

// function removeDigitNumber(digit1, digit2) {
//   digit1.classList.remove(digit1.classList[digit1.classList.length - 1]);
//   digit2.classList.remove(digit2.classList[digit2.classList.length - 1]);
//   return;
// }

function changeDigitNumber(time, digit1, digit2) {
  digit1.classList.remove(digit1.classList[digit1.classList.length - 1]);
  digit2.classList.remove(digit2.classList[digit2.classList.length - 1]);
  digit1.classList.add(`${ONE_TO_TEN[Math.floor(time / 10)]}`);
  digit2.classList.add(`${ONE_TO_TEN[time % 10]}`);
  return;
}
