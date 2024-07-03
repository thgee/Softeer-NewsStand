import { getToday } from "../utils/getToday.js";

(() => {
  const date = document.querySelector(".header-today-date");

  date.innerHTML = getToday();
  console.log(123);
})();
console.log(13);
