import { createDomElment } from "../utils.js";

export default function categoriesListRender(categorysList) {
  const categoryList = document.querySelector(".categories-list");

  categorysList.forEach((category, index) => {
    const label = createDomElment("label", "category-label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "category";
    input.value = category;

    const span = document.createElement("span");
    span.textContent = category;

    if (index === 0) input.checked = true;

    label.append(input, span);
    categoryList.append(label);
  });
}
