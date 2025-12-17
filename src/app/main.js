import { categoryAPI } from "./api/categoryApi.js";
import { jokesAPI } from "./api/jokeApi.js";
import categoriesListRender from "./components/categoriesListRender.js";
import {
  renderJokeCards,
  renderFavoriteJokes,
} from "./components/renderJokeCards.js";
import localStorageAbstraction from "./state.js";
import { FAVORITE_KEY, getSelectedRadio } from "./utils.js";

const favoritesList = document.querySelector(".favorites-list");

const favoritesOverlay = document.querySelector(".favorites-overlay");
const closeFavoritesBtn = document.querySelector(".close-favorites");
const cardsList = document.querySelector(".cards-of-joke-list");

export const URL = "https://api.chucknorris.io/jokes";

const jokeButton = document.querySelector(".get-joke-btn");
const favoriteWrapper = document.querySelector(".header-burger-cont");

const desktopMQ = window.matchMedia("(min-width: 1280px)");

if (desktopMQ.matches) {
  const favorites = localStorageAbstraction.getItems(FAVORITE_KEY) || [];
  renderFavoriteJokes(favorites);
}

desktopMQ.addEventListener("change", (e) => {
  if (!e.matches) return;

  const favorites = localStorageAbstraction.getItems(FAVORITE_KEY) || [];
  renderFavoriteJokes(favorites);
});

jokeButton.addEventListener("click", async () => {
  const choice = getSelectedRadio();
  const searchInput = document.querySelector(".search-input");
  const selectedCategory = document.querySelector(
    "input[name=category]:checked"
  )?.value;

  const query = searchInput.value.trim();

  const actions = {
    random: () => jokesAPI.getRandom(),
    categories: () => jokesAPI.getByCategory(selectedCategory),
    search: async () => {
      const response = await jokesAPI.getBySearchInput(query);

      return response.result;
    },
  };

  const data = await actions[choice]();

  renderJokeCards(Array.isArray(data) ? data : [data]);
});

categoryAPI.getCategories().then((data) => {
  categoriesListRender(data);
});

favoritesList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("icon-like")) return;

  const updatedFavorites = localStorageAbstraction.getItems(FAVORITE_KEY) || [];

  renderFavoriteJokes(updatedFavorites);
});

favoriteWrapper.addEventListener("click", () => {
  favoritesOverlay.classList.add("active");

  if (favoritesOverlay.classList.contains("active")) {
    const favorites = localStorageAbstraction.getItems(FAVORITE_KEY);

    renderFavoriteJokes(favorites);
  }
  closeFavoritesBtn.addEventListener("click", () => {
    favoritesOverlay.classList.remove("active");
  });
});

cardsList.addEventListener("click", (event) => {
  const likeBtn = event.target.closest(".icon-like");
  if (!likeBtn) return;

  const updatedFavorites = localStorageAbstraction.getItems(FAVORITE_KEY) || [];
  renderFavoriteJokes(updatedFavorites);
});
