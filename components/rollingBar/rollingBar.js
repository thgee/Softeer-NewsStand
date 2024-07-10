import { currentNewsData } from "../../data/currentNewsData.js";

/**
 * 1초 간격으로 롤링바를 초기화하는 함수
 */
export const initRollingBar = () => {
  // 첫 렌더링 시에도 뉴스가 보이도록 초기화

  Array.from(document.querySelectorAll(".current-news-1")).map(
    (currentNewsBox, idx) =>
      renderCurrentNews(currentNewsBox, currentNewsData[idx][0])
  );
  Array.from(document.querySelectorAll(".current-news-2")).map(
    (currentNewsBox, idx) =>
      renderCurrentNews(currentNewsBox, currentNewsData[idx][0])
  );

  const a = document.querySelectorAll(".current-news-2")[0];
  renderCurrentNews(a, currentNewsData[0][0]);

  // 간격을 두고 롤링 시작
  renderRollingBar(0);

  setTimeout(() => {
    renderRollingBar(1);
  }, 1000);
};

/**
 * rollingBarIdx 번째 롤링바 렌더링
 *
 * @param {number} rollingBarIdx
 */
const renderRollingBar = (rollingBarIdx) => {
  const currentNewsBox1 =
    document.querySelectorAll(".current-news-1")[rollingBarIdx];
  const currentNewsBox2 =
    document.querySelectorAll(".current-news-2")[rollingBarIdx];
  let newsData = currentNewsData[rollingBarIdx];

  let i = 0;
  let intervalId;

  const startInterval = () => {
    intervalId = setInterval(
      () => setCurrentNews(i++, currentNewsBox1, currentNewsBox2, newsData),
      2000
    );
  };

  const stopInterval = () => {
    clearInterval(intervalId);
  };

  startInterval();

  // hover 이벤트 리스너 부착
  currentNewsBox1.addEventListener("mouseenter", stopInterval);
  currentNewsBox1.addEventListener("mouseleave", startInterval);
  currentNewsBox2.addEventListener("mouseenter", stopInterval);
  currentNewsBox2.addEventListener("mouseleave", startInterval);
};

/**
 * 최신 뉴스를 위로 롤링시키는 함수
 */
const animateRolling = (currentNewsBox1, currentNewsBox2) => {
  currentNewsBox1.classList.remove("roll");
  currentNewsBox2.classList.remove("roll");

  // roll 클래스 제거를 html에 적용시키기 위함
  currentNewsBox1.offsetWidth;
  currentNewsBox2.offsetWidth;

  currentNewsBox1.classList.add("roll");
  currentNewsBox2.classList.add("roll");
};

/**
 * RollingBar에 뉴스 데이터를 넣어주고 애니메이션 호출
 */
const setCurrentNews = (i, currentNewsBox1, currentNewsBox2, newsData) => {
  let [idx1, idx2] = [i % newsData.length, (i + 1) % newsData.length];

  renderCurrentNews(currentNewsBox1, newsData[idx1]);
  renderCurrentNews(currentNewsBox2, newsData[idx2]);

  animateRolling(currentNewsBox1, currentNewsBox2);
};

/**
 *
 * a태그 생성
 * @param {HTMLDivElement} currentNewsBox 최신 뉴스 텍스트를 감싸고있는 div박스
 * @param {{title : stirng, url : string}} newsData
 */
const renderCurrentNews = (currentNewsBox, newsData) => {
  currentNewsBox.innerHTML = `<a class = "available-medium14 text-default" href = ${newsData.url}>${newsData.title}</a>`;
};
