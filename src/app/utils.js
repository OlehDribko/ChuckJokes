function getTimeHoursAgo(lastDate) {
  const date = dayjs(lastDate);
  return dayjs().diff(date, "hour");
}

function createDomElment(elementTag, className) {
  const element = document.createElement(elementTag);
  element.classList.add(className);

  return element;
}

export { getTimeHoursAgo, createDomElment };

export function getSelectedRadio() {
  return document.querySelector("input[name=filter]:checked").value;
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function isFavorite(id) {
  const favorites = getFavorites();
  return favorites.some((item) => item.id === id);
}

export function toggleFavorite(joke) {
  const favorites = getFavorites();
  const index = favorites.findIndex((item) => item.id === joke.id);

  if (index === -1) {
    favorites.push(joke);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return true;
  } else {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}
