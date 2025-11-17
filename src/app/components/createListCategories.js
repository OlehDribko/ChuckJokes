import { createDomElment } from "../utils.js";

export default function categoriesListRender(categorysList) {
  const categoryList = document.querySelector(".categories-list");

  categorysList.forEach((category) => {
    const categoryItem = createDomElment("li", "categori");
    categoryItem.textContent = category;

    categoryList.append(categoryItem);
  });
}
