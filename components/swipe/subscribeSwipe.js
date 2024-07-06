import { subscribeData } from "../../data/subscribeData.js";
import { subscribeNews } from "../news/subscribeNews/subscribeNews.js";

// 구독한 언론사 탭에서의 스와이프
export const subscribeSwipe = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  const pressNews = document.querySelector(".press-news");

  
  leftBtn.addEventListener("click", () => handleClickLeftBtn(pressNews));
  rightBtn.addEventListener("click", () => handleClickRightBtn(pressNews));
};

const handleClickLeftBtn = ({ dataset: { brandId } }) => {
  const fieldTabBtns = document.querySelectorAll(".field-tab-btn");

  // 이전에 active였던 필드 버튼 id
  let prevId = Number(brandId);

  // 다음에 active가 될 필드 버튼 id
  let nextId = Number(brandId) ? Number(brandId) - 1 : subscribeData.length - 1;

  // 필드 버튼 active 처리
  fieldTabBtns[prevId].classList.remove("active");
  fieldTabBtns[nextId].classList.add("active");

  // 뉴스 렌더링
  subscribeNews(nextId);
};

const handleClickRightBtn = ({ dataset: { brandId } }) => {
  const fieldTabBtns = document.querySelectorAll(".field-tab-btn");

  // 이전에 active였던 필드 버튼 id
  let prevId = Number(brandId);

  // 다음에 active가 될 필드 버튼 id
  let nextId = (Number(brandId) + 1) % subscribeData.length;

  // 필드 버튼 active 처리
  fieldTabBtns[prevId].classList.remove("active");
  fieldTabBtns[nextId].classList.add("active");

  // 뉴스 렌더링
  subscribeNews(nextId);
};
