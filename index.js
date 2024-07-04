import { addActiveByClick } from "./js/addActiveByClick.js";
import { changeFieldTab } from "./js/changeFieldTab.js";
import { swipe } from "./js/subscribe/swipe.js";
import { renderNews } from "./js/renderNews.js";

changeFieldTab();
renderNews(0);
swipe();
addActiveByClick(".field-tab-btn", renderNews);
addActiveByClick(".press-tab-btn", changeFieldTab);
