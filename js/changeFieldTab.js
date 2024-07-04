import { allFieldTabLabel } from "../data/fieldTabLabel.js";
import { subscribeData } from "../data/subscribeData.js";
import { addActiveByClick } from "./addActiveByClick.js";
import { swipe } from "./subscribe/swipe.js";
import { renderNews } from "./renderNews.js";

export const changeFieldTab = () => {
  const fieldTab = document.querySelector(".field-tab");
  const allBrand = document.querySelector(".all-brand-tab-btn");
  const subscribeBrand = document.querySelector(".subscribe-brand-tab-btn");

  // 첫 마운트 시에 이벤트 발생 없어도 탭을 띄워야 함
  allFieldTabLabel.forEach((label, idx) => {
    const fieldTabBtn = `<button class="field-tab-btn text-weak available-medium14 pointer ${
      idx === 0 ? "active" : ""
    }">
  ${label}
</button>`;
    fieldTab.innerHTML += fieldTabBtn;
  });
  addActiveByClick("field-tab-btn", renderNews);

  // 전체 언론사를 클릭했을 때
  allBrand.addEventListener("click", () => {
    fieldTab.innerHTML = "";

    allFieldTabLabel.forEach((label, idx) => {
      const fieldTabBtn = `<button class="field-tab-btn text-weak available-medium14 pointer ${
        idx === 0 ? "active" : ""
      }">
    ${label}
  </button>`;
      fieldTab.innerHTML += fieldTabBtn;
    });

    // 첫 번째 언론사를 렌더링
    renderNews(0);
    addActiveByClick("field-tab-btn", renderNews);
  });

  // 구독한 언론사를 클릭했을 때
  subscribeBrand.addEventListener("click", () => {
    fieldTab.innerHTML = "";

    subscribeData.forEach((news, idx) => {
      const fieldTabBtn = `<button class="field-tab-btn text-weak available-medium14 pointer ${
        idx === 0 ? "active" : ""
      }" id = ${idx}>
      ${news.name}
    </button>`;
      fieldTab.innerHTML += fieldTabBtn;
    });

    // 첫 번째 언론사를 렌더링
    renderNews(0);
    addActiveByClick("field-tab-btn", renderNews);
  });
};
