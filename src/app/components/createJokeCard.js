import { getTimeHoursAgo, createDomElment } from "../utils.js";

export function createJokeCard(data) {
  const { id, value, updated_at, created_at } = data;

  const dateChange = getTimeHoursAgo(updated_at);

  const JokeCard = createDomElment("li", "joke-card");

  const icon = createDomElment("img", "icon-message");
  icon.src = "./img/message.svg";

  const iconLink = createDomElment("img", "icon-link");
  iconLink.src = "./img/link.svg";

  const iconLike = createDomElment("img", "icon-like");

  iconLike.src = "./img/like.svg";

  const div = createDomElment("div", "id-wraper");

  const idContent = document.createElement("p");
  idContent.textContent = `ID: ${id} `;

  div.append(idContent, iconLink);

  const jokeValue = createDomElment("p", "card-text");
  console.log(data);
  jokeValue.textContent = value;

  const updateInfo = createDomElment("p", "last-update-info-text");
  updateInfo.textContent = `Last update: ${dateChange} hours ago`;

  const categoryEl = createDomElment("p", "categori-visabili");

  categoryEl.textContent = `${created_at ?? ""}`;

  JokeCard.append(icon, iconLike, div, jokeValue, updateInfo, categoryEl);
  return JokeCard;
}
