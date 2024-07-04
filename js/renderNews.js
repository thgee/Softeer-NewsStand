import { myNewsData } from "../data/myNewsData.js";
import { shortenStr } from "../util/shortenStr.js";

export const renderNews = (idx) => {
  const news = myNewsData[idx];

  // press news selector
  const pressNews = document.querySelector(".press-news");

  // brand selector
  const brandLogo = document.querySelector(".brand-logo");
  const brandEditDate = document.querySelector(".brand-edit-date");

  // main news selector
  const mainNewsThumbnail = document.querySelector(".main-news-thumbnail");
  const mainNewsTitle = document.querySelector(".main-news-title");

  // sub news selector
  const subNewsList = document.querySelector(".sub-news-list");

  // news Id 저장
  pressNews.id = idx;

  // 언론사 로고
  brandLogo.src = news.brandImg;

  // 편집 날짜
  brandEditDate.innerHTML = `${news.editDate} 편집`;

  // main News
  mainNewsThumbnail.src = news.mainNews.thumbnail;
  mainNewsTitle.href = news.mainNews.url;
  mainNewsTitle.innerHTML = shortenStr(news.mainNews.title);

  // sub News
  subNewsList.innerHTML = "";
  news.subNews.map(({ title, url }) => {
    const listItem = `<a href = ${url} class = "available-medium16 text-bold">${shortenStr(
      title,
      40
    )}</a>`;
    subNewsList.innerHTML += listItem;
  });
};
