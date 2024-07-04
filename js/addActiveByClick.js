// 요소 클릭 시 active 클래스 달아주는 함수
// callback은 active 달아준 이후에 실행될 함수

export const addActiveByClick = (className, callback = () => {}) => {
  const elements = document.querySelectorAll(className);

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
      // 기존의 active들을 모두 제거
      elements.forEach((it) => it.classList.remove("active"));

      // 선택한 버튼에 active 달아주기
      elements[i].classList.add("active");

      // 선택한 요소의 인덱스를 인자로 넘겨주기
      callback(i);
    });
  }
};
