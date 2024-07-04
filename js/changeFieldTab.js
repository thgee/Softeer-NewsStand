import { allFieldTabLabel } from "../data/fieldTabLabel.js";
import { myNewsData } from "../data/myNewsData.js";
import { addActiveByClick } from "./addActiveByClick.js";
import { myNewsMovePage } from "./myNewsMovePage.js";
import { renderNews } from "./renderNews.js";

export const changeFieldTab = (mode) => {
  const fieldTab = document.querySelector(".field-tab");

  fieldTab.innerHTML = "";

  // 전체 언론사를 클릭했을 때
  if (mode === 0)
    allFieldTabLabel.forEach((label, idx) => {
      const fieldTabBtn = `<button class="field-tab-btn text-weak available-medium14 pointer ${
        idx === 0 && "active"
      }">
    ${label}
  </button>`;
      fieldTab.innerHTML += fieldTabBtn;
    });
  // 구독한 언론사를 클릭했을 때
  else if (mode === 1) {
    myNewsData.forEach((news, idx) => {
      const fieldTabBtn = `<button class="field-tab-btn text-weak available-medium14 pointer ${
        idx === 0 && "active"
      }" id = ${idx}>
      ${news.name}
    </button>`;
      fieldTab.innerHTML += fieldTabBtn;
    });
    renderNews(0);
  }

  addActiveByClick(".field-tab-btn", renderNews);
};
