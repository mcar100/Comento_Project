import { addMemoEvent, addPinEvent } from "../event/addEvent.js";
import { setGridPosition } from "./grid.js";
import { grid } from "../main.js";

export function checkMemoList() {
  const memoContainerDiv = document.querySelector(".memo-container");
  if (memoContainerDiv.children.length === 8) {
    return false;
  }
  return true;
}

// 메모 생성
export function createMemo(content) {
  const memoDiv = document.createElement("div");
  const headDiv = document.createElement("div");
  const pinDiv = document.createElement("div");
  const bodyDiv = document.createElement("div");
  const textArea = document.createElement("textarea");

  memoDiv.className = "memo";
  headDiv.className = "memo-head";
  pinDiv.className = "memo-pin";
  bodyDiv.className = "memo-body";

  // textarea 속성 추가
  textArea.setAttribute("readonly", true);
  textArea.value = content;

  // 핀 클릭 시 제거 이벤트 추가
  addPinEvent(pinDiv);
  addMemoEvent(textArea);

  headDiv.appendChild(pinDiv);
  bodyDiv.appendChild(textArea);
  memoDiv.appendChild(headDiv);
  memoDiv.appendChild(bodyDiv);

  // 메모 스타일 지정
  decorateMemo(memoDiv);
  setGridPosition(memoDiv);

  return memoDiv;
}

// 랜덤 메모 스타일 적용
export function decorateMemo(memoDiv) {
  const randNum = Math.floor(Math.random() * 6) + 1;
  const style = `memo-type${randNum}`;
  memoDiv.classList.add(style);
}

export function addMemo(memoEl) {
  const memoContainerDiv = document.querySelector(".memo-container");
  if (memoEl) {
    memoContainerDiv.appendChild(memoEl);
  }
}

export function removeMemo(memoEl) {
  const memoContainerDiv = document.querySelector(".memo-container");
  if (memoEl) {
    const row = memoEl.style.gridRow;
    const column = memoEl.style.gridColumn;
    grid.addEmptyGridSpace(row, column);
    memoContainerDiv.removeChild(memoEl);
  } else {
    console.log("memo not found");
  }
}
