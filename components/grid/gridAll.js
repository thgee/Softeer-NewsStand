import {
  handleClickSubscriptionLeftBtnGrid,
  handleClickSubscriptionRightBtnGrid,
} from "./gridSubscription.js";

let currentPage;
const numberOfLogos = 91;
const logosPerPage = 24;
let totalPages;

export const renderGridAll = () => {
  const newsGrid = document.querySelector(".news-grid");
  const newsList = document.querySelector(".news-list");

  newsGrid.classList.remove("hidden");
  newsList.classList.add("hidden");

  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  leftBtn.removeEventListener("click", handleClickSubscriptionLeftBtnGrid);
  rightBtn.removeEventListener("click", handleClickSubscriptionRightBtnGrid);

  currentPage = 0;

  totalPages = Math.ceil(numberOfLogos / logosPerPage);

  leftBtn.classList.add("hidden");

  leftBtn.addEventListener("click", handleClickAllLeftBtnGrid);

  rightBtn.addEventListener("click", handleClickAllRightBtnGrid);

  renderPageAll(currentPage); // Initial render
};

export const getPageAll = () => currentPage;

export const renderPageAll = (page) => {
  const newsGrid = document.querySelector(".news-grid");

  newsGrid.innerHTML = "";
  const start = page * logosPerPage;
  const end = Math.min(start + logosPerPage, numberOfLogos);

  const theme = localStorage.getItem("theme");
  let path = theme === "dark" ? "darkBrandLogo" : "lightBrandLogo";

  for (let i = start; i < end; i++) {
    newsGrid.innerHTML += `
      <div class="grid-item">
        <img class="grid-logo" src="../asset/${path}/brand${i}.svg">
      </div>`;
  }
};

export const handleClickAllRightBtnGrid = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  leftBtn.classList.remove("hidden");

  currentPage++;
  renderPageAll(currentPage);
  if (currentPage === totalPages - 1) rightBtn.classList.add("hidden");
};

export const handleClickAllLeftBtnGrid = () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  rightBtn.classList.remove("hidden");

  currentPage--;
  renderPageAll(currentPage);
  if (currentPage === 0) leftBtn.classList.add("hidden");
};
