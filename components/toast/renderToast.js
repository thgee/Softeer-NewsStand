/**
 * Toast UI 렌더링
 * @param {string} text
 */
export const renderToast = (text) => {
  const toast = document.querySelector(".toast");
  toast.innerHTML = `<span class="display-medium16 text-white-default">${text}</span>`;
  animateToast(toast);
};

// animateToast 호출 시 appear class를 부여하고 setTimeOut의 콜백으로
// appear을 제거해주며 transition 으로 opacity 애니메이션 제어
const animateToast = (toast) => {
  toast.classList.add("appear");
  setTimeout(() => {
    toast.classList.remove("appear");
  }, 2000);
};
