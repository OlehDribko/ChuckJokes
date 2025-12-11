import localStorageAbstraction from "./state.js";

export const FAVORITE_KEY = "favorites";

function getTimeHoursAgo(lastDate) {
  const date = dayjs(lastDate);
  return dayjs().diff(date, "hour");
}

function createDomElement(elementTag, className) {
  const element = document.createElement(elementTag);
  element.classList.add(className);

  return element;
}

export { getTimeHoursAgo, createDomElement };

export function getSelectedRadio() {
  return document.querySelector("input[name=filter]:checked").value;
}

export function isFavorite(id) {
  const favorites = localStorageAbstraction.getItems(FAVORITE_KEY) || [];

  return favorites.some((item) => item.id === id);
}

export function addFavoriteJoke(joke) {
  const existJokes = localStorageAbstraction.getItems(FAVORITE_KEY) || [];

  localStorageAbstraction.setItems(FAVORITE_KEY, [...existJokes, joke]);
}

export function deleteFavoriteJoke(id) {
  const existJokes = localStorageAbstraction.getItems(FAVORITE_KEY);
  const updatedJokes = existJokes.filter((joke) => joke.id !== id);
  localStorageAbstraction.setItems(FAVORITE_KEY, updatedJokes);
}
export function renderFavoriteIcon(data) {
  const { id } = data;
  const like = createDomElement("img", "icon-like");

  updateIconLike(like, id);

  like.addEventListener("click", () => {
    isFavorite(id) ? deleteFavoriteJoke(id) : addFavoriteJoke(data);

    updateIconLike(like, id);
  });

  return like;
}

export function updateIconLike(like, id) {
  if (isFavorite(id)) {
    like.classList.add("icon-like-active");
    like.src = "./img/fullLike.svg";
  } else {
    like.classList.remove("icon-like-active");
    like.src = "./img/like.svg";
  }
}
