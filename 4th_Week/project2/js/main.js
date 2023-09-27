import { addEvents, addPowerEvent } from "./event/addEvent.js";
import { pageErrorHandler } from "./event/errorHandler.js";
import { moveToHomePage } from "./page/home.js";
import { moveToSignupPage } from "./page/signup.js";

export const app = main();

function main() {
  try {
    const init = initUserArray();
    addPowerEvent();
    render();

    return {
      addUser: init.addUser,
      getUserIdArray: init.getUserIdArray,
    };
  } catch (error) {
    pageErrorHandler(error);
  }
}

export function render(userData) {
  if (userData) {
    moveToHomePage(userData);
  } else {
    moveToSignupPage();
  }
  addEvents();
}

function initUserArray() {
  const userArray = [];

  function addUser(user) {
    userArray.push(user);
  }

  function getUserIdArray() {
    const userIdArray = userArray.map((user) => user.userId);
    return userIdArray;
  }

  return {
    addUser: addUser,
    getUserIdArray: getUserIdArray,
  };
}
