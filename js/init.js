import { addActiveByClick } from "./addActiveByClick.js";
import { changeFieldTab } from "./changeFieldTab.js";
import { myNewsMovePage } from "./myNewsMovePage.js";
import { renderNews } from "./renderNews.js";

changeFieldTab(0);
renderNews(0);
myNewsMovePage();

addActiveByClick(".press-tab-btn", changeFieldTab);
