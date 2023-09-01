/* 선택자 */
//getElementById
const myDiv = document.getElementById("myDiv");
console.log(myDiv);

// getElementsByClassName
const myClassElements = document.getElementsByClassName("myClass");
console.log(myClassElements);

// queryselector vs queryselectorAll
const myClassElement = document.querySelector(".myClass");
const myClassElementAll = document.querySelectorAll(".myClass");
console.log(myClassElement);
console.log(myClassElementAll);

/* let, var, const */
// let vs var
// let lname = "홍길동";
// let lname = "김길동"; // 재선언시 에러

var vname = "홍길동";
var vname = "김길동"; // 재선언에도 에러x
vname = "김철수";

// var 호이스팅
vmessage = "Hi"; // 할당이 가능하다
var vmessage;

// let - block scope
if (true) {
  let lString = "I'm true";
}
// console.log(lString); // ReferenceError: lString is not defined

// var - function, global scope
if (true) {
  var vString = "I'm true";
}
console.log(vString); // I'm true

// const
const cname = "홍길동"; // 최초 선언 및 할당만 가능
// cname = "김길동"; // TypeError: Assignment to constant variable

// 기억하기 어려운 값 상수화 예시
const COLOR_RED = "#F00";
const red = COLOR_RED;

/* Array Method */
const numArray = [10, 20, 30, 40];

// forEach
numArray.forEach((num, idx) => {
  console.log(idx + 1 + "번째 값: " + num);
});
// 1번째 값: 10
// 2번째 값: 20
// 3번째 값: 30
// 4번째 값: 40

// map
const newArray = numArray.map((num) => {
  return num + 5;
});
console.log(newArray); // [15, 25, 35, 45]
console.log(numArray); // [10, 20, 30, 40]

// filter
const filteredArray = numArray.filter((num) => num > 20);
console.log(filteredArray); // [30, 40];

// reduce( (누적값, 현재값) => { 누적할 계산 }, 초기값 )
const reducedResult = numArray.reduce((acc, cur) => {
  return (acc += cur);
}, 0);

console.log(reducedResult); // 100

const index = numArray.indexOf(20);
console.log(index + 1); // 1;

// rest parameters
function call(a, b, ...rest) {
  console.log(a, b); // 1 2
  // 배열로 구성되어 있음
  console.log(rest); // [3,4,5]
}
function sum(...args) {
  // 배열 객체이므로 Array 메서드 사용이 가능
  const result = args.reduce((acc, cur) => (acc += cur), 0);
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// arrow function
// 1. 기본 형태
let min = (a, b) => a - b;
console.log(min(10, 5)); // 5

// 2. 인자가 없을 시 빈 괄호로 표현 (생략x)
let sayHi = () => alert("hi~");
// sayHi();

// 3. 본문이 여러줄인 경우 중괄호 활용, return으로 결과값 명시
let multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(3, 4)); //12

// 4. if문의 경우 다음과 같이도 활용 가능
let findBigNumber = (a, b) => (a > b ? a : b);
console.log(findBigNumber(3, 7)); // 7

// 1급 객체 기준
// 1. 함수를 변수에 할당할 수 있어야 함
const sayHello = function () {
  console.log("Hello World!");
};
sayHello(); // "Hello World!""

// 2. 함수를 함수의 인자로 전달할 수 있어야 함
function caculate(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

const sumTwoNumber = (a, b) => a + b;
const minTwoNumber = (a, b) => a - b;

caculate(5, 10, sumTwoNumber); // 15
caculate(7, 3, minTwoNumber); // 4

// 3. 함수를 함수의 반환값으로 전달할 수 있어야 함
function greeting(callback) {
  console.log("Good Morning ");
  callback();
  return function () {
    console.log("Good Night");
  };
}
const greet = greeting(() => {
  console.log("Good Afternoon");
});
greet();
// Good Morning
// Good Afternoon
// Good Night

// Object 개념
// 1. '키/값' 쌍인 여러개의 프로퍼티로 구성되어 있다.
const student = {
  name: "Hong Gil Dong",
  age: 25,
  gender: "man",
  job: "programmer",
};

// 2.다음과 같이 접근 및 변경이 가능
console.log(student.name); // 접근방법1, Hong Gil Dong
student.job = "baseball player";
console.log(student["job"]); // 접근방법2, baseball player

// 3.for .. in 반복문으로 key, value 값 접근
for (key in student) {
  console.log(key + ":" + student[key]);
}
// name: Hong Gil Gong
// age: 25
// gender: man
// job: programmer
