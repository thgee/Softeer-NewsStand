import { subscribeData } from "../../data/subscribeData.js";
import { renderNews } from "../renderNews.js";

export const swipe = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  leftBtn.addEventListener("click", () => {
    const pressNews = document.querySelector(".press-news");
    const fieldTabBtns = document.querySelectorAll(".field-tab-btn");

    let prevIdx = Number(pressNews.id);
    let nextIdx = Number(pressNews.id)
      ? Number(pressNews.id) - 1
      : subscribeData.length - 1;
    renderNews(nextIdx);
    fieldTabBtns[prevIdx].classList.remove("active");
    fieldTabBtns[nextIdx].classList.add("active");
  });

  rightBtn.addEventListener("click", () => {
    const pressNews = document.querySelector(".press-news");
    const fieldTabBtns = document.querySelectorAll(".field-tab-btn");

    let prevIdx = Number(pressNews.id);
    let nextIdx = (Number(pressNews.id) + 1) % subscribeData.length;
    renderNews(nextIdx);

    fieldTabBtns[prevIdx].classList.remove("active");
    fieldTabBtns[nextIdx].classList.add("active");
  });
};
