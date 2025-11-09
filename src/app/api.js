import jokeCardRender from "./components/createCard.js";
import categoriesListRender from "./components/createListCategories.js";

const getJokeButton = document.querySelector(".get-joke-btn");

const URL = "https://api.chucknorris.io/jokes";

function getRandomJoke() {
  const xml = new XMLHttpRequest();
  xml.open("GET", `${URL}/random`);
  xml.send();

  xml.addEventListener("readystatechange", () => {
    if (xml.readyState === 4) {
      const data = JSON.parse(xml.response);

      const { id, value, updated_at, categories } = data;
      jokeCardRender(id, value, updated_at, categories);
    }
  });
}
getRandomJoke();

function getCategories() {
  const xml = new XMLHttpRequest();
  xml.open("GET", `${URL}/categories`);
  xml.send();

  xml.addEventListener("readystatechange", () => {
    if (xml.readyState === 4) {
      const data = JSON.parse(xml.response);
      categoriesListRender(data);
    }
  });
}
getCategories();


