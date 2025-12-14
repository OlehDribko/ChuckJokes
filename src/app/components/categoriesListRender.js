import { createDomElement } from "../utils.js";

export default function categoriesListRender(categoryList) {
  const categoryListElement = document.querySelector(".categories-list");

  categoryList.forEach((category, index) => {
    const label = createDomElement("label", "category-label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "category";
    input.value = category;

    const span = document.createElement("span");
    span.textContent = category;

    if (index === 0) input.checked = true;

    label.append(input, span);
    categoryListElement.append(label);
  });
}
