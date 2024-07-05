import { allNewsData } from "../../data/allNewsData.js";
import { subscribeData } from "../../data/subscribeData.js";
import { news } from "../news/news.js";

export const fieldTab = (mode) => {
  const fieldTab = document.querySelector(".field-tab");

  fieldTab.innerHTML = "";

  // 전체 언론사 버튼이 눌렸을 때
  if (mode === "all") {
    // field tab btn 렌더링
    allNewsData.forEach((it, idx) => {
      const fieldTabBtn = `
          <button class="field-tab-btn text-weak available-medium14 pointer ${
            idx === 0 ? "active" : ""
          }" id="${idx}">
            ${it.cate}
          </button>
        `;
      fieldTab.innerHTML += fieldTabBtn;
    });
  }

  // 구독한 언론사 버튼이 눌렸을 때
  if (mode === "subscribe") {
    // field tab btn 렌더링
    subscribeData.forEach((it, idx) => {
      const fieldTabBtn = `
          <button class="field-tab-btn text-weak available-medium14 pointer ${
            idx === 0 ? "active" : ""
          }" id="${idx}">
            ${it.brand}
          </button>
        `;
      fieldTab.innerHTML += fieldTabBtn;
    });
  }

  // 이벤트 리스너 부착
  handleClickBtn();
};

const handleClickBtn = () => {
  // 각 버튼에 클릭 이벤트 리스너 추가
  document.querySelectorAll(".field-tab-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      // 모든 버튼에서 active 클래스 제거
      document
        .querySelectorAll(".field-tab-btn")
        .forEach((btn) => btn.classList.remove("active"));

      // 클릭된 버튼에 active 클래스 추가
      btn.classList.add("active");

      // 선택된 버튼에 맞는 언론사 렌더링
      news(idx);
    });
  });
};
