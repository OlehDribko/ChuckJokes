import renderjokeCard from "./components/renderjokeCard.js";
import categoriesListRender from "./components/createListCategories.js";

export const URL = "https://api.chucknorris.io/jokes";

export async function handleJokeRequest(url) {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {}
}

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
