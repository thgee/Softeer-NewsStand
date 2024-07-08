import { getSubscribeList } from "../../util/getSubscribeList.js";

/**
 * 구독하기 버튼을 누르면 해당 언론사를 구독하는 함수
 */

// 1. 구독하기 버튼을 찾는다
// 2. 클릭 이벤트 리스너 부착
// 3. pressNews에서 brandId 찾는다
// 4. addSubscribe(brandId) 호출

export const addSubscribe = () => {
  const subscribeBtn = document.querySelector(".subscribe-btn");
  subscribeBtn.addEventListener("click", handleClickSubscribeBtn);
};

const handleClickSubscribeBtn = () => {
  const brandId = Number(document.querySelector(".press-news").dataset.brandId);

  // 중복 구독 시 차단
  let subscribeList = getSubscribeList() || [];
  if (subscribeList.includes(brandId)) {
    alert("이미 구독한 언론사입니다.");
    return;
  }

  addBrandToLocalStorage(brandId);
};

/**
 * 구독버튼을 누르면 brandId를 인자로 받아서 해당 언론사를 localStorage에 저장하는 함수
 * @param {number} brandId
 */
const addBrandToLocalStorage = (brandId) => {
  // 로컬스토리지의 subscribeList 배열을 가져옴
  let subscribeList = getSubscribeList() || [];

  // 구독한 언론사의 brandId를 subscribeList에 추가하고 로컬스토리지에 저장
  subscribeList.push(Number(brandId));
  localStorage.setItem("subscribeList", JSON.stringify(subscribeList));
};
