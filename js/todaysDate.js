import { getToday } from "../util/getToday.js";

(() => {
  const date = document.querySelector(".header-today-date");

  date.innerHTML = getToday();
})();
