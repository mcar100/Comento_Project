import { addEvents } from "./event/addEvent.js";
import { initGridArray } from "./utils/grid.js";
import { createMemo, addMemo } from "./utils/memo.js";

export const grid = initGridArray();
export const app = main();

function main() {
  const content = "메모를 추가해보세요!";
  const memoEl = createMemo(content);
  addMemo(memoEl);
  addEvents();
}
