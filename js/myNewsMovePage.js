import { myNewsData } from "../data/myNewsData.js";
import { renderNews } from "./renderNews.js";

export const myNewsMovePage = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const pressNews = document.querySelector(".press-news");
  const fieldTabBtns = document.querySelectorAll(".field-tab-btn");

  leftBtn.addEventListener("click", () => {
    let prevIdx = Number(pressNews.id);
    let nextIdx = Number(pressNews.id)
      ? Number(pressNews.id) - 1
      : myNewsData.length - 1;
    fieldTabBtns[prevIdx].classList.remove("active");
    fieldTabBtns[nextIdx].classList.add("active");
    renderNews(nextIdx);
  });

  rightBtn.addEventListener("click", () => {
    let prevIdx = Number(pressNews.id);
    let nextIdx = (Number(pressNews.id) + 1) % myNewsData.length;

    fieldTabBtns[prevIdx].classList.remove("active");
    fieldTabBtns[nextIdx].classList.add("active");

    renderNews(nextIdx);
  });
};
