import { currentNewsData } from "../../data/currentNewsData.js";

export const renderRollingBar = () => {
  const currentNews1 = document.querySelector(".current-news-1");
  const currentNews2 = document.querySelector(".current-news-2");
  console.log(currentNewsData[0]);

  // currentNews들을 원래 위치로 이동

  // 에니메이션 작동
  animateRolling(currentNews1, currentNews2);

  // 5초 딜레이
  for (let i = 0; i < currentNewsData[0].news.length; i++) {
    let currentNews = currentNewsData[0].news;
    currentNews1.innerHTML = currentNews[i].title;
    currentNews2.innerHTML = currentNews[i + 1].title;
    console.log(123);
    setTimeout(() => {}, 1200);
  }
};

/**
 * currentNews들을 이동시키는 함수
 */
const animateRolling = (currentNews1, currentNews2) => {
  currentNews1.classList.add("roll");
  currentNews2.classList.add("roll");
};
