import { allSwipe, handleClickAllRightBtn } from "../swipe/allSwipe.js";
import { handleClickSubscribeRightBtn } from "../swipe/subscriptionSwipe.js";

let intervalId;

export const renderProgressBar = () => {
  stopProgress();

  const progressBar = document.querySelector(
    ".field-tab-btn.active .progress-bar"
  );

  Array.from(document.querySelectorAll(".progress-bar")).map((it) =>
    it.classList.add("hidden")
  );

  progressBar.classList.remove("hidden");

  let width = 0;
  const duration = 2000;
  const interval = 20;
  intervalId = setInterval(() => {
    width += (interval / duration) * 100;
    progressBar.style.width = width + "%";

    if (width >= 100) {
      if (
        document.querySelector(".tab-and-viewer").dataset.tab === "subscription"
      )
        handleClickSubscribeRightBtn();
      else handleClickAllRightBtn();
    }
  }, interval);
};

export const stopProgress = () => clearInterval(intervalId);
