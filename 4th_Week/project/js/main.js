import { addEvents } from "./event/addEvent.js";
import { createMemo, addMemo } from "./utils/memo.js";

function main() {
  const content = "메모를 추가해보세요!";
  const memoEl = createMemo(content);
  addMemo(memoEl);
  addEvents();
}

main();
