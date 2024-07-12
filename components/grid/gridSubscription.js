import { getSubscribeList } from "../../util/getSubscribeList.js";
import {
  handleClickAllLeftBtnGrid,
  handleClickAllRightBtnGrid,
} from "./gridAll.js";

let currentPage;
let numberOfLogos;
const logosPerPage = 24;
let totalPages;
let subscriptionList;

export const renderGridSubscription = () => {
  const newsGrid = document.querySelector(".news-grid");
  const newsList = document.querySelector(".news-list");

  newsGrid.classList.remove("hidden");
  newsList.classList.add("hidden");

  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  leftBtn.removeEventListener("click", handleClickAllLeftBtnGrid);
  rightBtn.removeEventListener("click", handleClickAllRightBtnGrid);

  currentPage = 0;

  subscriptionList = getSubscribeList();
  numberOfLogos = subscriptionList.length;

  totalPages = Math.ceil(numberOfLogos / logosPerPage);

  if (totalPages === 1) {
    rightBtn.classList.add("hidden");
  }

  leftBtn.classList.add("hidden");

  leftBtn.addEventListener("click", handleClickSubscriptionLeftBtnGrid);

  rightBtn.addEventListener("click", handleClickSubscriptionRightBtnGrid);

  renderPageSubscription(currentPage); // Initial render
};

export const getPageSubscription = () => currentPage;
export const renderPageSubscription = (page) => {
  const newsGrid = document.querySelector(".news-grid");

  newsGrid.innerHTML = "";
  const start = page * logosPerPage;
  const end = Math.min(start + logosPerPage, numberOfLogos);

  const theme = localStorage.getItem("theme");
  let path = theme === "dark" ? "darkBrandLogo" : "lightBrandLogo";

  for (let i = start; i < end; i++) {
    newsGrid.innerHTML += `
      <div class="grid-item">
        <img class="grid-logo" src="../asset/${path}/brand${subscriptionList[i]}.svg">
      </div>`;
  }
};

export const handleClickSubscriptionRightBtnGrid = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  leftBtn.classList.remove("hidden");

  currentPage++;
  renderPageSubscription(currentPage);

  if (currentPage === totalPages - 1) rightBtn.classList.add("hidden");
};

export const handleClickSubscriptionLeftBtnGrid = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  rightBtn.classList.remove("hidden");

  currentPage--;
  renderPageSubscription(currentPage);

  if (currentPage === 0) leftBtn.classList.add("hidden");
};
