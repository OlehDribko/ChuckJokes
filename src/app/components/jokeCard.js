import {
  getTimeHoursAgo,
  createDomElment,
  isFavorite,
  toggleFavorite,
} from "../utils.js";

export function jokeCard(data) {
  const { id, value, updated_at, categories } = data;

  const dateChange = getTimeHoursAgo(updated_at);
  const JokeCard = createDomElment("li", "joke-card");
  const icon = createDomElment("img", "icon-message");
  const div = createDomElment("div", "id-wraper");
  const iconLink = createDomElment("img", "icon-link");
  const iconLike = createDomElment("img", "icon-like");
  const idContent = document.createElement("p");
  const jokeValue = createDomElment("p", "card-text");
  const updateInfo = createDomElment("p", "last-update-info-text");
  const categoryEl = createDomElment("p", "textContent");

  iconLink.src = "./img/link.svg";
  icon.src = "./img/message.svg";
  iconLike.src = "./img/like.svg";

  idContent.textContent = `ID: ${id} `;
  jokeValue.textContent = value;
  updateInfo.textContent = `Last update: ${dateChange} hours ago`;
  categoryEl.textContent = `${categories[0] ?? ""}`;

  div.append(idContent, iconLink);

  JokeCard.append(icon, iconLike, div, jokeValue, updateInfo);
  if (categories && categories.length > 0) {
    categoryEl.textContent = categories[0];
    categoryEl.classList.add("category-badge");
    JokeCard.append(categoryEl);
  }

  if (isFavorite(id)) {
    iconLike.classList.add("icon-like-active");
    iconLike.src = "./img/fullLike.svg";
  }

  iconLike.addEventListener("click", (event) => {
    const nowFavorite = toggleFavorite(data);

    iconLike.classList.toggle("icon-like--active", nowFavorite);

    iconLike.src = nowFavorite ? "./img/fullLike.svg" : "./img/like.svg";
  });

  return JokeCard;
}
