import { fieldTab } from "../fieldTab/fieldTab.js";
import { stopProgress } from "../fieldTab/progressBar.js";
import { renderGrid } from "../grid/grid.js";
import {
  allSwipe,
  handleClickAllLeftBtn,
  handleClickAllRightBtn,
} from "../swipe/allSwipe.js";
import {
  handleClickSubscribeLeftBtn,
  handleClickSubscribeRightBtn,
  subscribeSwipe,
} from "../swipe/subscriptionSwipe.js";

export const viewSwitch = () => {
  const { tab, view } = document.querySelector(".tab-and-viewer").dataset;
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  if (view === "list") {
    if (tab === "all") {
      // 전체 언론사 탭 버튼
      fieldTab("allTabPress");

      // 전체 언론사일때의 스와이프 기능 작동
      allSwipe();
    }
    if (tab === "subscription") {
      // 구독한 언론사 탭 버튼 렌더링
      fieldTab("subscribeTabPress");

      // 구독한 언론사일때의 스와이프 기능 작동
      subscribeSwipe();
    }
  }

  if (view === "grid") {
    stopProgress();

    // 화살표 버튼 이벤트 해제
    leftBtn.removeEventListener("click", handleClickSubscribeLeftBtn);
    rightBtn.removeEventListener("click", handleClickSubscribeRightBtn);
    leftBtn.removeEventListener("click", handleClickAllLeftBtn);
    rightBtn.removeEventListener("click", handleClickAllRightBtn);
    handleClickAllLeftBtn;
    // 그리드 전체 언론사
    if (tab === "all") {
      renderGrid();
    }

    // 그리드 구독한 언론사
    if (tab === "subscription") {
    }
  }
};

export const setView = () => {
  const listViewBtn = document.querySelector(".list-view-btn");
  const gridViewBtn = document.querySelector(".grid-view-btn");
  const allBrandTabBtn = document.querySelector(".all-brand-tab-btn");
  const subscribeBrandTabBtn = document.querySelector(
    ".subscribe-brand-tab-btn"
  );
  const tabAndViewer = document.querySelector(".tab-and-viewer");

  allBrandTabBtn.addEventListener("click", () =>
    handleClickAllBrandTabBtn(
      tabAndViewer,
      allBrandTabBtn,
      subscribeBrandTabBtn
    )
  );

  subscribeBrandTabBtn.addEventListener("click", () =>
    handleClickSubscribeBrandTabBtn(
      tabAndViewer,
      allBrandTabBtn,
      subscribeBrandTabBtn
    )
  );

  listViewBtn.addEventListener("click", () =>
    handleClickListViewBtn(tabAndViewer, listViewBtn, gridViewBtn)
  );

  gridViewBtn.addEventListener("click", () =>
    handleClickGridViewBtn(tabAndViewer, listViewBtn, gridViewBtn)
  );

  // 초기화면
  allBrandTabBtn.click();
  listViewBtn.click();
};

// 모든 언론사 버튼 클릭
const handleClickAllBrandTabBtn = (
  tabAndViewer,
  allBrandTabBtn,
  subscribeBrandTabBtn
) => {
  // 전체 언론사 버튼이 굵어져야 함
  subscribeBrandTabBtn.classList.remove("active");
  allBrandTabBtn.classList.add("active");

  tabAndViewer.dataset.tab = "all";

  viewSwitch();
};

// 구독한 언론사 버튼 클릭
const handleClickSubscribeBrandTabBtn = (
  tabAndViewer,
  allBrandTabBtn,
  subscribeBrandTabBtn
) => {
  // 내가 구독한 언론사 버튼이 굵어져야 함
  allBrandTabBtn.classList.remove("active");
  subscribeBrandTabBtn.classList.add("active");
  tabAndViewer.dataset.tab = "subscription";

  viewSwitch();
};

// 리스트 뷰 버튼 클릭
const handleClickListViewBtn = (tabAndViewer, listViewBtn, gridViewBtn) => {
  // 아이콘 색 변경
  gridViewBtn.classList.remove("active");
  listViewBtn.classList.add("active");

  tabAndViewer.dataset.view = "list";
  viewSwitch();
};

// 그리드 뷰 버튼 클릭
const handleClickGridViewBtn = (tabAndViewer, listViewBtn, gridViewBtn) => {
  // 아이콘 색 변경
  gridViewBtn.classList.add("active");
  listViewBtn.classList.remove("active");

  tabAndViewer.dataset.view = "grid";

  viewSwitch();
};
