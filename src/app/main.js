import { categoryAPI } from "./api/categoryApi.js";
import { jokesAPI } from "./api/jokeApi.js";
import categoriesListRender from "./components/categoriesListRender.js";
import renderJokeCards from "./components/renderJokeCards.js";
import { getFavorites, getSelectedRadio } from "./utils.js";

//
const favoritesOverlay = document.querySelector(".favorites-overlay");
const favoritesList = document.querySelector(".favorites-list");
const openFavoritesBtn = document.querySelector(".open-favorites");
const closeFavoritesBtn = document.querySelector(".close-favorites");
//

const listOfJoke = document.querySelector(".cards-of-joke-list");

export const URL = "https://api.chucknorris.io/jokes";

const jokeButton = document.querySelector(".get-joke-btn");
const favoriteWraper = document.querySelector(".header-burger-cont");
const jokesContainer = document.querySelector(".jokeCards");

jokeButton.addEventListener("click", async (e) => {
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

  renderJokeCards(Array.isArray(data) ? data : [data], listOfJoke);
});

categoryAPI.getCategories().then((data) => {
  categoriesListRender(data);
});

favoriteWraper.addEventListener("click", (e) => {
  favoritesOverlay.classList.add("active");
  if (favoritesOverlay.classList.contains("active")) {
    const favorites = getFavorites();
    renderJokeCards(favorites, favoritesList);
  }
  closeFavoritesBtn.addEventListener("click", () => {
    favoritesOverlay.classList.remove("active");
  });
});
