const articleList = document.querySelector("#news-list__articles");

articles.forEach((article) => {
  const listItem = `<a herf = "#" class = "article-link">${article}</a>`;
  articleList.innerHTML += listItem;
});
