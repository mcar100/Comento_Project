import { decreaseBattery } from "./battery.js";
import { addButtonEvents } from "./buttonEvent.js";
import { setTime } from "./timer.js";

function main() {
  init();
  addButtonEvents();
}

function init() {
  setTime();
  decreaseBattery();
}

main();
