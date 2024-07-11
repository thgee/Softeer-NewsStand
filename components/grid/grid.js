export const renderGrid = () => {
  const newsGrid = document.querySelector(".news-grid");
  const newsList = document.querySelector(".news-list");

  newsGrid.classList.remove("hidden");
  newsList.classList.add("hidden");

  const numberOfLogos = 90;
  const logosPerPage = 24;
  let currentPage = 0;

  const totalPages = Math.ceil(numberOfLogos / logosPerPage);

  const renderPage = (page) => {
    newsGrid.innerHTML = "";
    const start = page * logosPerPage;
    const end = Math.min(start + logosPerPage, numberOfLogos);

    for (let i = start; i < end; i++) {
      newsGrid.innerHTML += `
        <div class="grid-item">
          <img class="grid-logo" src="../asset/darkBrandLogo/brand${i}.svg">
        </div>`;
    }
  };

  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  leftBtn.addEventListener("click", () => {
    console.log(currentPage);
    if (currentPage > 0) {
      currentPage--;
      renderPage(currentPage);
    } else leftBtn.classList.add("hidden");
  });

  rightBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 2) {
      currentPage++;
      renderPage(currentPage);
    } else rightBtn.classList.add("hidden");
  });

  renderPage(currentPage); // Initial render
};
