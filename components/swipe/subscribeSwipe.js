import { subscribeData } from "../../data/subscribeData.js";
import { subscribeNews } from "../news/subscribeNews/subscribeNews.js";
import { handleClickAllLeftBtn, handleClickAllRightBtn } from "./allSwipe.js";

// 구독한 언론사 탭에서의 스와이프
export const subscribeSwipe = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  // subscribeSwipe에서의 이벤트 삭제
  leftBtn.removeEventListener("click", handleClickAllLeftBtn);
  rightBtn.removeEventListener("click", handleClickAllRightBtn);

  leftBtn.addEventListener("click", handleClickSubscribeLeftBtn);
  rightBtn.addEventListener("click", handleClickSubscribeRightBtn);
};

export const handleClickSubscribeLeftBtn = () => {
  const {
    dataset: { brandId },
  } = document.querySelector(".press-news");
  const fieldTabBtns = document.querySelectorAll(".field-tab-btn");

  let curBrandId = Number(brandId);

  // 스와이프 한 후의 페이지를 계산
  let prevBrandId = curBrandId ? curBrandId - 1 : subscribeData.length - 1;

  // 필드 버튼 active 처리
  fieldTabBtns[curBrandId].classList.remove("active");
  fieldTabBtns[prevBrandId].classList.add("active");

  // 뉴스 렌더링
  subscribeNews(prevBrandId);
};

export const handleClickSubscribeRightBtn = () => {
  const {
    dataset: { brandId },
  } = document.querySelector(".press-news");
  const fieldTabBtns = document.querySelectorAll(".field-tab-btn");

  let curBrandId = Number(brandId);

  // 스와이프 한 후의 페이지를 계산
  let prevBrandId =
    curBrandId === subscribeData.length - 1 ? 0 : curBrandId + 1;

  // 필드 버튼 active 처리
  fieldTabBtns[curBrandId].classList.remove("active");
  fieldTabBtns[prevBrandId].classList.add("active");

  // 뉴스 렌더링
  subscribeNews(prevBrandId);
};
