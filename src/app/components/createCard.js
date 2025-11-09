import { getTimeHoursAgo } from "../utils.js";

const listOfJoke = document.querySelector(".cards-of-joke-list");

export default function jokeCardRender(
  jokeId,
  joke,
  lastUpdate,
  cradId,
  category
) {
  const dateChange = getTimeHoursAgo(lastUpdate);

  const li = document.createElement("li");
  li.classList.add("joke-card");
  li.id = cradId;

  const icon = document.createElement("img");
  icon.classList.add("icon-message");
  icon.src = "./img/message.svg";

  const iconLink = document.createElement("img");
  iconLink.classList.add("icon-link");
  iconLink.src = "./img/link.svg";

  const iconLike = document.createElement("img");
  iconLike.classList.add("icon-like");
  iconLike.src = "./img/like.svg";

  const div = document.createElement("div");
  div.classList.add("id-wraper");

  const idContent = document.createElement("p");
  idContent.textContent = `ID: ${jokeId} `;

  div.append(idContent, iconLink);

  const p = document.createElement("p");
  p.classList.add("card-text");
  p.textContent = joke;

  const updateInfo = document.createElement("p");
  updateInfo.classList.add("last-update-info-text");
  updateInfo.textContent = `Last update: ${dateChange} hours ago`;

  const categoryEl = document.createElement("p");
  categoryEl.classList.add("categori-visabili");
  categoryEl.textContent = `${category}`;

  li.append(icon, iconLike, div, p, updateInfo);
  if (category) li.append(categoryEl);

  listOfJoke.append(li);
  return li;
}
