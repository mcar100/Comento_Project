import { addSmallScreen } from "./layout.js";

export function errorHandler(div, error) {
  const message = error.message;
  addSmallScreen();
  div.textContent = `Err: ${message}`;
}
