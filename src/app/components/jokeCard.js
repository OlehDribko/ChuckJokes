import {
  getTimeHoursAgo,
  createDomElement,
  isFavorite,
  addFavoriteJoke,
  deleteFavoriteJoke,
  renderFavoriteIcon,
} from "../utils.js";

export function jokeCard(data) {
  const { id, value, updated_at, categories } = data;

  const dateChange = getTimeHoursAgo(updated_at);

  const jokeCardElement = createDomElement("li", "joke-card");
  const icon = createDomElement("img", "icon-message");
  const wrapper = createDomElement("div", "id-wrapper");
  const iconLink = createDomElement("img", "icon-link");

  const idContent = document.createElement("p");
  const jokeValue = createDomElement("p", "card-text");
  const updateInfo = createDomElement("p", "last-update-info-text");
  const categoryEl = createDomElement("p", "textContent");
  const iconLike = renderFavoriteIcon(data);
  iconLink.src = "./img/link.svg";
  icon.src = "./img/message.svg";

  idContent.textContent = `ID: ${id} `;
  jokeValue.textContent = value;
  updateInfo.textContent = `Last update: ${dateChange} hours ago`;
  categoryEl.textContent = `${categories[0] ?? ""}`;

  wrapper.append(idContent, iconLink);

  jokeCardElement.append(icon, iconLike, wrapper, jokeValue, updateInfo);
  if (categories && categories.length > 0) {
    categoryEl.textContent = categories[0];
    categoryEl.classList.add("category-badge");
    jokeCardElement.append(categoryEl);
  }

  return jokeCardElement;
}
