import { getUrlByChoice } from "./utils.js";
import { handleJokeRequest } from "./api.js";
import renderJokeCard from "./components/renderjokeCard.js";
import categoriesListRender from "./components/createListCategories.js";

export const URL = "https://api.chucknorris.io/jokes";

const getJokeButton = document.querySelector(".get-joke-btn");

export function getSelectedCategory() {
  return document.querySelector("input[name=filter]:checked").value;
}

getJokeButton.addEventListener("click", async () => {
  const choice = getSelectedCategory();

  const URL = getUrlByChoice(choice);

  const data = await handleJokeRequest(URL);

  renderJokeCard(data);
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
