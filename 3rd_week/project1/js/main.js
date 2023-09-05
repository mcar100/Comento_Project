import { decreaseBattery } from "./battery.js";
import { addButtonEvents } from "./buttonEvent.js";

function main() {
  decreaseBattery();
  addButtonEvents();
}

main();
