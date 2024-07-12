import { getPageAll, renderPageAll } from "../grid/gridAll.js";
import {
  getPageSubscription,
  renderPageSubscription,
} from "../grid/gridSubscription.js";

export const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }
};

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);

  const { view, tab } = document.querySelector(".tab-and-viewer").dataset;

  if (view === "grid") {
    if (tab === "all") renderPageAll(getPageAll());

    if (view === "subscription") {
      renderPageSubscription(getPageSubscription());
    }
  }
});

// Initialize theme
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
applyTheme(savedTheme);
