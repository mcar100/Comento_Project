import {
  createMemo,
  addMemo,
  removeMemo,
  checkMemoList,
} from "../utils/memo.js";

export function submitHandler() {
  const input = document.querySelector(".input-container > input");
  const check = checkMemoList();

  if (!check) {
    console.log("remove memo first");
    return;
  }

  const content = input.value;
  if (content) {
    const memoEl = createMemo(content);
    addMemo(memoEl);
  }
  input.value = "";
}

export function pinClickHandler(target) {
  const parentEl = target.parentNode.parentNode;
  if (parentEl) {
    removeMemo(parentEl);
  }
}
