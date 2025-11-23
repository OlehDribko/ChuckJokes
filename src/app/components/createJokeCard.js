import { getTimeHoursAgo, createDomElment } from "../utils.js";

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
  const categoryEl = createDomElment("p", "categori-visabili");

  iconLink.src = "./img/link.svg";
  icon.src = "./img/message.svg";
  iconLike.src = "./img/like.svg";

  idContent.textContent = `ID: ${id} `;
  jokeValue.textContent = value;
  updateInfo.textContent = `Last update: ${dateChange} hours ago`;
  categoryEl.textContent = `${categories[0] ?? ""}`;

  div.append(idContent, iconLink);

  JokeCard.append(icon, iconLike, div, jokeValue, updateInfo, categoryEl);

  return JokeCard;
}

// const [value, setValue] = useState(10);

// setValue(22);

const myUseState = function fn(value, callback) {
  let state = value;

  function getState() {
    return state;
  }
  function setState(newValue) {
    state = newValue;
  }

  return [getState, setState];
};
