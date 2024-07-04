import { newsData } from "../data/newsData.js";
import { renderNews } from "./renderNews.js";

export const movePage = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const pressNews = document.querySelector(".press-news");

  leftBtn.addEventListener("click", () => {
    renderNews(
      Number(pressNews.id) ? Number(pressNews.id) - 1 : newsData.length - 1
    );
  });

  rightBtn.addEventListener("click", () => {
    renderNews((Number(pressNews.id) + 1) % newsData.length);
  });
};
