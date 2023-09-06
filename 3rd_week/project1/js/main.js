import { decreaseBattery } from "./battery.js";
import { addButtonEvents } from "./buttonEvent.js";
import { setTime } from "./timer.js";

function main() {
  init();
}

function init() {
  setTime();
  decreaseBattery();
  addButtonEvents();
}

main();
