import { handleJokeRequest } from "./api.js";
import renderJokeCard from "./components/renderjokeCard.js";
import categoriesListRender from "./components/createListCategories.js";
import { useCategory, useSearch } from "./state.js";

export const URL = "https://api.chucknorris.io/jokes";

const getJokeButton = document.querySelector(".get-joke-btn");
const getCategory = document.querySelector(".categories-list");
const form = document.querySelector(".form-wrapper");
const searchBox = document.querySelector(".search-box");

const [CATEGORY, setCategory] = useCategory();
const [SEARCH, setSearch] = useSearch();

function getSelectedRadio() {
  return document.querySelector("input[name=filter]:checked").value;
}

function getUrlByChoice(choice) {
  const category = CATEGORY();
  const query = SEARCH();
  switch (choice) {
    case "categories":
      return `${URL}/random?category=${category}`;

    case "search":
      return `${URL}/search?query=${query}`;
    default:
      return `${URL}/random`;
  }
}

form.addEventListener("change", () => {
  const searchInput = document.querySelector(".search-input");

  const choice = getSelectedRadio();

  if (choice === "search") {
    searchBox.classList.remove("hidden");
    setSearch(searchInput.value);
  } else {
    searchBox.classList.add("hidden");
    searchInput.value = "";
  }
});

getJokeButton.addEventListener("click", async () => {
  const choice = getSelectedRadio();

  const URL = getUrlByChoice(choice);
  console.log(choice);
  const data = await handleJokeRequest(URL);

  renderJokeCard(data);
});

getCategory.addEventListener("click", (event) => {
  const item = event.target.closest("li");

  if (item === null) return;

  const category = item.textContent.trim();
  setCategory(category);
});

async function getCategorysJoke() {
  try {
    const response = await fetch(`${URL}/categories`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
categoriesListRender(await getCategorysJoke());
