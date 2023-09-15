import { app } from "../main.js";

export function checkIDDuplicate(value) {
  const userIdArray = app.getUserIdArray();
  const found = userIdArray.find((userId) => userId === value);

  if (found) {
    throw new Error("존재하는 아이디입니다.");
  }
}
